// const container =
//   document.getElementById(
//     "cards-container"
//   ); /*se crea variable para definir que cuando se llame a esa variable, 
//                                                               es porque se esta seleccionando a los elementos dentreo de main-container,
//                                                               que es un elemento del DOM - siempre esto se pone por encima ya que se
//                                                               llama de forma global*/
// /*console.log (container)*/
// const getCharacters = () => {
//   /*aca se genera variable para almacenar la funcion llamar al fetch para que obtener los datos
//                                (en este caso personajes) */
//   fetch(
//     "https://rickandmortyapi.com/api/character"
//   ) /*pedido de la info hacia la api (fetch + endpoint*/
//     .then((res) => res.json()) /* .then (entonces) es una promesa, un metodo que registrara la rta del pedido hacia la api*/
//     /*respuesta es un parametro que implica que sera igual a respuesta de la api en */
//     .then((data) => renderCharacters(data));
// }; /* aqui lo que pasa es que una vez que se resuelve la promesa anterior
//                                                 y se obtienen los datos en formato JSON, se encadena otro metodo (.then)
//                                                 que recibe un parametro (data) Este parámetro data contiene los datos de
//                                                 la respuesta en formato JSON. En este caso, se pasa <data> como argumento a
//                                                 la función renderCharacters(), para renderizar los personajes obtenidos                                           se llama a la función renderCharacters()
//                                                pasando los datos del los array del json (rta)como argumento, en la interfaz de usuario*/
// document.addEventListener("DOMContentLoaded", () => {
//   const container = document.getElementById("cards-container");
//   function renderCharacters(data) {
//     /*console.log(data)*/
//     data.results.forEach((character) => {
//       /*console.log(character)*/
//       container.innerHTML +=
//         /*invocamos al dom y guardamos elementos del html en variables para que podamos
//                                                     luego a esas variables definirlas y generar funciones, en este caso la variable es la que ya definimos arriba que es container*/
//         /*apartir de aqui lo que pasa es que al haber hecho el forEach e iterar por cada uno de los
//         personajes que aparecen en el array del json y al haber invocado al DOM, traduciremos la data de la api al html
//         utilizando los parametros que nos brinda el json */
//         `<div class="card">    
//         <h2>Este personaje se llama ${character.name}</h2>
//         <img src="${character.image}" alt=${character.name}>
//          </div>`;
//     });
//   }
//   const detalles = document.getElementById("detalles-personajes")
//   function renderCharacters(data) {
//     data.results.forEach(character => {
//       detalles - personaje.innerHTML +=
//       `
//         <h2>Este personaje se llama ${character.name}</h2>
//         <img src="${character.image}" alt="character">
//         <button class="detalles-personaje">Saber más de este personaje</button>
//         <div class="details hidden">
//           <p>${character.gender}</p>
//           <p>${character.location.name}</p>
//           <p>${character.species}</p>
//           <p>${character.origin.name}</p>
//           <p>${character.status}</p>
//         </div>
//       `
//     });
//   }
//   container.appendChild(card);
//   const detallesButton = card.querySelector(".detalles-personaje");
//   const detailsContainer = card.querySelector(".details");
//   detallesButton.addEventListener("click", () => {
//     detailsContainer.classList.toggle("hidden")
function ready() {
    alert('DOM is ready');
    console.log(ready);
}
