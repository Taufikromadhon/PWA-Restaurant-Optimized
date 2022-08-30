// import FavoriteRestoIdb from '../../src/scripts/data/favorite-resto-idb';
import FavoriteRestoIdb from '../../src/scripts/data/favorite-resto-idb';
import LikeButtonInitiator from '../../src/scripts/utils/like-button-initiator';

const createLikeButtonPresenterWithRestaurant = async (restaurant) => {
  await LikeButtonInitiator.init({
    likeButtonContainer: document.querySelector('#likeButtonContainer'),
    favoriteRestaurants: FavoriteRestoIdb,
    restaurant,
  });
};

export { createLikeButtonPresenterWithRestaurant };
