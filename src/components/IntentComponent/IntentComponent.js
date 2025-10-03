import {useState, useEffect} from 'react';
//import {useParams, useHistory } from 'react-router-dom';
import { FaSave, FaWindowClose} from "react-icons/fa";

import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from "yup";
//import {toast} from "react-toastify";

import LoadScreenComponent from '../ui/LoadScreenComponent';

const IntentComponent = ({ intent, onSubmit, onCancel }) => {

  //const navigate = useHistory();
  const [isLoading, setIsLoading] = useState(false);
  //const [intent, setIntent] = useState({});
  const id = intent?.id;

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
    <div>
        <Formik initialValues={initialValues(intent)}
          onSubmit={async (values, { setSubmitting }) => {await onSubmit(values); setSubmitting(false);}}
          validationSchema={intentValidationSchema}
          enableReinitialize={true} >
        {() =>(
         <Form className="">

            <Field id="intentname" type="text" name="intentname" placeholder="Nombre intenci&#243;n"
                className="form-control"  />
            <ErrorMessage name="intentname" component="div" className=""/>

            <Field type="text" name="question" placeholder="Frase de entrenamiento"
                className="form-control"  />
            <ErrorMessage name="question" component="div" className=""/>

            <Field type="text" name="answer" placeholder="Respuesta"
                className="form-control"  />
            <ErrorMessage name="answer" component="div" className=""/>

            <div className="header-edit-actions">
              <button type="submit" className="action-btn" > <FaSave title="Ejecutar"/> </button>
              <button type="reset" onClick={onCancel} className="action-btn" > <FaWindowClose title="Cancelar" /> </button>
            </div>
         </Form>
         )
        }
        </Formik>
    </div>
  )
}

const intentValidationSchema = Yup.object({
  intentname: Yup.string().required("El nombre es obligatorio").min(3, "El nombre debe contener al menos 3 caracteres").max(50, 'Demasiado Largo!'),
  question: Yup.string().required("La pregunta es obligatorio").min(4, 'Demasiado corto!').max(2000, 'Demasiado largo!'),
  answer: Yup.string().required("La respuesta es obligatorio").min(4, 'Demasiado corto!').max(2000, 'Demasiado largo!'),
}
);

function initialValues(data){
  return(
    {
      intentname: data ? data.name : '',
      description: data? data.description :'',
      answer: data? data.answer : '', 
    }
  );
}

export default IntentComponent
