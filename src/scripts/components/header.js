import "./search-input.js";

class Header extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = `
            <style>
                nav{
                   max-width : 1500px;
                   padding: 1rem;
                   max-height : 3rem;
                   display:flex;
                   align-items : center;
                   justify-content : space-between;
                   background-color: var(--cd-800);

                }
                h1{
                  font-size:2.4rem;
                  font-family: 'Fredoka One', cursive;
                  cursor:pointer;
                }
                </style>

                <nav class="">
                  <h1 class="">Pokemon</h1>
                </nav>

        `;
    const creteSearchElmn = document.createElement("search-input");
    this.shadowDOM.querySelector("nav").appendChild(creteSearchElmn);
  }

  disconnectedCallback() {}
  adoptedCallback() {}
  attributeChangedCallback(name, oldValue, newValue) {}

  static get observedAttributes() {
    return [""];
  }
}

customElements.define("header-custome", Header);
