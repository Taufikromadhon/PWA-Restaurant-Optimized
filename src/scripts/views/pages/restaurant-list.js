import DataRestoDicodingSource from '../../data/data-resto-dicoding-source';
import {
  createEmptyStateData,
  createOfflineStateData,
  createRestaurantItemTemplate,
} from '../templates/template-creator';

const ListedRestaurants = {
  async render() {
    return `
    <jumbotron-app class="hero">
    </jumbotron-app>
    <div tabindex="0" id="mainContent" class="content">
      <h2 class="content__heading">Explore Restaurants</h2>
      <div id="offlineState"></div>
      <div id="restaurants" class="restaurants"></div>
      <div id="emptyState"></div>   
    </div>
    `;
  },

  async afterRender() {
    const offlineStateContainer = document.querySelector('#offlineState');
    const restaurantsContainer = document.querySelector('#restaurants');
    const emptyStateContainer = document.querySelector('#emptyState');

    if (navigator.onLine) {
      const restaurants = await DataRestoDicodingSource.listedRestaurants();
      if (restaurants.length !== 0) {
        offlineStateContainer.style.display = 'none';
        emptyStateContainer.style.display = 'none';
        restaurants.forEach((restaurant) => {
          restaurantsContainer.innerHTML
            += createRestaurantItemTemplate(restaurant);
        });
      } else {
        offlineStateContainer.style.display = 'none';
        restaurantsContainer.style.display = 'none';
        emptyStateContainer.innerHTML += createEmptyStateData();
      }
    } else {
      offlineStateContainer.style.display = 'grid';
      restaurantsContainer.style.display = 'none';
      offlineStateContainer.innerHTML += createOfflineStateData();
      emptyStateContainer.innerHTML += createEmptyStateData();
      const restaurants = await DataRestoDicodingSource.listedRestaurants();
      if (restaurants.length !== 0) {
        restaurantsContainer.style.display = 'grid';
        emptyStateContainer.style.display = 'none';
        restaurants.forEach((restaurant) => {
          restaurantsContainer.innerHTML
            += createRestaurantItemTemplate(restaurant);
        });
      }
    }
  },
};

export default ListedRestaurants;
