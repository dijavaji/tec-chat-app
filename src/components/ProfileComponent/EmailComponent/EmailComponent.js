import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

import * as Yup from "yup";

import './EmailComponent';

const EmailComponent = (props) => {
  const { setShowModal, currentEmail } = props;

  const handleSubmit =(formData)=>{
    //TODO conectar con backend
    console.log(formData);
  }

  return (
    <Formik onSubmit={handleSubmit} initialValues={initialValues(currentEmail)} validationSchema={emailValidationSchema}>
       {() => (
         <Form className="email-form">
          <div className="mb-4">
            <Field type="text" name="email" placeholder="Escribe tu nuevo email"
                className="form-control" />
            <ErrorMessage name="email" component="div" className="error-message"/>
          </div>

          <div className="">
            <button type="submit" className="register-btn">Actualizar</button>
          </div>
          </Form>
       )}
     </Formik>
  )
}

function initialValues(data){
  return {
    email:  data || '',
  }
}

const emailValidationSchema = Yup.object({
  email: Yup.string().email("El email no es valido").required("El email es obligatorio"),
}
);

export default EmailComponent;
