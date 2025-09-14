import {useState, useEffect} from 'react';
//import {useParams, useHistory } from 'react-router-dom';

import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from "yup";
//import {toast} from "react-toastify";

import LoadScreenComponent from '../ui/LoadScreenComponent';

//import IntentService from '../../services/intent.service.js';
//import { AUDIT_APP,} from "../../utils/tec-chat.constants";

const IntentComponent = ({ intent, onSubmit, onCancel }) => {

  //const navigate = useHistory();
  const [isLoading, setIsLoading] = useState(false);
  //const [intent, setIntent] = useState({});
  const {id} = intent;

  /*useEffect(() => {
       fetchIntent();
   }, [id]);

   const fetchIntent = async () =>{
    if(id){
        setIsLoading(true);
        const intentResult = await IntentService.getIntentById(id);
        //console.log("cargamos intencion",intentResult);
        setIntent(intentResult.data);
        //initialValues(intentResult);
        setIsLoading(false);
    }
  }*/

  const handleSubmit = async (values, setSubmitting)=>{
    await onSubmit(values);
    setSubmitting(false);
  };

  /*const saveOrUpdateIntent = async (formData) => {
    try{
      if(id){
        const updatePhrases = [];
        const updateResponses = [];

        updateResponses.push({
          id:formData.answerId,
          response:formData.answer,
        });

        updatePhrases.push({
            id:formData.questionId,
            phrase:formData.question,
            responses:updateResponses,
            })

        const intentUpdated = await IntentService.updateIntent({
          id:id,
          name:formData.intentname,
          assistantId: 1,
          modifiedBy: AUDIT_APP.UPDATE_BY,
          phrases:updatePhrases,
        });
        console.log("actualiza intent",intentUpdated);

        if(intentUpdated.success){
            navigate.push('/intents');
            //toast.success("Intenci\u00f3n actualizada correctamente.");
            toast.success(intentUpdated.message);
        }else{
          throw new Error("Error al actualizar intenci\u00f3n");
        }
      }else{
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
            navigate.push('/intents');
            toast.success(intentResponse.message);
        }else{
          throw new Error("Error al crear intenci\u00f3n");
        }

      }
    }catch(e){
      //console.log(e.response.data);
      toast.error(e.message);
    }
  }

  const handleClickCancel = () =>{
    navigate.push('/intents');
  }*/

  if(isLoading ){
    return <LoadScreenComponent/>;
  }

  const pageTitle = () => {
        if(id){
            return <h2 className = "text-center">Actualizar intenci&#243;n</h2>
        }else{
            return <h2 className = "text-center">Agregar intenci&#243;n</h2>
        }
    }

  return (
    <div className = "container">
    <h2> { pageTitle() } </h2>
        {intent && <Formik initialValues={initialValues(intent)} onSubmit={async (values, { setSubmitting }) => handleSubmit(values, setSubmitting)} validationSchema={intentValidationSchema}
          enableReinitialize={true} >
        {() =>(
         <Form className="">
          <div className="">
            <Field id="intentname" type="text" name="intentname" placeholder="Nombre intenci&#243;n"
                className="form-control"  />
            <ErrorMessage name="intentname" component="div" className=""/>
          </div>
          <div className="">
            <Field type="text" name="description" placeholder="Descripci&#243;n"
                className="form-control"  />
            <ErrorMessage name="description" component="div" className=""/>
          </div>

          <div className="form-group">
            <button type="submit" style={{margin: '5px'}} >Ejecutar</button>
            <button type="reset" onClick={onCancel} style={{margin: '5px', backgroundColor: '#5cb85c'}}>Cancelar</button>
          </div>
         </Form>
         )
        }
        </Formik>}
    </div>
  )
}

const intentValidationSchema = Yup.object({
  intentname: Yup.string().required("El nombre es obligatorio").min(3, "El nombre debe contener al menos 3 caracteres").max(50, 'Too Long!'),
  description: Yup.string().min(4, 'Too Short!').max(2000, 'Demasiado largo!'),
}
);

function initialValues(data){
  return(
    {
      intentname: data ? data.name : '',
      description: data.description? data.description :'',
    }
  );
}

export default IntentComponent
