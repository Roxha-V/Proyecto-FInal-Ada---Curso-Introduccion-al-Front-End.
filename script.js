let getCharacters = () => {
  fetch("https://rickandmortyapi.com/api/character")
    .then((res) => res.json())
    .then((data) => renderCharacters(data));
};

getCharacters();

const renderCharacters = (data) => {
  console.log(data);

  data.results.forEach((character) => {
    console.log(character);
  });
};
