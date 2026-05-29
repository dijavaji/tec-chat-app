import React, {useState, useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import { AiOutlineFileAdd } from "react-icons/ai";
import { FaEdit, FaTrash } from "react-icons/fa";
import {toast} from "react-toastify";

import IntentService from '../../services/intent.service.js';
import { AUDIT_APP,} from "../../utils/tec-chat.constants";

import IntentComponent from '../IntentComponent';
import LoadScreenComponent from '../ui/LoadScreenComponent';
import ModalComponent from '../ui/ModalComponent';
import "./ListIntentComponent.css";

const ListIntentComponent = ({ onSelectIntent, onCreate }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [intents, setIntents] = useState([]);
    //const [isOpen, setShowModal] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [titleModal, setTitleModal] = useState("");
    const [childrenModal, setChildrenModal] = useState(null);

    const navigate = useHistory();

    useEffect(() => {
        getAllIntents();
    }, [])

    const getAllIntents = async () => {
      setIsLoading(true);
      try{
        const response = await IntentService.listIntents();
        setIntents(response);
        setIsLoading(false);
      }catch(e){
          toast.error(e.message);
      }
    }

    function handleAddNewIntent() {
      //navigate.push('/add-intent');
      handlerModal('new');
   }

   const handleUpdateIntent = (id) => {
        navigate.push(`/edit-intent/${id}`);
    }

    const handleRemoveIntent = async (intenthandle) => {
      //alert("Eliminar intenci\u00f3n " + intenthandle.name);
      try{
        const intentRes = await IntentService.deleteIntent(intenthandle.id);
        if(intentRes.success){
          getAllIntents();
          setShowModal(false);
          toast.success(intentRes.message);
        }else{
          throw new Error("Error al eliminar intenci\u00f3n");
        }
      }catch(e){
          toast.error(e.message);
      }
     }

     if(isLoading ){
       return <LoadScreenComponent/>;
     }

    const handleOnDelete = (handleIntent)=>{
      //setShowModal(true);
      handlerModal('delete', handleIntent);
    }

    const saveIntentSubmit = async (formData) => {
      try{
        const phrasesNew = [];
        const responsesNew = [];

        responsesNew.push({
          response:formData.answer,
          createdBy: AUDIT_APP.CREATE_BY,
        });

        phrasesNew.push({
            phrase:formData.question,
            createdBy: AUDIT_APP.CREATE_BY,
            responses:responsesNew,
            })

        const intentResponse = await IntentService.createIntent({
          name:formData.intentname,
          assistantId: 1,
          createdBy: AUDIT_APP.CREATE_BY,
          phrases:phrasesNew
        });
        if(intentResponse.success){
            //navigate.push('/intents');
            setShowModal(false);
            toast.success(intentResponse.message);
            getAllIntents();
        }else{
          throw new Error("Error al crear intenci\u00f3n");
        }
      }catch(e){
        //console.log(e.response.data);
        toast.error(e.message);
      }
    }

    //utilizado para modal dinamico
    const handlerModal = (type, data) =>{
      switch (type){
        case 'delete':
          setTitleModal('Eliminar intenci\u00f3n');
          setChildrenModal(<CreateContentModalDelete intentDelete={data} onSubmit={() => handleRemoveIntent(data)} onCancel={() => setShowModal(false)}/>);
          setShowModal(true);
          break;
        default:
          setTitleModal('Agregar intenci\u00f3n');
          setChildrenModal(<IntentComponent intent={null} onCancel={() => setShowModal(false)} onSubmit={saveIntentSubmit}/>);
          setShowModal(true);
          break;
        }
    }


    return (
        <div className = "intent-list-container">
            <div className="list-header">
              <h2>Lista de Intenciones</h2>
              <button className="add-intent-btn" onClick={() => handleAddNewIntent()}>
                <AiOutlineFileAdd /> Nuevo
              </button>
            </div>
            
            {intents && <div className="table-container">
              <table className="intent-table">
                <thead>
                  <tr>
                    <th>Id</th>
                    <th>Nombre</th>
                    <th className="text-center">Acciones</th>
                  </tr>
                </thead>
                <tbody>
                    {
                        intents.map(
                            intent =>
                            <tr key = {intent.id}>
                                <td data-label="Id"> {intent.id} </td>
                                <td data-label="Nombre"> {intent.name} </td>
                                <td data-label="Acciones">
                                    <div className="action-buttons">
                                      <button className="icon-btn edit" onClick={() => handleUpdateIntent(intent.id)} title="Editar">
                                        <FaEdit />
                                      </button>
                                      <button className="icon-btn delete" onClick={() => handleOnDelete(intent)} title="Eliminar">
                                        <FaTrash />
                                      </button>
                                    </div>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
              </table>
            </div>}

            <ModalComponent isOpen={showModal} onClose={() => setShowModal(false)} title={titleModal} >
              {childrenModal}
            </ModalComponent>

        </div>
    )
}

const CreateContentModalDelete = ({intentDelete, onCancel, onSubmit})=>{
  return (
    <div className="delete-modal-content">
      {intentDelete && (
        <div className="delete-info">
          <p>¿Estás seguro de que deseas eliminar esta intención?</p>
          <span className="intent-id">ID: {intentDelete.id}</span>
          <span className="intent-name">{intentDelete.name}</span>
        </div>
      )}
      <div className="modal-actions">
        <button type="button" className="btn-confirm" onClick={onSubmit}>
          <FaTrash /> Eliminar
        </button>
        <button type="button" className="btn-cancel" onClick={onCancel}>
          Cancelar
        </button>
      </div>
    </div>
  );
}

export default ListIntentComponent
