import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from "yup";
import {toast} from "react-toastify";

import UserService from '../../../services/user.service.js';
import { AUDIT_APP,} from "../../../utils/tec-chat.constants";

import './EmailComponent';

const EmailComponent = (props) => {
  const { setShowModal, currentEmail, currentUser } = props;

  const handleSubmit = async (formData)=>{
    //TODO conectar con backend
    console.log(formData);
    try{
      const userUpdated = await UserService.updateUser({
        email:formData.email,
        modifiedBy: AUDIT_APP.UPDATE_BY,
      }, currentUser);

      if(userUpdated.success){
          //toast.success("Intenci\u00f3n actualizada correctamente.");
          setShowModal(false);
          toast.success(userUpdated.message);
      }else{
        throw new Error("Error al actualizar intenci\u00f3n");
      }

    }catch(e){
      toast.error(e.message);
    }

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
