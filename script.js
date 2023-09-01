


-------------------------------------------
const container = document.getElementById("cards-container");

function getCharacters() {

    fetch("https://rickandmortyapi.com/api/character")
        .then(res => res.json())
        .then(data => {
            renderCharacters(data.results);

        })
};

getCharacters();

function renderCharacters(characters) {
    let nodosBtnHtmldePersonajes = [];
    characters.forEach(character => {
        container.innerHTML += `
      <div class="card" id='soy-${character.id}'>
        <h2>Este personaje se llama <br> <span>${character.name}<span><h2>
        <img src="${character.image}" alt="${character.name}">
        <button class="detalles-personaje" character-id="${character.id} id='btn-${character.id}'>Saber más de este personaje</button>
      </div>
    `;
        nodosBtnHtmldePersonajes.push(document.getElementById(`btn-${character.id}`))
    })
    nodosBtnHtmldePersonajes.forEach(nodoBtn => {
        nodoBtn.addEventListener("click", function () {
            showDetails(character)
            //
        })
    })
}


let detailsContainer = document.getElementById(`${character.id}`).addEventListener("click", function () {
    showDetails(character)
})


function showDetails(character) {

    detallesContainer.innerHTML = `
      <h2>Este personaje se llama <br> ${character.name}</h2>
      <img src="${character.image}" alt="${character.name}">
      <p>${character.gender}</p>
      <p>${character.location.name}</p>
      <p>${character.species}</p>
      <p>${character.origin.name}</p>
      <p>${character.status}</p>
      <button class="cerrar-detalles" onClick="hideDetails('${character.id}')">&#10005;</button>  /*el codigo es de la x*/
      <button class="saludo-button" onClick="mostrarSaludo('${character.name}')">¡Saludar!</button>
    </div>`
}





/*configura eventlistener  para los botones con la clase "detalles-personaje". Cuando se hace clic en uno de estos botones, recupera el ID del personaje  por id y llama a la función showDetails con el id del personaje extraído.*/



