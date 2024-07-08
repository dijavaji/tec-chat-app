import React, {useState} from "react";
import { Link} from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import {useFormik} from "formik";
import * as Yup from "yup";
import {toast} from "react-toastify";

import "./LoginComponent.css";
import AuthService from "../../../services/auth.service";
import {setToken, decodeToken} from "../../../utils/tec-token.util";
import useAuth from "../../../hooks/useAuth";

const required = value => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

const LoginComponent = () => {
  const navigate = useHistory();
  const [error, setError] = useState("");
	//const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  //const [user, setUser] = useState('');
	const {setUser} = useAuth();
	//const {setAuthType } = props;

  const formikLogin= useFormik({
  initialValues: initialValues(),
  validationSchema:Yup.object(
    {
      email: Yup.string().email("El email no es valido").required("El email es obligatorio"),
      password: Yup.string().matches(/[a-zA-Z0-9-]*$/, "La contrase\u00f1a no puede tener espacios").required("La contrase\u00f1a es obligatoria").min(6,"La contrase\u00f1a debe contener al menos 6 caracteres"),
    }
  ),
  onSubmit:async (formData) =>{
    console.log("ingreso a login usuario");
    setError("");

    try{
      const data = await AuthService.login(formData.email, formData.password);
      //console.log(data);
      const token = data.accessToken;
      if(token){
        //console.log(token);
        setToken(token);
        const user = decodeToken(token);
        console.log(user);
        setUser(user);
        navigate.push('/profile');
        //setUser(decodeToken(token));
        //console.log(decodeToken(token));
      }else {
        console.log(data.error)
        throw new Error(data.message);
      }
    }catch(e){
      toast.error(e.message)
      console.log(JSON.stringify(e.message)); //console.log(e.toString()); //console.error(e);
      //const resMessage = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
      setLoading(false);
      setError(e.message);
    }
  },

});

  return (
     <div className="contenedor">
    <div className="contenido">
        <div className="login-content">
        <form onSubmit={formikLogin.handleSubmit} className="form-login">
        <h2>Iniciar Sesi&#243;n</h2>
          <img
            src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
            alt="profile-img"
            className="profile-img-card"
          />
            <div className="form-group">

              <input type="email" name="email" placeholder="Correo"
						        value={formikLogin.values.email}
			              onBlur={formikLogin.handleBlur}
                    onChange={formikLogin.handleChange}
                    className="form-control"/>
              <div>
                {formikLogin.touched.email && formikLogin.errors.email ? (<p className="alert alert-danger"><span className=""></span>{formikLogin.errors.email}</p>): null }
              </div>
            </div>

            <div className="form-group">

              <input name="password"
                type="password"
                className="form-control"
                placeholder="Contrase&#241;a"
                value={formikLogin.password}
                onBlur={formikLogin.handleBlur}
                onChange={formikLogin.handleChange}
                />
                <div className="error-message">
                  {formikLogin.touched.password && formikLogin.errors.password ? (<p className="alert alert-danger"><span className=""></span>{formikLogin.errors.password}</p>): null }
                </div>
            </div>

            <div className="form-group">
              <button type="submit" className="send-btn" disabled={loading} >
                {loading && ( <span className="spinner-border spinner-border-sm"></span>)}
                <span>Enviar</span>
              </button>
            </div>
            <div className="form-group">
              <p className="register-link">¿No tienes una cuenta? <Link to="/register">Regístrate aquí</Link></p>
            </div>

            {/*error && (
              <div className="form-group">
                <div className="alert alert-danger" role="alert">
                  {error}
                </div>
              </div>
            )*/}


            </form>
        </div>
      </div>
      </div>
  )
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
