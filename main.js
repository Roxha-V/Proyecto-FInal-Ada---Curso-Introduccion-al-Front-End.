const container = document.getElementById("cards-container"); /*se crea variable para definir que cuando se llame a esa variable, 
                                                               es porque se esta seleccionando a los elementos dentro de main-container,
                                                              que es un elemento del DOM - siempre esto se pone por encima ya que se
                                                              llama de forma global*/
/*console.log (container)*/





/*funcion comprobada y chequeada _solo datos character*/
function getCharacters(key, value) {
  container.innerHTML = ""


  fetch(`https://rickandmortyapi.com/api/character?${key}=${value}`)
    .then(res => res.json())
    .then(data => {
      renderCharacters(data.results);
    })
    .catch(error => {
      console.error("Error trayendo data personaje", error);
    });
}


getCharacters();
console.log(getCharacters)


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
                <p>From :${character.origin.name}</p>
                <p>Last reported location : ${character.location.name}</p>
                <p>Specie : ${character.species}</p>
                <p>Life Status : ${character.status}</p>
                <p>I appear in these episodes : ${character.episode.name}
          </div>              
                <button onClick="hideDetails('${character.id}')">Go back</button>
            
      </div>`

  })
}

/*Portal gif*/

function mostrarPortal() {
  const portalLoading = document.getElementById("loading-gif");
  portalLoading.style.display = "flex";
}

function ocultarPortal() {
  const portalLoading = document.getElementById("loading-gif");
  portalLoading.style.display = "none";
}


function validarClassNameActivo(string) {
  // parametro es de tipo string 
  // operar para buscar una coincidencia con palabera active , osea si el string contiene 
  // si enctra coincidencia es true 
  return string.includes("active")

}

function toogleInfo(id) {
  // esta fn cambia los estados entre activo y inactivo, osea alterna la clase "active" en un elemento DOM (card/nodopadre) con el ID que se le da.
  mostrarPortal(); /*muestra el gif al tocar el boton de info del personaje*/
  let nodoPadre = document.getElementById(`card${id}`)
  //console.log(nodoPadre.className)

  setTimeout(() => {   /*establece un tiempo de demora que dura la funcionalidad*/
    ocultarPortal();
  }, 1000);

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





/*filtro female*/

const btnFemale = document.getElementById('btn-female');

btnFemale.addEventListener('click', () => {
  let key = "gender"
  let value = "female"

  getCharacters(key, value)
});

/*filtro male*/

const btnMale = document.getElementById('btn-male');

btnMale.addEventListener('click', () => {
  let key = "gender"
  let value = "male"

  getCharacters(key, value)
});


/*filtro gender/unknow*/

const btnUnknownGender = document.getElementById('btn-unknown-gender');

btnUnknownGender.addEventListener('click', () => {
  let key = "gender"
  let value = "Unknown"

  getCharacters(key, value)
});


/*filtro status*/

const btnStatusAlive = document.getElementById('btn-alive');

btnStatusAlive.addEventListener('click', () => {
  let key = "status"
  let value = "Alive"

  getCharacters(key, value)
});


const btnStatusDead = document.getElementById('btn-dead');

btnStatusDead.addEventListener('click', () => {
  let key = "status"
  let value = "Dead"

  getCharacters(key, value)
});



const btnStatusUnknown = document.getElementById('btn-unknown-status');

btnStatusUnknown.addEventListener('click', () => {
  let key = "status"
  let value = "Unknown"

  getCharacters(key, value)
});

/*Filtro specie*/

const btnSpecieHuman = document.getElementById('btn-human');

btnSpecieHuman.addEventListener('click', () => {
  let key = "species"
  let value = "human"

  getCharacters(key, value)
});

const btnSpecieAlien = document.getElementById('btn-alien');

btnSpecieAlien.addEventListener('click', () => {
  let key = "species"
  let value = "alien"

  getCharacters(key, value)
});





/*Se realiza una funcion donde el forEach permite iterar y por ende
mostrar por cada uno de los personajes que aparecen en el array
del json los detalles de cada personaje, y  luego al haber invocado al DOM,
traduciremos la data de la api al html utilizando los parametros que nos brinda
el json. Cuando invocamos al dom (al container dentro del dom mejor dicho -
<container.innerHTML += >) y guardamos elementos del html en variables para
que podamos luego a esas variables definirlas y generar funciones, en este
caso la variable es la que ya definimos arriba que es <container>*/






/* button home*/

const btnHome = document.getElementById('btn-home');
btnHome.addEventListener('click', () =>
  location.href = "/")































/*ACA NO ME SALIO*

const promises = [
  `https://rickandmortyapi.com/api/character/`,
  `https://rickandmortyapi.com/api/episode`,
];


function getCharacter(key, value) {
  container.innerHTML = ""

  const fetchData = async (promises) => {
    try {
      await Promise.all(
        promises.map((promise) =>
          fetch(promise)
            .then((res) => res.json())
            .then((data) => {
              renderCharacters(data.results);
            })
        )
      );
    } catch (err) {
      console.log("Error trayendo data personaje:", err);
    }
  };
  fetchData(promises)
}
*/

/*pedido de la info hacia la api (fetch + endpoint, el primer .then (entonces) es una promesa,
un metodo que registrara la rta del pedido hacia la api respuesta es un parametro que implica
que sera igual a respuesta de la api. Lo que pasa es que, una vez que se resuelve la 
promesa  y se obtienen los datos en formato JSON, estos se encadena otro metodo (.then) que
recibe un parametro (data). Este parámetro data contiene los datos de la respuesta en formato
JSON. En este caso, se pasa <data> como argumento a la función renderCharacters(), para 
renderizar ("imprimir") los personajes obtenidos. 
Por ultimo se llama a la función renderCharacters() pasando los datos del los array del json (rta)
como argumento, en la interfaz de usuario*/

/*llamado de funcion oara traer los personajes*/





/* prueba filtro boton genero femenino

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

*/



/*  Prueba filtro para intercambiar valores de key y value

function anyFilter(key, value) {
  container.innerHTML = "";

  fetch(`https://rickandmortyapi.com/api/character/?${key}=${value}`)
    .then(res => res.json())
    .then(data => {
      filterData(data.results);
    });
}


function filterData(characters) {
  characters.forEach(character => {
    container.innerHTML +=
      `<div class="card" id="card${character.id}">  
         
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
          <button onClick="hideDetails('${character.id}')">Go back</button>
      
</div>`

  })
}

const btnMale = document.getElementById('btn-male');
btnMale.addEventListener('click', () => {
  let key = "gender"
  let value = "male"

  anyFilter(key, value)

})




/*background-image: url(img/fondo1.jpg);

    background-size: cover;

    background-repeat: no-repeat;

    background-position: center;

    background-attachment: fixed;

    si pongo imagen de tras par aque se mueva pero solo las imagenes */
