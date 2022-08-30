/* eslint-disable no-plusplus */
import CONFIG from '../../globals/config';

const createDetailOfRestaurantTemplate = (restaurant) => `
    <h2 class="restaurant__name detail-restaurant__name">${restaurant.name}</h2>
      <img class="lazyload restaurant__image" src="./images/loading-300.jpg"
      alt="${restaurant.name}" data-src="${
  CONFIG.BASE_IMAGE_URL + restaurant.pictureId
}" />
    <h3>Information</h3>
    <div class="restaurant">
      <div class="restaurant__info">
        <h4>Address</h4>
        <p class="restaurant-item__content_space">${restaurant.address}, Kota ${
  restaurant.city
}</p>
        <h4>Rating</h4>
        <p class="restaurant-item__content_space">⭐️${restaurant.rating}</p>
      </div>
      <div class="restaurant__description">
        <h3>Description</h3>
        <p class="restaurant-item__content_space">${restaurant.description}</p>
      </div>
    </div>
    <div class="">
      <div class="restaurant__food">
        <h4>Menu Makanan</h4>
        <p class="restaurant-item__content_space_food"> ${restaurant.menus.foods.reduce(
          (show, value) => show.concat(
              `<li class="restaurant-item__foods">${value.name}</li>`,
            ),
          '',
        )}</p>
      </div>
      <div class="restaurant__drink">
        <h4>Menu Minuman</h4>
        <p class="restaurant-item__content_space_drink">${restaurant.menus.drinks.reduce(
          (show, value) => show.concat(`${value.name}, `),
          '',
        )}</p>
      </div>
      <div class="restaurant-item__review">
        <h4 class="restaurant-item__review_label">Customer Reviews:</h4>
        <div class="restaurant-item__review_customers"> ${restaurant.customerReviews.reduce(
          (show, value) => show.concat(`<br>
          <div class="restaurant-item__review_box">
            <p class="restaurant-item__review_name">Nama: ${value.name}</p>
            <p class="restaurant-item__review_date">Tanggal: ${value.date}</p>
            <p class="restaurant-item__review_review">Review: ${value.review}</p>
          </div>
        `),
          '',
        )}</div>
        
      </div>
    </div>
`;
const createRestaurantItemTemplate = (restaurant) => `
  <div class="restaurant-item">
    <div class="restaurant-item__header">
        <img class="lazyload restaurant-item__header__image" alt="${
          restaurant.name
        }"
        src="./images/loading-300.jpg"
        data-src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}">
        <div class="restaurant-item__header__rating">
            <p class="restaurant-item__rating__label">⭐️<span class="restaurant-item__header__rating__score">${
              restaurant.rating
            } | ${restaurant.city}</span></p>
        </div>
    </div>
    <div class="restaurant-item__content">
        <h3>
            <a href="${`/#/detail/${restaurant.id}`}" class="restaurant-item__title">${restaurant.name}</a>
        </h3>
        <p class="restaurant-item__content__description">${
          restaurant.description
        }</p>
    </div>
  </div>
`;
const createEmptyStateData = () => `
  <div class="restaurant-item__empty-state">
      <p>Maaf, data restaurant tidak ditemukan.</p>
  </div>
`;
const createOfflineStateData = () => `
  <div class="offline-state__wording">
      <p>Maaf, Anda sedang berada pada mode Offline.</p>
  </div>
`;
const createLikeButtonTemplate = () => `
    <button aria-label="like this restaurant" id="likeButton" class="like">
        <i class="fa fa-heart-o heart-icon" aria-hidden="true"></i>
    </button>
`;
const createLikedButtonTemplate = () => `
<button aria-label="unlike this restaurant" id="likeButton" class="like">
        <i class="fa fa-heart heart-icon" aria-hidden="true"/>
    </button>
`;

export {
  createDetailOfRestaurantTemplate,
  createRestaurantItemTemplate,
  createEmptyStateData,
  createOfflineStateData,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
