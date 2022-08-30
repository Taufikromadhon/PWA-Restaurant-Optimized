class Jumbotron extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
            <div class="jumbotron">
              <div class="hero-inner">
                <div class="hero-inner__image"></div>
                <h1 class="hero-inner__title">Tauresto!</h1>
                <p class="hero-inner__tagline">Tau Banyak Tentang Restoran, Untuk Kamu!</p>
                <a href="#mainContent">
                <button class="hero-inner__button-buktikan">Explore</button>
                </a>
              </div>
            </div>
          `;
  }
}

customElements.define('jumbotron-app', Jumbotron);
