const container = document.getElementById("cards-container"); /*se crea variable para definir que cuando se llame a esa variable, 
                                                               es porque se esta seleccionando a los elementos dentro de main-container,
                                                              que es un elemento del DOM - siempre esto se pone por encima ya que se
                                                              llama de forma global*/
/*console.log (container)*/


function getCharacters() {

  fetch("https://rickandmortyapi.com/api/character")
    .then(res => res.json())
    .then(data => {
      renderCharacters(data.results);

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
                <h2>This Character Is Called <br> ${character.name}</h2>
                <img src="${character.image}" alt="${character.name}">
                <button class="detalles-personaje" onClick="toogleInfo('${character.id}')"> I want to know more </button>
        </div>
                         
     <div class="details">
          <div class ="saludo">
                   <h2> Hello there!,
                   <br> I'm 
                   <span>${character.name}</span>
                   </h2>
          </div>
       
                <img src="${character.image}" alt="${character.name}">
              
          <div class ="dtls">
                <p>Gender : ${character.gender}</p>
                <p>Location : ${character.location.name}</p>
                <p>Specie : ${character.species}</p>
                <p>Origin : ${character.origin.name}</p>
                <p>Life Status : ${character.status}</p>
          </div>              
                <button onClick="hideDetails('${character.id}')">Volver atrás</button>
            
      </div>`

  })
};


/*Se realiza una funcion donde el forEach permite iterar y por ende
mostrar por cada uno de los personajes que aparecen en el array
del json los detalles de cada personaje, y  luego al haber invocado al DOM,
traduciremos la data de la api al html utilizando los parametros que nos brinda
el json. Cuando invocamos al dom (al container dentro del dom mejor dicho -
<container.innerHTML += >) y guardamos elementos del html en variables para
que podamos luego a esas variables definirlas y generar funciones, en este
caso la variable es la que ya definimos arriba que es <container>*/



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

/* puebafiltro botton genero femenino*/

function womanFilter(gender, female) {
  container.innerHTML = "";

  fetch(`https://rickandmortyapi.com/api/character/?${gender}=${female}`)
    .then(res => res.json())
    .then(data => {
      womenData(data.results);
    });
}



const btnWoman = document.getElementById('btn-woman');
btnWoman.addEventListener('click', () =>
  womanFilter("gender", "female"))



function womenData(females) {
  females.forEach(female => {
    container.innerHTML +=
      `<div class="card" id="card${female.id}">  
         
  <div class="resume">
          <h2>This Character Is Called <br> ${female.name}</h2>
          <img src="${female.image}" alt="${female.name}">
          <button class="detalles-personaje" onClick="toogleInfo('${female.id}')"> I want to know more </button>
  </div>
                   
<div class="details">
    <div class ="saludo">
             <h2> Hello there!,
             <br> I'm 
             <span>${female.name}</span>
             </h2>
    </div>
 
          <img src="${female.image}" alt="${female.name}">
        
    <div class ="dtls">
          <p>Gender : ${female.gender}</p>
          <p>Location : ${female.location.name}</p>
          <p>Specie : ${female.species}</p>
          <p>Origin : ${female.origin.name}</p>
          <p>Life Status : ${female.status}</p>
    </div>              
          <button onClick="hideDetails('${female.id}')">Volver atrás</button>
      
</div>`

  })
} ``



































/*prueva cualquier filtro permitido por la api*/

function anyFilter(key, value) {
  container.innerHTML = "";   /*llamado al container*/

  fetch(`https://rickandmortyapi.com/api/character/?${key}=${value}`)
    .then(res => res.json())
    .then(data => {
      infoCharacters(data.results);
    });
}

/*para que sea más dinámica la func. y acepte otros parámetros
que filtren,se cambian los parametros gender/female para que
tome los parámetros key y value, que son los que representarán
la clave y el valor por los cuales se quiere filtrar los datos que tare la application*/

const btnFiltro = document.getElementById('btn-custom-filter');


/*
btnFiltro.addEventListener('click', () => {
  const key = "gender"; // Reemplaza con la clave por la que deseas filtrar
  const value = "female"; // Reemplaza con el valor por el que deseas filtrar
  customFilter(key, value);
}); */






















/*background-image: url(img/fondo1.jpg);

    background-size: cover;

    background-repeat: no-repeat;

    background-position: center;

    background-attachment: fixed;

    si pongo imagen de tras par aque se mueva pero solo las imagenes*/