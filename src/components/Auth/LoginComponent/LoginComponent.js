import React, {useState} from "react";
import {useFormik} from "formik";
import * as Yup from "yup";
//import {toast} from "react-toastify";

import { RiEyeLine, RiEyeOffLine, } from "react-icons/ri";

import "./LoginComponent.css";
import AuthService from "../../../services/auth.service";

import {setToken, decodeToken} from "../../../utils/tec-token.util";
//import useAuth from "../../../hooks/useAuth";

const required = value => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

const LoginComponent = (props) => {

  const [error, setError] = useState("");
	//const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

	//const {setUser} = useAuth();
	//const {setAuthType } = props;

  const formikLogin= useFormik({
  initialValues: initialValues(),
  validationSchema:Yup.object(
    {
      email: Yup.string().email("El email no es valido").required("El email es obligatorio"),
      password: Yup.string().required("La contrase\u00f1a es obligatoria"),
    }
  ),
  onSubmit:async (formData) =>{
    console.log("ingreso a login usuario");
    setError("");

    try{
      const data = await AuthService.login(formData.email, formData.password);
      console.log(data);
      const token = data.accessToken;
      if(token){
        console.log(token);
        //setToken(token);
        //setUser(decodeToken(token));
      }else {
        throw new Error(data.message);
      }
    }catch(error){
      //toast.error(error.message)
      console.log(error.message);
      setError(error.message);
    }
  },

});

  return (
     <div className="container">
    <div className="col-md-3">
        <div className="card card-container">
        <form onSubmit={formikLogin.handleSubmit}>
          <img
            src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
            alt="profile-img"
            className="profile-img-card"
          />


            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" name="email" placeholder="Correo Electr&#243;nico"
						        value={formikLogin.values.email}
			              onBlur={formikLogin.handleBlur}
                    onChange={formikLogin.handleChange}
                    className="form-control"/>
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input name="password"
                type="password"
                className="form-control"
                value={formikLogin.password}
                onBlur={formikLogin.handleBlur}
                onChange={formikLogin.handleChange}
                />
            </div>

            <div className="form-group">
              <button className="btn btn-primary btn-block" disabled={loading} >
                {loading && ( <span className="spinner-border spinner-border-sm"></span>)}
                <span>Login</span>
              </button>
            </div>

            {formikLogin.touched.email && formikLogin.errors.email && (
              <div className="form-group">
                <div className="alert alert-danger" role="alert">
                  {formikLogin.errors.email}
                </div>
              </div>
            )}


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
