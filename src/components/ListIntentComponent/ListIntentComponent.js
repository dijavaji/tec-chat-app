import React, {useState, useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import { AiOutlineCloseCircle, AiOutlineEdit, AiOutlineFileAdd } from "react-icons/ai";
import {toast} from "react-toastify";

import IntentService from '../../services/intent.service.js';

import LoadScreenComponent from '../ui/LoadScreenComponent';
import "./ListIntentComponent.css";

const ListIntentComponent = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [intents, setIntents] = useState([]);
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
      alert("Eliminar intenci\u00f3n " + intenthandle.name);
      try{
        const intentRes = await IntentService.deleteIntent(intenthandle.id);
        if(intentRes.success){
          getAllIntents();
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


    return (
        <div className = "container">
            <h2> Lista intenci&#243;n </h2>
            {intents &&<div className="table-container">
              <button className = "" style={{margin: '5px'}} onClick={handleAddNewIntent }>Nuevo</button>
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
                                      <AiOutlineEdit type="button" onClick={() => handleUpdateIntent(intent.id)} className="" title="Editar"/>
                                      <AiOutlineCloseCircle type="button" onClick={() => handleRemoveIntent(intent)} className="" title="Eliminar"/>
                                    </div>

                                </td>
                            </tr>
                        )
                    }
                </tbody>
              </table>
            </div>}

        </div>
    )
}

export default ListIntentComponent
