import React from 'react';
import moment from 'moment';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from "yup";
import { 
  IoPersonOutline, 
  IoLocationOutline, 
  IoCalendarOutline, 
  IoMaleFemaleOutline, 
  IoCardOutline, 
  IoCallOutline 
} from "react-icons/io5";

import './PersonalDataComponent.css';

const DefaultTz = "America/New_York";

const PersonalDataComponent = (props) => {
  const { setShowModal, currentPerson } = props;

  const handleSubmit = (formData) => {
    // TODO: conectar con backend
    console.log('Update Personal Data:', formData);
    setShowModal(false);
  }

  return (
    <Formik 
      initialValues={initialValues(currentPerson)} 
      onSubmit={handleSubmit} 
      validationSchema={editValidationSchema}
    >
      {({ isSubmitting }) => (
        <Form className="personal-form">
          <div className="form-row">
            <div className="form-group">
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px', color: 'var(--color-text-muted)' }}>
                <IoPersonOutline />
                <span style={{ fontSize: '0.85rem', fontWeight: 600 }}>Nombre</span>
              </div>
              <Field type="text" name="firstName" placeholder="Nombre" className="form-control" />
              <ErrorMessage name="firstName" component="div" className="error-message" />
            </div>

            <div className="form-group">
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px', color: 'var(--color-text-muted)' }}>
                <IoPersonOutline />
                <span style={{ fontSize: '0.85rem', fontWeight: 600 }}>Apellido</span>
              </div>
              <Field type="text" name="lastName" placeholder="Apellido" className="form-control" />
              <ErrorMessage name="lastName" component="div" className="error-message" />
            </div>
          </div>

          <div className="form-group">
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px', color: 'var(--color-text-muted)' }}>
              <IoLocationOutline />
              <span style={{ fontSize: '0.85rem', fontWeight: 600 }}>Dirección</span>
            </div>
            <Field type="text" name="address" placeholder="Tu dirección" className="form-control" />
            <ErrorMessage name="address" component="div" className="error-message" />
          </div>

          <div className="form-row">
            <div className="form-group">
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px', color: 'var(--color-text-muted)' }}>
                <IoCalendarOutline />
                <span style={{ fontSize: '0.85rem', fontWeight: 600 }}>Fecha de Nacimiento</span>
              </div>
              <Field type="date" name="birthDate" className="form-control" />
              <ErrorMessage name="birthDate" component="div" className="error-message" />
            </div>

            <div className="form-group">
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px', color: 'var(--color-text-muted)' }}>
                <IoMaleFemaleOutline />
                <span style={{ fontSize: '0.85rem', fontWeight: 600 }}>Género</span>
              </div>
              <Field as="select" name="gender" className="form-control">
                <option value="" disabled>Seleccionar</option>
                <option value="F">Femenino</option>
                <option value="M">Masculino</option>
              </Field>
              <ErrorMessage name="gender" component="div" className="error-message" />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px', color: 'var(--color-text-muted)' }}>
                <IoCardOutline />
                <span style={{ fontSize: '0.85rem', fontWeight: 600 }}>Identificación</span>
              </div>
              <Field type="text" name="idn" placeholder="ID / DNI" className="form-control" />
              <ErrorMessage name="idn" component="div" className="error-message" />
            </div>

            <div className="form-group">
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px', color: 'var(--color-text-muted)' }}>
                <IoCallOutline />
                <span style={{ fontSize: '0.85rem', fontWeight: 600 }}>Teléfono</span>
              </div>
              <Field type="tel" name="phone" placeholder="+00 000 000 000" className="form-control" />
              <ErrorMessage name="phone" component="div" className="error-message" />
            </div>
          </div>

          <button type="submit" className="register-btn" disabled={isSubmitting}>
            {isSubmitting ? 'Actualizando...' : 'Actualizar Perfil'}
          </button>
        </Form>
      )}
    </Formik>
  )
}

function initialValues(data) {
  if (!data) return {
    firstName: '',
    lastName: '',
    phone: '',
    address: '',
    birthDate: '',
    gender: '',
    idn: '',
  };

  return {
    firstName: data.firstName || '',
    lastName: data.lastName || '',
    phone: data.phone || '',
    address: data.address || '',
    birthDate: data.birthDate ? moment(data.birthDate).format("YYYY-MM-DD") : '',
    gender: data.gender || '',
    idn: data.idn || '',
  }
}

const editValidationSchema = Yup.object({
  firstName: Yup.string().required("El nombre es obligatorio").min(3, "Mínimo 3 caracteres"),
  lastName: Yup.string().required("El apellido es obligatorio").min(3, "Mínimo 3 caracteres"),
  address: Yup.string().required("La dirección es obligatoria"),
  phone: Yup.string().matches(/^[+]{1}(?:[0-9\-\\(\\)\\/.]\s?){6,15}[0-9]{1}$/, "Número no válido").required("El teléfono es obligatorio"),
  birthDate: Yup.date().required("La fecha es obligatoria"),
  gender: Yup.string().required("El género es obligatorio"),
  idn: Yup.string().required("La identificación es obligatoria"),
});

export default PersonalDataComponent;
