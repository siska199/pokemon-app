import "./pokemon-item.js";

class PokemonList extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: "open" });
    this._pokemons = [];
    this._loading = true;
  }
  connectedCallback() {
    this.render();
  }
  set dataPokemons(pokemons) {
    this._pokemons = pokemons;
    this.render();
  }

  set loadingState(state) {
    this._loading = state;
  }

  render() {
    this.shadowDOM.innerHTML = `
      <style>
        :host{
          max-width : 1500px;
        }
        .container-list-pokemon{
            margin: 2rem;
            display : flex;
            gap:2rem;
            flex-wrap:wrap;
            justify-content: center;
        }
        h1{
          font-family: 'Montserrat', sans-serif;
        }
      </style>

      <div class="container-list-pokemon">
      </div>
    
    `;
    if (this._pokemons.length > 0) {
      return this._pokemons.forEach((data) => {
        const pokemonItemElmn = document.createElement("pokemon-item");
        pokemonItemElmn.data = data;
        this.shadowDOM
          .querySelector(".container-list-pokemon")
          .appendChild(pokemonItemElmn);
      });
    } else if (this._loading) {
      return (this.shadowDOM.querySelector(
        ".container-list-pokemon"
      ).innerHTML = `
        <h1>Loading</h1>
      `);
    } else {
      return (this.shadowDOM.querySelector(
        ".container-list-pokemon"
      ).innerHTML = `
        <h1>Data Not Found</h1>
      `);
    }
  }
}

customElements.define("pokemon-list", PokemonList);
