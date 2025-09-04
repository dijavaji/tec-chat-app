import React, {useState, useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import { FaEdit, FaTrash, FaPlus, FaSave } from "react-icons/fa";
import {toast} from "react-toastify";

import IntentService from '../../services/intent.service.js';

import LoadScreenComponent from '../ui/LoadScreenComponent';
import ModalComponent from '../ui/ModalComponent';
import "./ListIntentComponent.css";

const ListIntentComponent = ({ onSelectIntent, onCreate }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [intents, setIntents] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
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
      navigate.push('/add-intent');
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
          setIsOpen(false);
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
      setIsOpen(true);
    }

    const createContentModalDelete = ()=>{
      return (
        <div>
          {intentDelete && <p>{intentDelete.id} {intentDelete.name}</p>}
          <button type="submit" style={{margin: '5px'}} onClick={() => handleRemoveIntent(intentDelete)}>Ejecutar</button>
          <button type="reset" onClick={() => setIsOpen(false)} style={{margin: '5px', backgroundColor: '#5cb85c'}}>Cancelar</button>
        </div>
      );
    }

    const contentModalDelete = createContentModalDelete();


    return (
        <div className = "container">
            <h2> Lista intenci&#243;n </h2>
            {intents &&<div className="table-container">
              <button className="add-answer-btn" style={{margin: '5px'}} onClick={handleAddNewIntent }> <FaPlus /> Nuevo</button>
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

            <ModalComponent isOpen={isOpen} onClose={() => setIsOpen(false)} title="Eliminar intenci&#243;n" >
              {contentModalDelete}
            </ModalComponent>

        </div>
    )
}

export default ListIntentComponent
