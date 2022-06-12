/* eslint-disable import/no-named-as-default-member */
import HotelSource from '../../data/hotel-source';
import { HotelItem, Spinner } from '../templates/template-creator';

const ListHotel = {
  async render() {
    return `
        <div id="hotels" class="hotels"></div>
        <div id="spin"></div>
    `;
  },

  async afterRender() {
    const spin = document.querySelector('#spin');
    spin.innerHTML = Spinner();
    const hotelsContainer = document.querySelector('#hotels');
    hotelsContainer.innerHTML = '';

    try {
      const hotel = await HotelSource.ListHotel();
      console.log(hotel.data.body.searchResults.results);
      const totalRest = hotel.length;
      hotel.data.body.searchResults.results.forEach((restaurants, index) => {
        hotelsContainer.innerHTML += HotelItem(restaurants, index, totalRest);
      });
      spin.style.display = 'none';
    } catch (err) {
      spin.style.display = 'none';
      hotelsContainer.innerHTML = `Error: ${err}, try to refresh!`;
    }
  },
};

export default ListHotel;
