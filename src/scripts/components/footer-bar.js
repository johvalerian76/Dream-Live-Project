class FooterBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <footer class="main-footer">
            <p tabindex="0" class="p-footer">
            Copyright &#169; 2022 - Dream Live
            </p>
        </footer>
      `;
  }
}

customElements.define('footer-bar', FooterBar);
