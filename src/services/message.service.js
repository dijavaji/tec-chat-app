import axios from "axios";
import { API_SERVER_BACKEND } from "../utils/tec-chat.constants";

const MESSAGES_REST_API_URL = API_SERVER_BACKEND.HOST_MESSAGE + API_SERVER_BACKEND.MESSAGE;

class MessageService {
  getSignin = async (email, password) =>{
    return axios
      .post(MESSAGES_REST_API_URL + "/signin", {
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

  getMessage = async (chatDto) =>{
      return axios.post(MESSAGES_REST_API_URL, chatDto).then(response => {
        return response.data;
      }).catch((err) => {console.error('Error:', err.response.data); throw new Error(err.response.data.message);});
    }

}

export default new MessageService();
