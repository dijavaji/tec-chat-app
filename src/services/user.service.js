import axios from "axios";
import { API_SERVER_BACKEND } from "../utils/tec-chat.constants";
import { getToken} from "../utils/tec-token.util";

const USER_BASE_REST_API_URL = API_SERVER_BACKEND.HOST_AUTH + API_SERVER_BACKEND.USER;

class UserService{

  getUser = async (email, username) =>{
    return  axios.get(USER_BASE_REST_API_URL + `?username=${username}`).then(response => {
        return response.data;
      }).catch((err) => {console.error('Error:', err.message); throw new Error(err);});
  }

  updateUser = async (user, username) =>{
      return axios.put(USER_BASE_REST_API_URL+ '/' + username, user).then(response => {
        return response.data;
      }).catch((err) => {console.error('Error:', err.response.data); throw new Error(err.response.data.message);});
    }

}

export default new UserService;
