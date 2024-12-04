import {useState} from 'react';
import {toast} from "react-toastify";

import FileService from '../../services/file.service.js';
//import { AUDIT_APP,} from "../../utils/tec-chat.constants";

import "./FileUploadComponent.css";

const FileUploadComponent = () => {

  const [selectedFile, setSelectedFile] = useState(null);
   const [message, setMessage] = useState('');

   const handleFileChange = (e) => {
       setSelectedFile(e.target.files[0]);
   };

   const handleFileUpload = async (e) => {
       e.preventDefault();
       console.log('subo archivo');
       try {

           const response = await FileService.uploadFile(selectedFile);
           //setMessage(response.data);
           toast.success("Cargando datos proceso en background.");
       } catch (error) {
           setMessage('File upload failed!');
       }
   };

  return (
    <div className = "container">
          <div className="row justify-content-center">
              <div className="col-md-6">
                  <div className="card">
                      <h2 className="">Cargar base conocimiento</h2>
                      <div className="upload-container">
                          {message && <div className="alert alert-info">{message}</div>}
                          <form onSubmit={handleFileUpload}>
                              <div className="form-group">
                                  <label>Choose file</label>
                                  <input type="file" className="form-control" onChange={handleFileChange} accept=".csv"/>
                              </div>
                              <button type="submit" className="btn btn-primary mt-3">Cargar</button>
                          </form>
                      </div>
                  </div>
              </div>
          </div>
    </div>
  )
}

export default FileUploadComponent;
