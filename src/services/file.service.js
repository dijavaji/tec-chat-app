import axios from 'axios';
import { API_SERVER_BACKEND } from "../utils/tec-chat.constants";

const FILE_BASE_REST_API_URL = API_SERVER_BACKEND.HOST_DOCUMENT_LOADER + API_SERVER_BACKEND.FILE;

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
    }).catch((err) => {  throw err;});
  }

  getDownloadFile = async (fileId) =>{
      return axios.get(`${FILE_BASE_REST_API_URL}/download/${fileId}`).then(response => {
        return response.data;
      }).catch((err) => {console.error('Error:', err); throw new Error(err);});
    }

}

export default new FileService();
