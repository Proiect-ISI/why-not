import axios from "axios"

const URL = "http://localhost:8080/user"

class AuthService {
    login(requestBody) {
        return axios.post(URL + '/login', requestBody)
    }

    logout() {
        localStorage.removeItem("user")
    }

    register(requestBody) {
        return axios.post(URL + '/create', requestBody)
    }

    getCurrentUser() {
        return JSON.parse(localStorage.getItem('user'))
    }
}

export default new AuthService();