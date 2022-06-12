import { async } from 'regenerator-runtime';
import UrlParser from '../../routes/url-parser';
import HotelSource from '../../data/hotel-source';
import { HotelDetail, Spinner } from '../templates/template-creator';
import LikeButtonPresenter from '../../utils/like-button-presenter';
import FavoriteHoteldb from '../../data/favoritehotel-idb';

const Detail = {
  async render() {
    return `
      <h1 tabindex="0" class="latest__label">Detail Hotel</h1>
      <div id="hotel" class="hotel"></div>
      <div id="spin"></div>
      <div id="likeButtonContainer"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const hotelContainer = document.querySelector('#hotel');
    const spin = document.querySelector('#spin');
    spin.innerHTML = Spinner();

    try {
      const dataHotel = await HotelSource.detailHotel(url.id);
      console.log(dataHotel.data.body);
      hotelContainer.innerHTML = HotelDetail(dataHotel.data.body);

    await LikeButtonPresenter.init({
        likeButtonContainer: document.querySelector('#likeButtonContainer'),
        favoriteRestaurants: FavoriteHoteldb,
        hotel: dataHotel,
      });
      spin.style.display = 'none';
    } catch (err) {
      hotelContainer.innerHTML = `Error: ${err}, swipe up to refresh!`;
      spin.style.display = 'none';
    }

    // const Submit = document.querySelector('#submit-review');
    // const inputName = document.querySelector('#inputName');
    // const inputReviews = document.querySelector('#inputReview');

    // Submit.addEventListener('click', async (event) => {
    //   event.preventDefault();
    //   if (inputName.value === '' || inputReviews.value === '') {
    //     alert('input must be filled!!');
    //     inputName.value = '';
    //     inputReviews.value = '';
    //   } else {
    //     const dataInput = {
    //       id: url.id,
    //       name: inputName.value,
    //       review: inputReviews.value,
    //     };
    //     const result = await RestaurantSource.postRestaurant(dataInput);
    //     if (result.error) {
    //       alert(result.message);
    //     } else {
    //       consumerReview(url, inputName.value, inputReviews.value);
    //       inputName.value = '';
    //       inputReviews.value = '';
    //       console.log(result);
    //     }
    //   }
    // });
  },
};

export default Detail;
