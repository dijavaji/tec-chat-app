import axios from 'axios';
import { API_SERVER_BACKEND } from "../utils/tec-chat.constants";

//const INTENT_BASE_REST_API_URL = API_SERVER_BACKEND.HOST_DOCUMENT_LOADER + API_SERVER_BACKEND.INTENT;
const FILE_BASE_REST_API_URL = 'http://127.0.0.1:8082/api/v1/files';

class FileService {

  uploadCsvFile = async (file) =>{
    const formData = new FormData();
        formData.append("file", file);

        return axios.post(`${FILE_BASE_REST_API_URL}/upload-csv`, formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });
  }

  uploadMultipleFile = async (file, assistantId) =>{

    const formData = new FormData();
    formData.append("file", file);
    /*const datalst = [];
    files.forEach((file) => {
      const formData = new FormData();
      formData.append("file", file);
      datalst.push(formData)
      //console.log(`${index}: ${file}`);
    });*/
    return axios.post(`${FILE_BASE_REST_API_URL}/${assistantId}/upload`, formData, {
        headers: {
            "Content-Type": "multipart/form-data",
        },
    }).then(response => {
      return response.data;
    }).catch((err) => {console.error('Error:', err.response.data.error);  throw err;});
  }

}

export default new FileService();
