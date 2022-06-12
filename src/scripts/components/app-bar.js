class AppBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
            <header class="main-header">
                <div class="container">
                    <a tabindex="0" href="index.html" class="header__title">
                        <h1>Dream Live</h1>
                    </a>
                    <nav id="drawer" class="nav">
                        <button tabindex="0" class="menu-toggle" aria-label="navigation-menu">
                            <input tabindex="-1" type="checkbox">
                            <span class="check"></span>
                            <span class="check"></span>
                            <span class="check"></span>
                        </button>
                        <ul class="nav__list">
                            <li class="nav__item"><a href="#/">Home</a></li>
                            <li class="nav__item"><a href="#/favorite">Bookmark</a></li>
                            <li class="nav__item"><a href="#/about-us">About Us</a></li>
                        </ul>
                    </nav>
                </div>
            </header>
        `;
  }
}

customElements.define('app-bar', AppBar);
