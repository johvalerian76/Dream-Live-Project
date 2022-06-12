class AboutSection extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <section id="about" class="about__content">
            <div class="container_img_about">
                <picture>
                    <img tabindex="0" class="img__about lazyload" data-src="../images/about-dream-live-large.jpg" alt="Dream Live Logo">
                </picture>
            </div>
            <div class="about__details">
                <h2 tabindex="0" class="about__title">
                    ABOUT DREAM LIVE
                </h2>
                <p tabindex="0" class="about__description">
                   We, DreamLive! We are all about perfection in simplycity.
                </p>
                <p tabindex="0" class="about__description">
                  Let me introduce you to us. We are Dream Live. Our duty is how to keep your dreams alive. With us you can you can travel to anywhere without worrying about anything. We mean exactly anything. You can stay wherever you want and do whatever you want or not at all.
                </p>
            </div>
        </section>
        `;
  }
}

customElements.define('about-section', AboutSection);
