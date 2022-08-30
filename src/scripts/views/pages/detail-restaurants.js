import UrlParser from '../../routes/url-parser';
import DataRestoDicodingSource from '../../data/data-resto-dicoding-source';
import {
  createDetailOfRestaurantTemplate,
  createEmptyStateData,
  createOfflineStateData,
} from '../templates/template-creator';
import LikeButtonInitiator from '../../utils/like-button-initiator';
import FavoriteRestoIdb from '../../data/favorite-resto-idb';

const Detail = {
  async render() {
    return `
    <div tabindex="0" id="mainContent" class="content">
      <div id="offlineState" class="offline-state__detail"></div>
      <div id="detailRestaurantContainer"></div>
      <div id="likeButtonContainer"></div>
      <div id="emptyState"></div>
    </div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const offlineStateContainer = document.querySelector('#offlineState');
    const restaurantContainer = document.querySelector(
      '#detailRestaurantContainer',
    );
    const emptyStateContainer = document.querySelector('#emptyState');

    if (navigator.onLine) {
      const restaurant = await DataRestoDicodingSource.detailRestaurantList(
        url.id,
      );
      if (restaurant.length !== 0) {
        offlineStateContainer.style.display = 'none';
        restaurantContainer.innerHTML
          += createDetailOfRestaurantTemplate(restaurant);
        LikeButtonInitiator.init({
          likeButtonContainer: document.querySelector('#likeButtonContainer'),
          favoriteRestaurants: FavoriteRestoIdb,
          restaurant: {
            id: url.id,
            name: restaurant.name,
            city: restaurant.city,
            pictureId: restaurant.pictureId,
            rating: restaurant.rating,
            description: restaurant.description,
          },
        });
      } else {
        offlineStateContainer.style.display = 'none';
        emptyStateContainer.innerHTML += createEmptyStateData();
      }
    } else {
      offlineStateContainer.style.display = 'grid';
      offlineStateContainer.innerHTML += createOfflineStateData();
      emptyStateContainer.innerHTML += createEmptyStateData();
      const restaurant = await DataRestoDicodingSource.detailRestaurantList(
        url.id,
      );
      if (restaurant.length !== 0) {
        emptyStateContainer.style.display = 'none';
        restaurantContainer.innerHTML
          += createDetailOfRestaurantTemplate(restaurant);
        LikeButtonInitiator.init({
          likeButtonContainer: document.querySelector('#likeButtonContainer'),
          favoriteRestaurants: FavoriteRestoIdb,
          restaurant: {
            id: restaurant.id,
            name: restaurant.name,
          },
        });
      }
    }
  },
};

export default Detail;
