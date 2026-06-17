import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from "yup";
import { toast } from "react-toastify";
import { IoMailOutline } from "react-icons/io5";

import UserService from '../../../services/user.service.js';
import { AUDIT_APP } from "../../../utils/tec-chat.constants";

import './EmailComponent.css';

const EmailComponent = (props) => {
  const { setShowModal, currentEmail, currentUser } = props;

  const handleSubmit = async (formData) => {
    try {
      const userUpdated = await UserService.updateUser({
        email: formData.email,
        modifiedBy: AUDIT_APP.UPDATE_BY,
      }, currentUser);

      if (userUpdated.success) {
        setShowModal(false);
        toast.success(userUpdated.message || "Email actualizado correctamente");
      } else {
        throw new Error(userUpdated.message || "Error al actualizar email");
      }

    } catch (e) {
      toast.error(e.message);
    }
  }

  return (
    <Formik 
      onSubmit={handleSubmit} 
      initialValues={initialValues(currentEmail)} 
      validationSchema={emailValidationSchema}
    >
      {({ isSubmitting }) => (
        <Form className="email-form">
          <div className="form-group">
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px', color: 'var(--color-text-muted)' }}>
              <IoMailOutline />
              <span style={{ fontSize: '0.85rem', fontWeight: 600 }}>Nuevo Correo Electrónico</span>
            </div>
            <Field 
              type="text" 
              name="email" 
              placeholder="ejemplo@correo.com"
              className="form-control" 
            />
            <ErrorMessage name="email" component="div" className="error-message" />
          </div>

          <button type="submit" className="register-btn" disabled={isSubmitting}>
            {isSubmitting ? 'Actualizando...' : 'Guardar Cambios'}
          </button>
        </Form>
      )}
    </Formik>
  )
}

function initialValues(data) {
  return {
    email: data || '',
  }
}

const emailValidationSchema = Yup.object({
  email: Yup.string()
    .email("El email no es válido")
    .required("El email es obligatorio"),
});

export default EmailComponent;
