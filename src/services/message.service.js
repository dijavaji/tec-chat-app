import axios from "axios";
import { API_SERVER_BACKEND } from "../utils/tec-chat.constants";

//const API_SERVER_AUTH = API_SERVER_BACKEND.HOST_AUTH + API_SERVER_BACKEND.AUTH;
const API_URL = "http://localhost:8080/api/v1/messages/";

class MessageService {
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

}

export default new MessageService();
