import React, {useState, useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import { AiOutlineFileAdd } from "react-icons/ai";
import { FaEdit, FaTrash, FaSave, FaWindowClose} from "react-icons/fa";
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

    const [intentDelete, setIntentDelete] = useState(null);
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
          setIntentDelete(null);
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
      setIntentDelete(handleIntent);
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
        <div className = "container">
            <h2> Lista intenci&#243;n </h2>
            {intents &&<div className="table-container">
              <button className="add-answer-btn" style={{margin: '5px'}} onClick={() => handleAddNewIntent() }>Nuevo</button>
              <table className="intent-table">
                <thead>
                    <th> Id </th>
                    <th> Nombre</th>
                    <th> Acciones </th>
                </thead>
                <tbody>
                    {
                        intents.map(
                            intent =>
                            <tr key = {intent.id}>
                                <td> {intent.id} </td>
                                <td> {intent.name} </td>
                                <td>
                                    <div className="flex justify-center padding-left: 5px; padding-right: 5px;">
                                      <FaEdit type="button" onClick={() => handleUpdateIntent(intent.id)} className="" title="Editar"/>
                                      <FaTrash type="button" onClick={() => handleOnDelete(intent)} className="" title="Eliminar"/>
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
    <div>
      {intentDelete && <p>{intentDelete.id} {intentDelete.name}</p>}
      <button type="submit" className="action-btn" onClick={onSubmit}> <FaSave title="Guardar"/></button>
      <button type="reset" onClick={onCancel} className="action-btn"> <FaWindowClose title="Cancelar" /> </button>
    </div>
  );
}

export default ListIntentComponent
