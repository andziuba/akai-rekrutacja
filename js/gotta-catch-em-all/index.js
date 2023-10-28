const pokemonsContainer = document.querySelector(".pokemons");
const typeCheckboxes = document.querySelectorAll("input[type=checkbox]");
const nameFilter = document.getElementById("pokemon-name");
const typeLabels = document.querySelectorAll("label span");
const form = document.getElementById("form-filters");
const typeColors = {
    grass: "#77CC55",
    poison: "#AA5599",
    fire: "#FF4422",
    flying: "#8899FF",
    bug: "#AABB22",
    water: "#3399FF",
    normal: "#AAAA99",
    ground: "#DDBB55",
    electric: "#FFC105",
    fairy: "#E877E8",
    fighting: "#BB5544",
    psychic: "#FF5599",
    rock: "#BBAA66",
    steel: "#8A8AA2",
    ice: "#66CCFF",
    ghost: "#6666BB",
    dragon: "#7766EE"
}

function renderPokemons(filteredPokemons) {
    pokemonsContainer.innerHTML = "";

    filteredPokemons.forEach(pokemon => {
        const pokemonCard = document.createElement("div");
        pokemonCard.classList.add("pokemon-card");

        const name = document.createElement("h2");
        name.textContent = pokemon.name;

        const image = document.createElement("img");
        image.src = pokemon.image;

        const typesContainer = document.createElement("div");
        typesContainer.classList.add("types-container");

        pokemon.types.forEach(type => {
            const typeBox = document.createElement("div");
            typeBox.classList.add("type");
            typeBox.textContent = type;
            typesContainer.appendChild(typeBox);

            typeBox.style.backgroundColor = typeColors[type];
        });

        pokemonCard.appendChild(name);
        pokemonCard.appendChild(image);
        pokemonCard.appendChild(typesContainer);

        pokemonsContainer.appendChild(pokemonCard);

    });
}

function filterPokemons(pokemons) {
    let checkedTypes = [];
    Array.from(typeCheckboxes).forEach(checkbox => {
        if (checkbox.checked) checkedTypes.push(checkbox.id); 
    });

    let filteredPokemons = pokemons.filter(pokemon => {
        return (
            (pokemon.types.some(type => checkedTypes.includes(type))) &&
            (nameFilter === "" || pokemon.name.toLowerCase().includes(nameFilter.value.toLowerCase()))
        )
    });

    return filteredPokemons;
}

function submitForm(event) {
    event.preventDefault();
    filteredPokemons = filterPokemons(pokemons);
    renderPokemons(filteredPokemons);
}

typeLabels.forEach((label => {
    let type = label.previousElementSibling.id;
    if (typeColors[type]) label.style.backgroundColor = typeColors[type];
}));

let filteredPokemons = pokemons;
renderPokemons(filteredPokemons);

form.addEventListener("submit", submitForm);
