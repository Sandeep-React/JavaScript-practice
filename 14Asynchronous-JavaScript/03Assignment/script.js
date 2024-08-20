document.addEventListener('DOMContentLoaded', () => {
    const pokemonContainer = document.getElementById('pokemon-container');

    const fetchPokemon = async (id) => {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const data = await response.json();
        return data;
    };

    const createPokemonCard = (pokemon) => {
        const card = document.createElement('div');
        card.classList.add('pokemon-card');

        const img = document.createElement('img');
        img.src = pokemon.sprites.front_default;
        img.alt = pokemon.name;

        const name = document.createElement('h2');
        name.textContent = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);

        card.appendChild(img);
        card.appendChild(name);
        pokemonContainer.appendChild(card);
    };

    const loadPokemons = async () => {
        for (let i = 1; i <= 150; i++) {
            const pokemon = await fetchPokemon(i);
            createPokemonCard(pokemon);
        }
    };

    loadPokemons();
});
