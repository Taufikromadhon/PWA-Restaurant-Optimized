class AppFooter extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <footer>
    <p class="textFooter2">Taufik Romadhon | TauResto &#169; 2022 | Dicoding Indonesia</p>
    </footer>
    `;
  }
}

customElements.define('footer-bar', AppFooter);
