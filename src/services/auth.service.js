import axios from "axios";
import { API_SERVER_BACKEND } from "../utils/tec-chat.constants";
import { getToken} from "../utils/tec-token.util";

const API_SERVER_AUTH = API_SERVER_BACKEND.HOST_AUTH + API_SERVER_BACKEND.AUTH;
//const API_URL = "http://localhost:4000/api/v1/auth/";

class AuthService {
  login(email, password) {
    return axios
      .post(API_SERVER_AUTH + "/signin", {
        email,
        password
      })
      .then(response => {
        /*if (response.data.accessToken) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }*/
        return response.data;
      }).catch((err) => {console.error('Error:', err.response.data); return err.response.data});
  }

  logout() {
    localStorage.removeItem("token");
  }

  register(username, email, password) {
    return axios.post(API_SERVER_AUTH + "/signup", {
      username,
      email,
      password
    });
  }

  getCurrentUser() {
    //return JSON.parse(localStorage.getItem('user'));
    return JSON.parse(getToken());
  }
}

export default new AuthService();
