import 'regenerator-runtime'; /* for async await transpile */
import './components/app-bar';
import './components/hero-section';
import './components/about-section';
import './components/footer-bar';
import '../styles/main.css';
import '../styles/responsive.css';
import '../styles/spinner.css';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import './utils/drawer-initiator';
import App from './views/app';
import swRegister from './utils/sw-register';

const app = new App({
  content: document.querySelector('#item'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
