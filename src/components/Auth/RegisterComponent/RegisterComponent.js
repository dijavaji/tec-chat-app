import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from "yup";
import { toast } from "react-toastify";
import { MdArrowForward, MdPerson, MdEmail, MdHome, MdPhone, MdLock, MdErrorOutline, MdCheckCircleOutline } from 'react-icons/md';

import AuthService from '../../../services/auth.service';
import { AUDIT_APP } from "../../../utils/tec-chat.constants";
import logoImg from "../../../assets/img/logo-smart-chatbotTiny.png";
import "./RegisterComponent.css";

const RegisterComponent = () => {
  const navigate = useHistory();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (values, { resetForm }) => {
    setLoading(true);
    try {
      const newUser = await AuthService.register({
        username: values.userName,
        email: values.email,
        password: values.password,
        createdBy: AUDIT_APP.CREATE_BY,
        person: {
          firstName: values.firstName,
          lastName: values.lastName,
          address: values.address,
          phone: values.phone
        }
      });
      
      if (newUser.success) {
        resetForm();
        toast.success(newUser.message || "¡Cuenta creada con éxito!");
        navigate.push('/login');
      } else {
        throw new Error(newUser.message || "Error al crear usuario");
      }
    } catch (e) {
      toast.error(e.message);
      setLoading(false);
    }
  };

  return (
    <div className="auth-page-wrapper">
      <div className="register-card-container">
        <div className="register-card">
          <div className="register-header">
            <Link to="/" className="login-logo-link">
              <img src={logoImg} alt="Technoloqie Logo" className="login-brand-logo" />
            </Link>
            <h1 className="register-title">Crea tu cuenta gratis</h1>
            <p className="register-subtitle">Únete a la revolución de la IA conversacional</p>
          </div>

          <Formik 
            initialValues={initValues} 
            onSubmit={handleSubmit} 
            validationSchema={registerValidationSchema}
          >
            {({ errors, touched }) => (
              <Form className="register-form">
                <div className="form-row-modern">
                  <div className="form-group-modern">
                    <label htmlFor="firstName">Nombre</label>
                    <div className="input-with-icon">
                      <MdPerson className="input-icon" />
                      <Field name="firstName" placeholder="Juan" className={touched.firstName && errors.firstName ? "input-error" : ""} />
                    </div>
                    <ErrorMessage name="firstName" component="div" className="error-text" />
                  </div>
                  <div className="form-group-modern">
                    <label htmlFor="lastName">Apellido</label>
                    <div className="input-with-icon">
                      <MdPerson className="input-icon" />
                      <Field name="lastName" placeholder="Pérez" className={touched.lastName && errors.lastName ? "input-error" : ""} />
                    </div>
                    <ErrorMessage name="lastName" component="div" className="error-text" />
                  </div>
                </div>

                <div className="form-group-modern">
                  <label htmlFor="userName">Nombre de usuario</label>
                  <div className="input-with-icon">
                    <MdPerson className="input-icon" />
                    <Field name="userName" placeholder="juanperez123" className={touched.userName && errors.userName ? "input-error" : ""} />
                  </div>
                  <ErrorMessage name="userName" component="div" className="error-text" />
                </div>

                <div className="form-group-modern">
                  <label htmlFor="email">Correo electrónico</label>
                  <div className="input-with-icon">
                    <MdEmail className="input-icon" />
                    <Field name="email" type="email" placeholder="ejemplo@correo.com" className={touched.email && errors.email ? "input-error" : ""} />
                  </div>
                  <ErrorMessage name="email" component="div" className="error-text" />
                </div>

                <div className="form-group-modern">
                  <label htmlFor="address">Dirección</label>
                  <div className="input-with-icon">
                    <MdHome className="input-icon" />
                    <Field name="address" placeholder="Quito, Ecuador" className={touched.address && errors.address ? "input-error" : ""} />
                  </div>
                  <ErrorMessage name="address" component="div" className="error-text" />
                </div>

                <div className="form-row-modern">
                  <div className="form-group-modern">
                    <label htmlFor="phone">Teléfono</label>
                    <div className="input-with-icon">
                      <MdPhone className="input-icon" />
                      <Field name="phone" placeholder="+593 ..." className={touched.phone && errors.phone ? "input-error" : ""} />
                    </div>
                    <ErrorMessage name="phone" component="div" className="error-text" />
                  </div>
                  <div className="form-group-modern">
                    <label htmlFor="password">Contraseña</label>
                    <div className="input-with-icon">
                      <MdLock className="input-icon" />
                      <Field name="password" type="password" placeholder="••••••••" className={touched.password && errors.password ? "input-error" : ""} />
                    </div>
                    <ErrorMessage name="password" component="div" className="error-text" />
                  </div>
                </div>

                <div className="terms-container">
                  <label className="checkbox-label">
                    <Field type="checkbox" name="accept" />
                    <span>Acepto los <Link to="#">términos y condiciones</Link></span>
                  </label>
                  <ErrorMessage name="accept" component="div" className="error-text" />
                </div>

                <button type="submit" className="btn-register-submit" disabled={loading}>
                  {loading ? "Procesando..." : "Registrarse ahora"} <MdArrowForward />
                </button>

                <div className="register-footer">
                  <p>
                    ¿Ya tienes cuenta? <Link to="/login" className="login-highlight">Iniciar sesión <MdArrowForward /></Link>
                  </p>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
      <div className="auth-background-decoration">
        <div className="decoration-orb orb-1"></div>
        <div className="decoration-orb orb-2"></div>
      </div>
    </div>
  );
}

const registerValidationSchema = Yup.object({
  firstName: Yup.string().required("El nombre es obligatorio").min(3, "Mínimo 3 caracteres"),
  lastName: Yup.string().required("El apellido es obligatorio").min(3, "Mínimo 3 caracteres"),
  userName: Yup.string().matches(/^[a-zA-Z0-9-]*$/, "Sin espacios").required("El usuario es obligatorio").min(3, "Mínimo 3 caracteres"),
  email: Yup.string().email("El email no es válido").required("El email es obligatorio"),
  address: Yup.string().required("La dirección es obligatoria"),
  password: Yup.string().required("La contraseña es obligatoria").min(6, "Mínimo 6 caracteres"),
  accept: Yup.boolean().oneOf([true], 'Debes aceptar los términos').required("Obligatorio"),
});

const initValues = {
  firstName: '',
  lastName: '',
  userName: '',
  email: '',
  address: '',
  phone: '',
  password: '',
  accept: false
};

export default RegisterComponent;
