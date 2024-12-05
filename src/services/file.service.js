import axios from 'axios';
import { API_SERVER_BACKEND } from "../utils/tec-chat.constants";

//const INTENT_BASE_REST_API_URL = API_SERVER_BACKEND.HOST_DOCUMENT_LOADER + API_SERVER_BACKEND.INTENT;
const FILE_BASE_REST_API_URL = 'http://127.0.0.1:8082/api/v1/files';

class FileService {

  uploadFile = async (file) =>{
    const formData = new FormData();
        formData.append("file", file);

        return axios.post(`${FILE_BASE_REST_API_URL}/upload-csv`, formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });
  }

}

export default new FileService();
