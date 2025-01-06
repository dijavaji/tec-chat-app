import axios from 'axios';
import { API_SERVER_BACKEND } from "../utils/tec-chat.constants";

const INTENT_BASE_REST_API_URL = API_SERVER_BACKEND.HOST_DOCUMENT_LOADER + API_SERVER_BACKEND.INTENT;
//const INTENT_BASE_REST_API_URL = 'http://127.0.0.1:8082/api/v1/intents';

class IntentService {

  listIntents = async () =>{
      return axios.get(INTENT_BASE_REST_API_URL).then(response => {
        /*if (response.data.accessToken) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }*/
        return response.data;
      }).catch((err) => {console.error('Error:', err.response.data); return err.response.data});
  }

  createIntent = async (intent) =>{
      return axios.post(INTENT_BASE_REST_API_URL, intent).then(response => {
        return response.data;
      }).catch((err) => {console.error('Error:', err.response.data); throw new Error(err.response.data.message);});
    }


  getIntentById = async (intentId) => {
    return axios.get(INTENT_BASE_REST_API_URL + '/' + intentId).then(response => {
      return response.data;
    }).catch((err) => {console.error('Error:', err.response.data); throw new Error(err.response.data.message);});
  }

  deleteIntent = (intentId) => {
    return axios.delete(INTENT_BASE_REST_API_URL + '/' + intentId).then(response => {
      return response.data;
    }).catch((err) => {console.error('Error:', err.response.data); throw new Error(err.response.data.message);});
  }

  updateIntent = async (intent) =>{
      return axios.put(INTENT_BASE_REST_API_URL+ '/' + intent.id, intent).then(response => {
        return response.data;
      }).catch((err) => {console.error('Error:', err.response.data); throw new Error(err.response.data.message);});
    }
}

export default new IntentService();
