
const container = document.getElementById("cards-container"); /*console.log (container)*/ /*se crea variable para definir que cuando se llame a esa variable, 
                                                               es porque se esta seleccionando a los elementos dentro de main-container,
                                                              que es un elemento del DOM - siempre esto se pone por encima ya que se
                                                              llama de forma global*/

var _ = "" // Variable que define que _ es igual a nada*/
let info
let episode




/*funcion comprobada y chequeada solo datos character*/
function getCharacters(genderValue = "", statusValue = "", speciesValue = "", pageNumber = 1) {
  /* Esta es una funcion para obtener personajes con opciones de filtro, lo que hace es que cuando la funcion se llame
  los parametros que se le pasen "filtraran" el resultado, hay que tener en cuenta que hay que respetar los lugares de los parametros,
  y que si no por ej quiero filtrar solo por status seria 
  const aliveCharacters = getCharacters("", "alive", "","")  lo que hace es  - console.log('getcharacter values', genderValue, statusValue, statusValue, pageNumber)*/

  container.innerHTML = "";

  fetch(`https://rickandmortyapi.com/api/character?gender=${genderValue}&status=${statusValue}&species=${speciesValue}&page=${pageNumber}`)
    .then(res => res.json())
    .then(data => {

      renderInfo(data.info)  /*info y data son etiquetas que ya vienen en el json de la api para buscar informacion*/
      totalPages = data.info.pages /*totalpages es una variable No una func)*/
      renderCharacters(data.results)
      renderPages()
    })
    .catch(error => {
      console.error("Error trayendo data personaje", error);
    })
}

function renderInfo(objInfo) {
  Informacion = objInfo;
}

document.addEventListener('DOMContentLoaded', function () {
  getCharacters();
  /*console.log(getCharacters) - ver si funciona la funcion*/
})


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
        <div class="details-container">
          <div class ="dtls">
                <p>Gender : ${character.gender}</p> 
                <p>From :${character.origin.name}</p>
                <p>Last reported location : ${character.location.name}</p>
                <p>Specie : ${character.species}</p>
                <p>Life Status : ${character.status}</p>
                
          </div>              
                <button onClick="hideDetails('${character.id}')">Go back</button>
          </div> 
      </div>`

  })
}


/*paginacion*/

/*variables*/
let actualPage = 1; /* contador - rastrea pag actual */

let totalPages = 1; /* almacena el número total de páginas */

const btnPrev = document.getElementById("btn-prev");
const btnNext = document.getElementById("btn-next");
const btnFirst = document.getElementById("btn-first");
const btnLast = document.getElementById("btn-last");
const pageNumbers = document.getElementById("page-numbers");


function renderPages() {
  pageNumbers.innerHTML += `${actualPage}`;
}

btnFirst.addEventListener('click', function () {
  actualPage = 1
  getCharacters(_, _, _, actualPage);
  updatePrevBtn();
  updateNextBtn();
  renderPages();
});

btnLast.addEventListener('click', function () {
  actualPage = totalPages;
  getCharacters(_, _, _, actualPage);
  updatePrevBtn();
  updateNextBtn();
  renderPages();
});




/*NEXT BTN*/


btnNext.addEventListener('click', function () {   //console.log("valor actualPage antes de hacer click en nxt btn", actualPage);

  actualPage++ /* incrementa valor actualPage*/ // console.log("valor actualPage despues de hacer click en nxt btn", actualPage);

  getCharacters(_, _, _, actualPage);

  updatePrevBtn()

  renderPages()
});

/*aqui se le añade un una funcion al evento click, que lo que produce es que
al hacer click al boton "btnNext" el valor de actualpage, que se pasa como parametro
para la funcion getCharacter, incremente, por ende al incrementar el valor, tambien
incrementara la pagina en la que nos encontremos*/


/*PREV BTN*/

btnPrev.addEventListener('click', () => {
  //console.log("valor actualPage antes de hacer click en prev btn", actualPage)

  actualPage--;
  //console.log("valor actualPage despues de hacer click en prev btn", actualPage)

  updatePrevBtn();

  getCharacters(_, _, _, actualPage);

  renderPages()

});

/*aqui se le añade un una funcion al evento click, que lo que produce es que
al hacer click al boton "btnPrev" el valor de actualpage, que se pasa como parametro
para la funcion getCharacter, vaya en decrimento x 1, por ende al bajar el valor, tambien
"bajara" la pagina en la que nos encontremos */





/*paginacion btns prev y next disable*/

function updatePrevBtn() {
  //console.log("valor actualpage cuando se hace update btn prev", actualPage)

  if (actualPage > 1) {
    btnPrev.disabled = false;

    //console.log("me ejecuto cuando actualpage > 1", actualPage)

  }
  if (actualPage <= 1)
    btnPrev.disabled = true;
  /*console.log("me ejecuto cuando actualpage  < 1", actualPage)*/

}



/*la funcion updateprevbtn expresa una condicion  donde si el valor de actualpage
es mayor a uno, el btnPrev permanece habilitado (ya que sera falso para disable),
mientras que si el valor de actualpage es menor a 1 el btnprev se dehabilitara
(ya que sera true para disable)*/


function updateNextBtn() {
  if (actualPage >= totalPages) {
    btnNext.disabled = true; // Deshabilita el botón "Siguiente" si estás en la última página.
  } else {
    btnNext.disabled = false; // Habilita el botón "Siguiente" si no estás en la última página.
  }
}



/*verifica si la página actual es = o mayor al n total de 
páginas, por ende si la condicion se cumple,
 se esta en la ultima pagina y btn de pag siguiente se desabilita.*/



/*Portal gif*/

function mostrarPortal() {  //funcion para mostrar "portal" //
  const portalLoading = document.getElementById("loading-gif");
  portalLoading.style.display = "flex";
}

function ocultarPortal() {  //funcion para ocultar "portal" //
  const portalLoading = document.getElementById("loading-gif");
  portalLoading.style.animation = "none";
  portalLoading.style.display = "none";
}

/* activar y desactivar card- toogle*/


function validarClassNameActivo(string) { /*parametro es de tipo string , opera para buscar una coincidencia con palabera active , osea si el string contiene (osea si encuentra coincidencia es true) */
  return string.includes("active")

}

function toogleInfo(id) {  // esta fn cambia los estados entre activo y inactivo, osea alterna la clase "active" en un elemento DOM (card/nodopadre) con el ID que se le da.
  mostrarPortal(); /*muestra el gif al tocar el boton de info del personaje*/

  let nodoPadre = document.getElementById(`card${id}`) //console.log(nodoPadre.className)


  setTimeout(() => {   /*establece un tiempo de demora que dura la funcion*/
    ocultarPortal();
  }, 2700);

  if (validarClassNameActivo(nodoPadre.className)) { // condicion:solo me ejecuto cuando la card esta activa y deberia cambiar al estado contrario

    nodoPadre.className = nodoPadre.className.replace("active", "")

  }
  else { // condicion: solo me ejecuto sino la card esta "active", por lo tanto la card no tiene clase activo y lo que deberia hacer es activar

    nodoPadre.className += " active"

  }

}

function hideDetails(id) {

  let nodoPadre = document.getElementById(`card${id}`)

  if (validarClassNameActivo(nodoPadre.className)) {

    nodoPadre.classList.toggle("active");  //toogle cambia de un estadoa otro
  }
}






/*filtro female*/

const btnFemale = document.getElementById('btn-female');
btnFemale.addEventListener('click', () => {
  getCharacters("female");
});

/*filtro male*/

const btnMale = document.getElementById('btn-male');
btnMale.addEventListener('click', () => {
  getCharacters("male");

});


/*filtro gender/unknow*/

const btnUnknownGender = document.getElementById('btn-unknown-gender');
btnUnknownGender.addEventListener('click', () => {
  getCharacters("Unknown");
});

/*filtro gender/genderless*/

const btnGenderLess = document.getElementById('btn-gender-less');
btnGenderLess.addEventListener('click', () => {
  getCharacters("Genderless");
});

/*Filtros status*/

const btnStatusAlive = document.getElementById('btn-alive');
btnStatusAlive.addEventListener('click', () => {
  getCharacters("", "Alive")
});


const btnStatusDead = document.getElementById('btn-dead');
btnStatusDead.addEventListener('click', () => {
  getCharacters("", "Dead")
});


const btnStatusUnknown = document.getElementById('btn-unknown-status');
btnStatusUnknown.addEventListener('click', () => {
  getCharacters("", "Unknown")
});


/*Filtros specie*/

const btnSpecieHuman = document.getElementById('btn-human');
btnSpecieHuman.addEventListener('click', () => {
  getCharacters("", "", "Human")
})

const btnSpecieAlien = document.getElementById('btn-alien');

btnSpecieAlien.addEventListener('click', () => {
  getCharacters("", "", "Alien")
});



/* button home*/

const homeBtn = document.getElementById("btn-home")
homeBtn.addEventListener('click', () => {
  window.location.href = "index.html"
});

const homeImg = document.getElementById("logo1")
homeImg.addEventListener('click', () => {
  window.location.href = "index.html"
});


/*Se realiza una funcion donde el forEach permite iterar y por ende
mostrar por cada uno de los personajes que aparecen en el array
del json los detalles de cada personaje, y  luego al haber invocado al DOM,
traduciremos la data de la api al html utilizando los parametros que nos brinda
el json. Cuando invocamos al dom (al container dentro del dom mejor dicho -
<container.innerHTML += >) y guardamos elementos del html en variables para
que podamos luego a esas variables definirlas y generar funciones, en este
caso la variable es la que ya definimos arriba que es <container>*/

























