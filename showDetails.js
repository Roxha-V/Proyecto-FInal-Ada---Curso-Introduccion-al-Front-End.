function showDetails(id) {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
        .then(res => res.json())
        .then(data => {

            detallesContainer.innerHTML = detailsCharacters(data);
            const cardContainer = document.getElementById(`soy-${id}`);
            cardContainer.classList.add("activo");
        });
}
