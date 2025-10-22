import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

import './EmailComponent';

const EmailComponent = () => {

  const handleSubmit =(formValue)=>{
    console.log(formValue);
  }

  return (
    <Formik onSubmit={handleSubmit} >
       {({ errors, touched }) => (
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

export default EmailComponent;
