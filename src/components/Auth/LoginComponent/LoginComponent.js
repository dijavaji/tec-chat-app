import React, { useState } from "react";
import { Link, useHistory } from 'react-router-dom';
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { MdArrowForward, MdEmail, MdLock, MdErrorOutline } from 'react-icons/md';

import "./LoginComponent.css";
import AuthService from "../../../services/auth.service";
import { setToken, decodeToken } from "../../../utils/tec-token.util";
import useAuth from "../../../hooks/useAuth";
import logoImg from "../../../assets/img/logo-smart-chat-blank.png";

const LoginComponent = () => {
  const navigate = useHistory();
  const [loading, setLoading] = useState(false);
  const { setUser } = useAuth();

  const formikLogin = useFormik({
    initialValues: initialValues(),
    validationSchema: Yup.object({
      email: Yup.string().email("El email no es válido").required("El email es obligatorio"),
      password: Yup.string().required("La contraseña es obligatoria").min(6, "Mínimo 6 caracteres"),
    }),
    onSubmit: async (formData) => {
      setLoading(true);
      try {
        const data = await AuthService.login(formData.email, formData.password);
        const token = data.accessToken;
        if (token) {
          setToken(token);
          setUser(decodeToken(token));
          toast.success("¡Bienvenido!");
          navigate.push('/menu');
        } else {
          throw new Error(data.message || "Error al iniciar sesión");
        }
      } catch (e) {
        toast.error(e.message);
        setLoading(false);
      }
    },
  });

  return (
    <div className="auth-page-wrapper">
      <div className="login-card-container">
        <div className="login-card">
          <div className="login-header">
            <Link to="/" className="login-logo-link">
              <img src={logoImg} alt="Technoloqie Logo" className="login-brand-logo" />
            </Link>
            <h1 className="login-title">Accede a tu panel de administración</h1>
            <p className="login-subtitle">Ingresa tus credenciales para continuar</p>
          </div>

          <form onSubmit={formikLogin.handleSubmit} className="login-form">
            <div className="form-group-modern">
              <label htmlFor="email">Correo electrónico</label>
              <div className="input-with-icon">
                <MdEmail className="input-icon" />
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="ejemplo@correo.com"
                  value={formikLogin.values.email}
                  onBlur={formikLogin.handleBlur}
                  onChange={formikLogin.handleChange}
                  className={formikLogin.touched.email && formikLogin.errors.email ? "input-error" : ""}
                />
              </div>
              {formikLogin.touched.email && formikLogin.errors.email && (
                <div className="error-text">
                  <MdErrorOutline /> {formikLogin.errors.email}
                </div>
              )}
            </div>

            <div className="form-group-modern">
              <label htmlFor="password">Contraseña</label>
              <div className="input-with-icon">
                <MdLock className="input-icon" />
                <input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="••••••••"
                  value={formikLogin.values.password}
                  onBlur={formikLogin.handleBlur}
                  onChange={formikLogin.handleChange}
                  className={formikLogin.touched.password && formikLogin.errors.password ? "input-error" : ""}
                />
              </div>
              {formikLogin.touched.password && formikLogin.errors.password && (
                <div className="error-text">
                  <MdErrorOutline /> {formikLogin.errors.password}
                </div>
              )}
            </div>

            <div className="login-extras">
              <Link to="#" className="forgot-password-link">¿Olvidaste tu contraseña?</Link>
            </div>

            <button type="submit" className="btn-login-submit" disabled={loading}>
              {loading ? "Cargando..." : "Iniciar Sesión"} <MdArrowForward />
            </button>

            <div className="login-footer">
              <p>
                ¿No tienes cuenta? <Link to="/register" className="register-highlight">Crea una gratis <MdArrowForward /></Link>
              </p>
            </div>
          </form>
        </div>
      </div>
      <div className="auth-background-decoration">
        <div className="decoration-orb orb-1"></div>
        <div className="decoration-orb orb-2"></div>
      </div>
    </div>
  );
}

function initialValues(){
	return(
		{
			email:"",
			password:"",
		}
	);
}

export default LoginComponent;
