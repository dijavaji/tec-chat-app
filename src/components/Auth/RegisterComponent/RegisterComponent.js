import {useState} from 'react';
import { useHistory, Link } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from "yup";
import {toast} from "react-toastify";

import AuthService from '../../../services/auth.service';
import { AUDIT_APP,} from "../../../utils/tec-chat.constants";
import "./RegisterComponent.css"


const RegisterComponent = (props) => {
  const navigate = useHistory();

  const handleSubmit = async (values, { resetForm })=>{

    try{
      const newUser = await AuthService.register({
        username:values.userName,
        email:values.email,
        password:values.password,
        createdBy: AUDIT_APP.CREATE_BY,
        person:{
            firstName: values.firstName,
            lastName:values.lastName,
            address:values.address,
            phone:values.phone
        }
      });
      if(newUser.success){
          resetForm();
          navigate.push('/login');
          toast.success(newUser.message);
      }else{
        throw new Error("Error al crear usuario");
      }
    }catch(e){
      toast.error(e.message);
    }
  };


  return (
    <div className="contenedor">
    <div className="contenido">
     <h2 className="text-2xl font-bold">Registrate</h2>
      <Formik initialValues={initValues} onSubmit={handleSubmit} validationSchema={registerValidationSchema}>
      {() =>(
       <Form className="form-login">
        <div className="mb-4">
          <Field type="text" name="firstName" placeholder="Nombre"
              className="form-control"  />
          <ErrorMessage name="firstName" component="div" className="error-message"/>
        </div>

        <div className="mb-4">
          <Field type="text" name="lastName" placeholder="Apellido"
              className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0  focus:text-gray-700 focus:bg-white focus:border-yellow-500 focus:outline-none"  />
          <ErrorMessage name="lastName" component="div" className="error-message"/>
        </div>
        <div className="mb-4">
          <Field type="text" name="userName" placeholder="Nombre usuario"
          className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0  focus:text-gray-700 focus:bg-white focus:border-yellow-500 focus:outline-none"  />
          <ErrorMessage name="userName" component="div" className="error-message"/>
        </div>

        <div className="mb-4">
          <Field type="text" name="email" placeholder="Correo electr&#243;nico"
          className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0  focus:text-gray-700 focus:bg-white focus:border-yellow-500 focus:outline-none"  />
          <ErrorMessage name="email" component="div" className="error-message"/>
        </div>

          <div className="mb-4">
            <Field type="text" name="address" placeholder="Direcci&#243;n"
            className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0  focus:text-gray-700 focus:bg-white focus:border-yellow-500 focus:outline-none"  />
            <ErrorMessage name="address" component="div" className="error-message"/>
          </div>


          <div className="">
            <Field type="tel" name="phone" placeholder="Telefono"
            className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0  focus:text-gray-700 focus:bg-white focus:border-yellow-500 focus:outline-none"  />
            <ErrorMessage name="phone" component="div" className="error-message"/>
          </div>

          <div className="">
            <Field type="Password" name="password" placeholder="*********"
            className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0  focus:text-gray-700 focus:bg-white focus:border-yellow-500 focus:outline-none"  />
            <ErrorMessage name="password" component="div" className="error-message"/>
          </div>

          <div className="" style={{display: 'table'}}>
            <label className="" style={{display: 'table-cell', whiteSpace: 'nowrap'}} htmlFor="accept">Acepto los t&#233;rminos y condiciones </label>
            <Field type="checkbox" name="accept" className="" style={{display: 'table-cell'}}/>
          </div>
          <ErrorMessage name="accept" component="div" className="error-message"/>

        <div className="">
          <button type="submit" className="register-btn">Registrarse</button>
        </div>
        <div className="">
          <p className="register-link">&#161;Entra con tu cuenta&#33; <Link to="/login">Iniciar sesi&#243;n</Link></p>
        </div>
       </Form>
       )
      }
      </Formik>

    </div>
    </div>
  );
}

const registerValidationSchema = Yup.object({
  firstName: Yup.string().required("El nombre es obligatorio").min(3, "El nombre debe contener al menos 3 caracteres"),
  lastName: Yup.string().required("El apellido es obligatorio").min(3, "El apellido debe contener al menos 3 caracteres"),
  userName: Yup.string().matches(/[a-zA-Z0-9-]*$/, "El nickname no puede tener espacios").required("El nombre de usuario es obligatorio").min(3, "El nickname debe contener al menos 3 caracteres"),
  email: Yup.string().email("El email no es valido").required("El email es obligatorio"),
  address: Yup.string().required("La direcci\u00f3n es obligatorio"),
  password: Yup.string().required("La contrase\u00f1a es obligatoria").min(5, "La contrase\u00f1a debe contener al menos 5 caracteres"),
  accept: Yup.boolean().oneOf([true], 'Aceptar los t\u00e9rminos y condiciones').required("Aceptar t\u00e9rminos y condiciones"),
}
);

const initValues = {
        firstName: '',
        lastName: '',
        userName:'',
        email: '',
        address: '',
        password:'',
        accept:false
      };

export default RegisterComponent;
