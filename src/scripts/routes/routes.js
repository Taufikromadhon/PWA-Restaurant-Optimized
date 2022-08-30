import Detail from '../views/pages/detail-restaurants';
import RestaurantList from '../views/pages/restaurant-list';
import FavoriteRestaurants from '../views/pages/favorite-restaurants';

const routes = {
  '/': RestaurantList,
  '/list': RestaurantList,
  '/favorite': FavoriteRestaurants,
  '/detail/:id': Detail,
};

export default routes;
