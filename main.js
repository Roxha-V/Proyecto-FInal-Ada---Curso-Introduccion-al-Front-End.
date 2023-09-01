const container = document.getElementById("cards-container"); /*se crea variable para definir que cuando se llame a esa variable, 
                                                               es porque se esta seleccionando a los elementos dentro de main-container,
                                                              que es un elemento del DOM - siempre esto se pone por encima ya que se
                                                              llama de forma global*/
/*console.log (container)*/


function getCharacters() {
  //var dataApi = [];              /* aca se crea una variable llamada dataApi se le asigna un array vacío.
  //   Esta variable se utiliza más adelante para almacenar los resultados de la API.*/
  fetch("https://rickandmortyapi.com/api/character")
    .then(res => res.json())
    .then(data => {
      renderCharacters(data.results);
      // dataApi = data.results;
      // renderAllDataCharacters(data.results)
    })
  //return dataApi;
};


/*pedido de la info hacia la api (fetch + endpoint, el primer .then (entonces) es una promesa,
un metodo que registrara la rta del pedido hacia la api respuesta es un parametro que implica
que sera igual a respuesta de la api. Lo que pasa es que, una vez que se resuelve la 
promesa  y se obtienen los datos en formato JSON, estos se encadena otro metodo (.then) que
recibe un parametro (data). Este parámetro data contiene los datos de la respuesta en formato
JSON. En este caso, se pasa <data> como argumento a la función renderCharacters(), para 
renderizar ("imprimir") los personajes obtenidos. 
Por ultimo se llama a la función renderCharacters() pasando los datos del los array del json (rta)
como argumento, en la interfaz de usuario*/


getCharacters();
/*console.log(getCharacters)*/

function renderCharacters(characters) {
  characters.forEach(character => {
    container.innerHTML += `
      <div class="card" id="card${character.id}">  
         
        <div class="resume">
                <h2>Este personaje se llama <br> ${character.name}</h2>
                <img src="${character.image}" alt="${character.name}">
                <button class="detalles-personaje" onClick="toogleInfo('${character.id}')">Saber más de este personaje</button>
            </div>
                         
            <div class="details">
      
                <h2>Este personaje se llama <br> ${character.name}</h2>
                <img src="${character.image}" alt="${character.name}">
                <p>${character.gender}</p>
                <p>${character.location.name}</p>
                <p>${character.species}</p>
                <p>${character.origin.name}</p>
                <p>${character.status}</p>
                <button onClick="hideDetails('${character.id}')">Volver atrás</button>
                </div>              
        
                </div>
      </div>`

  })
};

/*<button class="saludo-button" onClick="mostrarSaludo('${character.name}')">¡Saludar!</button>*/


function validarClassNameActivo(string) {
  // parametro es de tipo string 
  // operar para buscar una coincidencia con palabera active , osea si el string contiene 
  // si enctra coincidencia es true 
  return string.includes("active")

}

function toogleInfo(id) {
  // esta fn cambia los estados entre activo y inactivo, osea alterna la clase "active" en un elemento DOM (card/nodopadre) con el ID que se le da.
  let nodoPadre = document.getElementById(`card${id}`)
  //console.log(nodoPadre.className)

  if (validarClassNameActivo(nodoPadre.className)) {
    // solo me ejecuto cuando la card esta activa y deberia cambiar al estado contrario
    nodoPadre.className = nodoPadre.className.replace("active", "")

  }
  else {
    // solo me ejecuto sivno esta acitbo por lo tanto la card no tiene clase activo y lo que deberia hacer es activar
    nodoPadre.className += " active"
  }

}

function hideDetails(id) {

  let nodoPadre = document.getElementById(`card${id}`)

  if (validarClassNameActivo(nodoPadre.className)) {

    nodoPadre.classList.toggle("active");
  }
}






/*Se realiza una funcion donde el forEach permite iterar y por ende
mostrar por cada uno de los personajes que aparecen en el array
del json los detalles de cada personaje, y  luego al haber invocado al DOM,
traduciremos la data de la api al html utilizando los parametros que nos brinda
el json. Cuando invocamos al dom (al container dentro del dom mejor dicho -
<container.innerHTML += >) y guardamos elementos del html en variables para
que podamos luego a esas variables definirlas y generar funciones, en este
caso la variable es la que ya definimos arriba que es <container>*/



