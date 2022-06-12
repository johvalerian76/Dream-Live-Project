import ListHotel from '../views/pages/list-hotel';
import Detail from '../views/pages/detail';
import Favorite from '../views/pages/favorite';
import AboutUs from '../views/pages/about-us';

const routes = {
  '/': ListHotel, // default page
  '/list-hotel': ListHotel,
  '/detail/:id': Detail,
  '/favorite': Favorite,
  '/about-us': AboutUs,
};

export default routes;
