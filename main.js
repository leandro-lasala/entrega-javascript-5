const container = document.getElementById("container");
const form = document.getElementById("form");
const input = document.getElementById("poke_input");
const button = document.getElementById("button");

const getpokemon = async (id) => {
  try {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

const divider = function divider(number) {
  const div = number / 10;
  return div;
};

const cardPokemon = (pokemon) => {
  container.innerHTML = `
  <div class = "card_pokemon">
    <img src="${pokemon.sprites.other.home.front_default}">
    <h2>${pokemon.name.toUpperCase()} </h2>
    <div class = "stats_container">
    <p>${pokemon.types
      .map((item) => `<span> Class: ${item.type.name}</span>`)
      .join(" | ")}</p>
    <p>Weight: ${divider(pokemon.weight)}kg</p>
    <p>Height: ${divider(pokemon.height)}m</p>
    </div>
    </div>`;
};

const renderpokemon = async (e) => {
  e.preventDefault();
  const inputvalue = input.value;
  if (!inputvalue) {
    alert("ingresa un numero de Pokemon");
  }
  const pokemon = await getpokemon(inputvalue);
  cardPokemon(pokemon);
  form.reset();
};

const init = () => {
  form.addEventListener("submit", renderpokemon);
};

init();
