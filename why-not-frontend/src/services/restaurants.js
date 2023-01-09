import axios from "axios"

const URL = "http://localhost:8080/"

class RestaurantsService {
    addToFavorites(requestBody) {
        /* todo */
        const currentUser = JSON.parse(localStorage.getItem('user'))
        return axios.post(URL + '/user/favoriteRestaurants/add' + currentUser.id, { requestBody })
    }

    removeFromFavorites(restaurantId) {
        /* todo */
    }

    getFavoriteRestaurants() {
        const currentUser = JSON.parse(localStorage.getItem('user'))
        return axios.get(URL + 'user/favoriteRestaurants/' + currentUser.id);
    }

    getRestaurantsBySpecific(specific) {
        return axios.get(URL + '/specific/' + specific)
    }
}

export default new RestaurantsService();