import {useState} from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from "yup";

import "./RegisterComponent.css"


const RegisterComponent = (props) => {
  const handleSubmit = (values)=>{
    props.next(values);
  };
  const [isOpen, setIsOpen] = useState(false);


  return (
    <div className="contenedor">
    <div className="contenido">
     <h2 className="text-2xl font-bold">Registrate</h2>
      <Formik initialValues={props.data} onSubmit={handleSubmit} validationSchema={registerValidationSchema}>
      {() =>(
       <Form className="form-login">
        <div className="form-group">
          <Field type="text" name="firstName" placeholder="Nombre"
              className="form-control"  />
          <ErrorMessage name="firstName" component="div" className="mt-1 text-sm text-red-600 dark:text-red-500"/>
        </div>

        <div className="mb-4">
          <Field type="text" name="lastName" placeholder="Apellido"
              className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0  focus:text-gray-700 focus:bg-white focus:border-yellow-500 focus:outline-none"  />
          <ErrorMessage name="lastName" component="div" className="mt-1 text-sm text-red-600 dark:text-red-500"/>
        </div>
        <div className="mb-4">
          <Field type="text" name="userName" placeholder="Nickname"
          className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0  focus:text-gray-700 focus:bg-white focus:border-yellow-500 focus:outline-none"  />
          <ErrorMessage name="userName" component="div" className="mt-1 text-sm text-red-600 dark:text-red-500"/>
        </div>

        <div className="mb-4">
          <Field type="text" name="email" placeholder="Correo electronico"
          className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0  focus:text-gray-700 focus:bg-white focus:border-yellow-500 focus:outline-none"  />
          <ErrorMessage name="email" component="div" className="mt-1 text-sm text-red-600 dark:text-red-500"/>
        </div>

          <div className="mb-4">
            <Field type="text" name="address" placeholder="Pa&#237;s"
            className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0  focus:text-gray-700 focus:bg-white focus:border-yellow-500 focus:outline-none"  />
            <ErrorMessage name="address" component="div" className="mt-1 text-sm text-red-600 dark:text-red-500"/>
          </div>


          <div className="mb-4">
            <Field type="tel" name="phone" placeholder="Telefono"
            className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0  focus:text-gray-700 focus:bg-white focus:border-yellow-500 focus:outline-none"  />
            <ErrorMessage name="phone" component="div" className="mt-1 text-sm text-red-600 dark:text-red-500"/>
          </div>

          <div className="mb-4">
            <Field type="Password" name="password" placeholder="*********"
            className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0  focus:text-gray-700 focus:bg-white focus:border-yellow-500 focus:outline-none"  />
            <ErrorMessage name="password" component="div" className="mt-1 text-sm text-red-600 dark:text-red-500"/>
          </div>

          <div className="form-check text-center mb-4">
          <Field type="checkbox" name="accept"
            className="form-check-input appearance-none h-4 w-4 border border-yellow-500 rounded-sm bg-white checked:bg-yellow-600 checked:border-yellow-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain mr-2 cursor-pointer"/>
            <label className="form-check-label inline-block text-gray-800 hover:underline cursor-pointer"
                onClick={() => setIsOpen(true)} htmlFor="accept">Acepto los t&#233;rminos y condiciones
            </label>
            <ErrorMessage name="accept" component="div" className="mt-1 text-sm text-red-600 dark:text-red-500"/>
          </div>

        <div className="mt-8 flex justify-center text-lg text-black">
          <input type="submit" value="Continuar" className="form-control block w-full px-6 py-2.5 bg-yellow-500 text-black font-bold text-xs leading-tight rounded shadow-md hover:bg-yellow-700 hover:shadow-lg focus:bg-yellow-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-yellow-800 active:shadow-lg transition duration-150 ease-in-out"/>
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
  address: Yup.string().required("El pa\u00eds es obligatorio"),
  password: Yup.string().required("La contrase\u00f1a es obligatoria").min(5, "La contrase\u00f1a debe contener al menos 5 caracteres"),
  accept: Yup.boolean().required("Aceptar t&#233;rminos y condiciones"),
}
);

export default RegisterComponent;
