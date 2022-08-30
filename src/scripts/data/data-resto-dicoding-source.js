import API_ENDPOINT from '../globals/api-endpoint';

class DataRestoDicodingSource {
  static async listedRestaurants() {
    const response = await fetch(API_ENDPOINT.RESTAURANTS);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async detailRestaurantList(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    const responseJson = await response.json();
    return responseJson.restaurant;
  }
}

export default DataRestoDicodingSource;
