import axios from "axios";
import { API_SERVER_BACKEND } from "../utils/tec-chat.constants";

const MESSAGES_REST_API_URL = API_SERVER_BACKEND.HOST_MESSAGE + API_SERVER_BACKEND.MESSAGE;

class MessageService {

  getMessage = async (chatDto) =>{
      return axios.post(MESSAGES_REST_API_URL, chatDto).then(response => {
        return response.data;
      }).catch((err) => {console.error('Error:', err.response.data); throw new Error(err.response.data.message);});
    }

}

export default new MessageService();
