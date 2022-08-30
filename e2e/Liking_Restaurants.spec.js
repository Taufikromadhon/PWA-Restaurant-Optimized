const assert = require('assert');

Feature('Liking Restaurants');

const url_root_page = '/';
const url_favorite_page = '/#/favorite';
const id_of_main_content = '#mainContent';
const id_of_empty_state = '#emptyState';
const id_of_like_button = '#likeButton';
const class_of_empty_state = '.restaurant-item__empty-state';
const class_of_restaurant_list = '.restaurant-item';
const class_of_restaurant_item_title = '.restaurant-item__title';
const text_of_empty_state = 'Maaf, data restaurant tidak ditemukan.';

Before(({ I }) => {
  I.amOnPage(url_favorite_page);
  //   pause();
});

Scenario('showing empty liked restaurants', ({ I }) => {
  I.waitForElement(id_of_main_content, 3);
  I.seeElement(id_of_main_content);
  I.seeElement(id_of_empty_state);
  I.see(text_of_empty_state, class_of_empty_state);
  // pause();
});

Scenario(
  'showing detail of a favorite restaurant on the website',
  async ({ I }) => {
    I.waitForElement(class_of_empty_state, 3);
    I.see(text_of_empty_state, class_of_empty_state);

    I.amOnPage(url_root_page);

    // pause();
    I.waitForElement(class_of_restaurant_list, 3);

    I.seeElement(class_of_restaurant_list);
    const first_resto = locate(class_of_restaurant_item_title).first();
    const first_resto_title = await I.grabTextFrom(first_resto);
    I.click(first_resto);

    // pause();
    I.waitForElement(id_of_like_button, 3);

    I.seeElement(id_of_like_button);
    I.click(id_of_like_button);

    // pause();

    I.amOnPage(url_favorite_page);

    I.waitForElement(class_of_restaurant_list, 3);
    
    I.seeElement(class_of_restaurant_list);

    const fav_resto_title = await I.grabTextFrom(
      class_of_restaurant_item_title,
    );

    assert.strictEqual(first_resto_title, fav_resto_title);
  },
);

Scenario(
  'showing detail of a non-favorite restaurant on the website',
  async ({ I }) => {
    I.waitForElement(class_of_empty_state, 3);
    I.see(text_of_empty_state, class_of_empty_state);

    // pause();

    I.amOnPage(url_root_page);

    // pause();
    I.waitForElement(class_of_restaurant_list, 3);

    I.seeElement(class_of_restaurant_list);
    const first_resto = locate(class_of_restaurant_item_title).first();
    const first_resto_title = await I.grabTextFrom(first_resto);
    I.click(first_resto);

    // pause();
    I.waitForElement(id_of_like_button, 3);

    I.seeElement(id_of_like_button);
    I.click(id_of_like_button);

    // pause();

    I.amOnPage(url_favorite_page);

    // pause();

    I.waitForElement(class_of_restaurant_list, 3);

    I.seeElement(class_of_restaurant_list);

    const unfav_resto_title = await I.grabTextFrom(
      class_of_restaurant_item_title,
    );

    assert.strictEqual(first_resto_title, unfav_resto_title);

    // pause();

    I.click(unfav_resto_title);

    // pause();

    I.waitForElement(id_of_like_button, 3);

    I.seeElement(id_of_like_button);

    // pause();

    I.waitForElement(id_of_like_button, 3);
    
    I.click(id_of_like_button);

    I.amOnPage(url_favorite_page);

    I.waitForElement(class_of_empty_state, 3);

    I.seeElement(class_of_empty_state);

    // pause();

    const unfav_resto = await I.grabTextFrom(class_of_empty_state);
    // pause();
    assert.strictEqual(unfav_resto, text_of_empty_state);
  },
);
