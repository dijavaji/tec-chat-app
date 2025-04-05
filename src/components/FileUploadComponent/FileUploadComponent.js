import {useState} from 'react';
import {toast} from "react-toastify";

import FileService from '../../services/file.service.js';
//import { AUDIT_APP,} from "../../utils/tec-chat.constants";

import LoadScreenComponent from '../ui/LoadScreenComponent';
import "./FileUploadComponent.css";
import loadImg from '../../assets/img/load.svg';

const FileUploadComponent = () => {

  const [files, setFiles] = useState([])
  const [isLoading, setIsLoading] = useState(false);

  const uploadFiles = async ()=> {
    setIsLoading(true);

      const nuevosArchivos = [...files];
      nuevosArchivos.forEach(async (file) => {
      try{
        if(file.type==='text/csv'){
          const response = await FileService.uploadCsvFile(file);
          console.log(response);
          //setMessage(response.data);
          toast.success("Cargando datos proceso en background.");
          setIsLoading(false);
        }else{
          const response = await FileService.uploadMultipleFile(file, 6);
          if(response.success){
            toast.success(`Archivo ${response.data.fileName} guardado.`);
            //setStatus(STATUS_IDLE);
            setIsLoading(false);
          }
        }

      } catch (e) {
          setIsLoading(false);
          //console.log("error",e.response.data);
          console.log("error",e);
          const errMsg = e.response? e.response.data.message: e.message;
          toast.error(errMsg);
          //setStatus(STATUS_IDLE);

      }

      });

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
            //const data = packFiles(files)
            uploadFiles()
        }
    }

    if(isLoading ){
      return <LoadScreenComponent/>;
    }

    const renderFileList = () => (
      <ol>
        {[...files].map((f, i) => (
            <li key={i}>{f.name} - {f.type}</li>
        ))}
    </ol>)

    const getButtonStatusText = () => (
        (!isLoading) ? 'Enviar al servidor' : <img src = {loadImg} />
    )

  return (
    <div className = "container">
      <div>
          <input type="file" multiple onChange={(e)=> setFiles(e.target.files)} accept=".csv, .pdf, .doc, .txt"/>
          {renderFileList()}
          <button onClick={handleUploadClick} disabled={isLoading}>
                  {getButtonStatusText()}
          </button>
      </div>
    </div>
  )
}

export default FileUploadComponent;
