import {useState} from 'react';
import {toast} from "react-toastify";

import FileService from '../../services/file.service.js';
//import { AUDIT_APP,} from "../../utils/tec-chat.constants";

import "./FileUploadComponent.css";
import loadImg from '../../assets/img/load.svg';

const API_URL = 'https://httpbin.org/post'
const API_METHOD = 'POST'
const STATUS_IDLE = 0
const STATUS_UPLOADING = 1

const FileUploadComponent = () => {

  const [files, setFiles] = useState([])
    const [status, setStatus] = useState(STATUS_IDLE)

    const uploadFiles = (data)=> {
        setStatus(STATUS_UPLOADING)

        fetch(API_URL, {
            method: API_METHOD,
            body: data,
        })
        .then((res) => res.json())
        .then((data) => console.log(data))
        .catch((err) => console.error(err))
        .finally(() => setStatus(STATUS_IDLE))
    }

    const packFiles = (filesUp)=> {
        const data = new FormData();
        const nuevosArchivos = [...files];  //spread operator propagando el array
        //nuevosArchivos.forEach((element) => console.log(element));
        nuevosArchivos.forEach((file, i) => {
            data.append(`file-${i}`, file, file.name)
        })
        return data
    }

    const handleUploadClick = () => {
        if (files.length) {
            const data = packFiles(files)
            uploadFiles(data)
        }
    }

    const renderFileList = () => (
      <ol>
        {[...files].map((f, i) => (
            <li key={i}>{f.name} - {f.type}</li>
        ))}
    </ol>)

    const getButtonStatusText = () => (
        (status === STATUS_IDLE) ? 'Enviar al servidor' : <img src = {loadImg} />
    )

  return (
    <div className = "container">
      <div>
          <input type="file" multiple onChange={(e)=> setFiles(e.target.files)} accept=".csv, .pdf, .doc, .txt"/>
          {renderFileList()}
          <button onClick={handleUploadClick} disabled={status === STATUS_UPLOADING}>
                  {getButtonStatusText()}
          </button>
      </div>
    </div>
  )
}

export default FileUploadComponent;
