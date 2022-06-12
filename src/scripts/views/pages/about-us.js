import { AboutUsPage, Spinner } from '../templates/template-creator';

const AboutUs = {
  async render() {
    return `
            <h1 tabindex="0" class="latest__label">About Us</h1>
            <div id="aboutUS" class="aboutUS"></div>
            <div id="spin"></div>
        `;
  },

  async afterRender() {
    const spin = document.querySelector('#spin');
    spin.innerHTML = Spinner();
    const aboutUSContainer = document.querySelector('#aboutUS');
    aboutUSContainer.innerHTML = '';

    try {
      const aboutUS = await AboutUsPage();
      aboutUSContainer.innerHTML = aboutUS;
      spin.style.display = 'none';
    } catch (err) {
      spin.style.display = 'none';
      aboutUSContainer.innerHTML = `Error: ${err}, try to refresh!`;
    }
  },
};

export default AboutUs;
