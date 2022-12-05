import "./pokemon-item.js";

class PokemonList extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: "open" });
    this._pokemons = [];
  }
  connectedCallback() {
    this.render();
  }
  set dataPokemons(pokemons) {
    this._pokemons = pokemons;
    this.render();
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
      </style>

      <div class="container-list-pokemon">
      </div>
    
    `;
    this._pokemons.forEach((data) => {
      const pokemonItemElmn = document.createElement("pokemon-item");
      pokemonItemElmn.data = data;
      this.shadowDOM
        .querySelector(".container-list-pokemon")
        .appendChild(pokemonItemElmn);
    });
  }
}

customElements.define("pokemon-list", PokemonList);
