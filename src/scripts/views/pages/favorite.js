import FavoriteHotelIdb from '../../data/favoritehotel-idb';
import { HotelItem } from '../templates/template-creator';

const Favorite = {
  async render() {
    return `
        <h1 tabindex="0" class="latest__label">Bookmark Hotel</h1>
        <div id="hotels" class="hotels"></div>
    `;
  },

  async afterRender() {
    const hotels = await FavoriteHotelIdb.getAllRestaurants();
    const hotelsContainer = document.querySelector('#hotels');
    if (hotels.length === 0) {
      hotelsContainer.innerHTML = `
        <div>
        </div>
        <div class="no-favorite">
          You dont have any Favorite Restaurant
        </div>
      `;
    }
    const totalRest = hotels.length;
    hotels.forEach((hotel, index) => {
      hotelsContainer.innerHTML += HotelItem(hotel, index, totalRest);
    });
  },
};

export default Favorite;
