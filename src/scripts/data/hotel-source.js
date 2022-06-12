/* eslint-disable no-empty-function */
import apiEndpoint from '../globals/api-endpoint';

class HotelSource {
  static async ListHotel() {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Host': 'hotels4.p.rapidapi.com',
        'X-RapidAPI-Key': 'deaa893a8bmsh50604ed9f9c2581p15f6b5jsn6ba8a9132fab',
      },
    };

    return fetch('https://hotels4.p.rapidapi.com/properties/list?destinationId=1506246&pageNumber=1&pageSize=25&checkIn=2020-01-08&checkOut=2020-01-15&adults1=1&sortOrder=PRICE&locale=en_US&currency=USD', options)
      .then((response) => response.json())
      .catch((err) => console.error(err));
  }

  static async detailHotel(id) {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Host': 'hotels4.p.rapidapi.com',
        'X-RapidAPI-Key': 'deaa893a8bmsh50604ed9f9c2581p15f6b5jsn6ba8a9132fab',
      },
    };

    return fetch('https://hotels4.p.rapidapi.com/properties/get-details?id=424023&checkIn=2020-01-08&checkOut=2020-01-15&adults1=1&currency=USD&locale=en_US', options)
      .then((response) => response.json())
      .catch((err) => console.error(err));
  }

  static async postRestaurant(data) {

  }
}

export default HotelSource;
