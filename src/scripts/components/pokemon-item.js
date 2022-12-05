class PokemonItem extends HTMLElement {
  constructor() {
    super();
    this.shadoDOM = this.attachShadow({ mode: "open" });
  }

  set data(data) {
    this._data = data;
    this.render();
  }

  render() {
    console.log(this._data);
    this.shadoDOM.innerHTML = `
            <style>
                .card{
                    width : 15rem;
                    height : 20rem;
                    background-color : var(--cd-700);
                    display : flex;
                    flex-direction : column;
                    padding: 1rem; 0.5rem;
                    align-items : center;;
                    text-align : center;
                    font-family: 'Montserrat', sans-serif;
                    cursor: pointer;
                }
                .card:hover{
                    background-color: var(--cd-600)
                }
                img{
                    background-color: var(--cd-800);
                    width : 13rem;
                    height :13rem;
                    padding: 0.5rem;
                    object-fit: contain;
                    border-radius : 50%;
                    margin-bottom: 1rem;
                }
                .name, .type{
                    color : white;
                }

                .name {
                    font-size:1.5rem;
                    font-weight : 800;
                }
                .type{
                    font-size:1.1rem;
                    font-weight : 200;
                }

            </style>

            <section class="card">
                <img src=${this._data.sprites.other.dream_world.front_default} alt=${this._data.name}/>
                <div class="name">${this._data.name}</div>
                <div class="type">${this._data.types[0].type.name}</div>
            </section>
        
        `;
  }
}

customElements.define("pokemon-item", PokemonItem);
