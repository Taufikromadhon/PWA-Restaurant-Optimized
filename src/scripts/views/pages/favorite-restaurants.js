import FavoriteRestoIdb from '../../data/favorite-resto-idb';
import {
  createEmptyStateData,
  createOfflineStateData,
  createRestaurantItemTemplate,
} from '../templates/template-creator';

const FavoriteRestaurants = {
  async render() {
    return `
      <div tabindex="0" id="mainContent" class="content">
        <h2 class="content__heading">Favorite Restaurants</h2>
        <div id="offlineState"></div>
        <div id="favoriteRestaurants" class="restaurants"></div>
        <div id="emptyState"></div>
      </div>
    `;
  },

  async afterRender() {
    const offlineStateContainer = document.querySelector('#offlineState');
    const emptyStateContainer = document.querySelector('#emptyState');
    const favoriteRestaurantsContainer = document.querySelector(
      '#favoriteRestaurants',
    );

    if (navigator.onLine) {
      const restaurants = await FavoriteRestoIdb.getAllRestaurants();
      if (restaurants.length !== 0) {
        offlineStateContainer.style.display = 'none';
        emptyStateContainer.style.display = 'none';
        restaurants.forEach((restaurant) => {
          favoriteRestaurantsContainer.innerHTML
            += createRestaurantItemTemplate(restaurant);
        });
      } else {
        offlineStateContainer.style.display = 'none';
        favoriteRestaurantsContainer.style.display = 'none';
        emptyStateContainer.innerHTML += createEmptyStateData();
      }
    } else {
      offlineStateContainer.style.display = 'grid';
      favoriteRestaurantsContainer.style.display = 'none';
      offlineStateContainer.innerHTML += createOfflineStateData();
      emptyStateContainer.innerHTML += createEmptyStateData();
      const restaurants = await FavoriteRestoIdb.getAllRestaurants();
      if (restaurants.length !== 0) {
        favoriteRestaurantsContainer.style.display = 'grid';
        emptyStateContainer.style.display = 'none';
        restaurants.forEach((restaurant) => {
          favoriteRestaurantsContainer.innerHTML
            += createRestaurantItemTemplate(restaurant);
        });
      }
    }
  },
};

export default FavoriteRestaurants;
