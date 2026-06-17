import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from "yup";
import { toast } from "react-toastify";
import { IoLockClosedOutline, IoShieldCheckmarkOutline } from "react-icons/io5";

import UserService from '../../../services/user.service.js';
import { AUDIT_APP } from "../../../utils/tec-chat.constants";

import './PasswordComponent.css';

const PasswordComponent = (props) => {
  const { currentUser, logout } = props;

  const handleSubmit = async (formValues) => {
    try {
      const userUpdated = await UserService.updateUser({
        currentPassword: formValues.currentPass,
        newPassword: formValues.newPass,
        modifiedBy: AUDIT_APP.UPDATE_BY,
      }, currentUser);

      if (userUpdated.success) {
        toast.success("Contraseña actualizada correctamente. Por favor, inicia sesión de nuevo.");
        setTimeout(() => {
          logout();
        }, 2000);
      } else {
        throw new Error(userUpdated.message || "Error al actualizar la contraseña");
      }

    } catch (e) {
      toast.error(e.message);
    }
  }

  return (
    <Formik
      initialValues={initialValues()}
      onSubmit={handleSubmit}
      validationSchema={updatevalidationSchema}
    >
      {({ isSubmitting }) => (
        <Form className="password-form">
          <div className="form-group">
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px', color: 'var(--color-text-muted)' }}>
              <IoLockClosedOutline />
              <span style={{ fontSize: '0.85rem', fontWeight: 600 }}>Contraseña Actual</span>
            </div>
            <Field 
              type="password" 
              name="currentPass" 
              placeholder="••••••••"
              className="form-control" 
            />
            <ErrorMessage name="currentPass" component="div" className="error-message" />
          </div>

          <div className="form-group">
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px', color: 'var(--color-text-muted)' }}>
              <IoShieldCheckmarkOutline />
              <span style={{ fontSize: '0.85rem', fontWeight: 600 }}>Nueva Contraseña</span>
            </div>
            <Field 
              type="password" 
              name="newPass" 
              placeholder="Mínimo 5 caracteres"
              className="form-control" 
            />
            <ErrorMessage name="newPass" component="div" className="error-message" />
          </div>

          <div className="form-group">
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px', color: 'var(--color-text-muted)' }}>
              <IoShieldCheckmarkOutline />
              <span style={{ fontSize: '0.85rem', fontWeight: 600 }}>Confirmar Nueva Contraseña</span>
            </div>
            <Field 
              type="password" 
              name="repeatnewPass" 
              placeholder="••••••••"
              className="form-control" 
            />
            <ErrorMessage name="repeatnewPass" component="div" className="error-message" />
          </div>

          <button type="submit" className="register-btn" disabled={isSubmitting}>
            {isSubmitting ? 'Actualizando...' : 'Guardar Cambios'}
          </button>
        </Form>
      )}
    </Formik>
  )
}

function initialValues() {
  return {
    currentPass: '',
    newPass: '',
    repeatnewPass: ''
  }
}

const updatevalidationSchema = Yup.object({
  currentPass: Yup.string()
    .required("La contraseña actual es obligatoria")
    .min(5, "Debe contener al menos 5 caracteres"),
  newPass: Yup.string()
    .required("La nueva contraseña es obligatoria")
    .min(5, "Debe contener al menos 5 caracteres")
    .notOneOf([Yup.ref("currentPass")], "La nueva contraseña debe ser diferente a la actual"),
  repeatnewPass: Yup.string()
    .required("La confirmación es obligatoria")
    .oneOf([Yup.ref("newPass"), null], 'Las contraseñas deben coincidir')
    .min(5, "Debe contener al menos 5 caracteres"),
})

export default PasswordComponent;
