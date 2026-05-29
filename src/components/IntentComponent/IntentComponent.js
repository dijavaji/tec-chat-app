import {useState} from 'react';
import { FaSave} from "react-icons/fa";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from "yup";

import LoadScreenComponent from '../ui/LoadScreenComponent';
import "./IntentComponent.css";

const IntentComponent = ({ intent, onSubmit, onCancel }) => {

  const [isLoading] = useState(false);


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

  if(isLoading ){
    return <LoadScreenComponent/>;
  }

  return (

    <div className="intent-form-container">
        <Formik initialValues={initialValues(intent)}
          onSubmit={async (values, { setSubmitting }) => {await onSubmit(values); setSubmitting(false);}}
          validationSchema={intentValidationSchema}
          enableReinitialize={true} >
        {() =>(
         <Form className="intent-form">
            <div className="form-group">
              <label htmlFor="intentname" className="form-label">Nombre de la Intención</label>
              <Field id="intentname" type="text" name="intentname" placeholder="Ej: Saludo Inicial"
                  className="form-control"  />
              <ErrorMessage name="intentname" component="div" className="error-message"/>
            </div>

            <div className="form-group">
              <label htmlFor="question" className="form-label">Frase de Entrenamiento</label>
              <Field id="question" type="text" name="question" placeholder="¿Cómo puedo ayudarte?"
                  className="form-control"  />
              <ErrorMessage name="question" component="div" className="error-message"/>
            </div>

            <div className="form-group">
              <label htmlFor="answer" className="form-label">Respuesta del Asistente</label>
              <Field id="answer" as="textarea" name="answer" placeholder="Escribe la respuesta aquí..."
                  className="form-control" style={{ minHeight: '100px', resize: 'vertical' }} />
              <ErrorMessage name="answer" component="div" className="error-message"/>
            </div>

            <div className="intent-form-actions">
              <button type="button" onClick={onCancel} className="btn-cancel-form" > Cancelar </button>
              <button type="submit" className="btn-save" > <FaSave /> Guardar </button>
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
