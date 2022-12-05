import searchIcon from "../../assets/loupe.png";

class SearchInput extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }
  set clickEvent(event) {
    this._click = event;
    this.render();
  }

  get valueSearchInput() {
    return this.shadowDOM.querySelector("#inputSearch").value;
  }
  render() {
    this.shadowDOM.innerHTML = `
          <style>
              :host{
                border : 2px solid pink;
                background-color: var(--cd-700);
                width : 25rem;
                gap:1rem;
                display : flex;
                border : 0.005rem solid var(--cd-700);
                overflow:hidden;
                border-radius : 0.5rem;
                align-items : center;
                padding : 0.3rem;
              }
              input{
                width : 100%;
                background-color: var(--cd-700);
                outline : none;
                border: none;
                color: white;
              }
              input::placeholder{
                color: var(--cd-300);
              }
              .icon-search{
                cursor:pointer;
                width:1.8rem;
                height:1.8rem;
              }
              </style>
  
              <input type="text" id="inputSearch" placeholder="Search Pokemon..."/>
              <img id="btnSearch" class="icon-search" src=${searchIcon} />
              
          `;
    this.shadowDOM
      .querySelector("#btnSearch")
      .addEventListener("click", this._click);
  }

}

customElements.define("search-input", SearchInput);
