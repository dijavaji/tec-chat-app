import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from "yup";
import {toast} from "react-toastify";
import UserService from '../../../services/user.service.js';
import { AUDIT_APP,} from "../../../utils/tec-chat.constants";

import './PasswordComponent.css';

const PasswordComponent = (props) => {
  const { currentUser, logout } = props;


  const handleSubmit = async (formValues)=>{
    try{
      const userUpdated = await UserService.updateUser({
        currentPassword: formValues.currentPass,
        newPassword: formValues.newPass,
        modifiedBy: AUDIT_APP.UPDATE_BY,
      }, currentUser);

      if(userUpdated.success){
          //toast.success("Intenci\u00f3n actualizada correctamente.");
          //toast.success(userUpdated.message);
          logout();
      }else{
        throw new Error("Error al actualizar intenci\u00f3n");
      }

    }catch(e){
      toast.error(e.message);
    }
  }

  return (
    <Formik
       initialValues={initialValues}
       onSubmit={handleSubmit}
       validationSchema={updatevalidationSchema} >
       {({ errors, touched }) => (
         <Form className="password-form">
          <div className="mb-4">
            <Field type="password" name="currentPass" placeholder="Contrase&#241;a actual"
                className="form-control" />
            <ErrorMessage name="currentPass" component="div" className="error-message"/>
          </div>
          <div className="mb-4">
            <Field type="password" name="newPass" placeholder="Nueva contrase&#241;a"
                className="form-control"  />
            <ErrorMessage name="newPass" component="div" className="error-message"/>
          </div>
          <div className="mb-4">
            <Field type="password" name="repeatnewPass" placeholder="Repetir contrase&#241;a"
                className="form-control"  />
            <ErrorMessage name="repeatnewPass" component="div" className="error-message"/>
          </div>

          <div className="">
            <button type="submit" className="register-btn">Actualizar</button>
          </div>
          </Form>
       )}
     </Formik>
  )
}

function initialValues(){
  return {
    currentPass:'',
    newPass:'',
    repeatnewPass:''
  }
}

const updatevalidationSchema = Yup.object({
  currentPass: Yup.string().required("La contrase\u00f1a es obligatoria").min(5, "La contrase\u00f1a debe contener al menos 5 caracteres"),
  newPass: Yup.string().required("La nueva contrase\u00f1a es obligatoria").oneOf([Yup.ref("repeatnewPass")], 'Las contrase\u00f1as deben coincidir').min(5, "La nueva contrase\u00f1a debe contener al menos 5 caracteres"),
  repeatnewPass: Yup.string().required("La confirmaci\u00f3n es obligatoria").oneOf([Yup.ref("newPass"), null], 'Las contrase\u00f1as deben coincidir').min(5, "La confirmaci\u00f3n debe contener al menos 5 caracteres"),
})

export default PasswordComponent
