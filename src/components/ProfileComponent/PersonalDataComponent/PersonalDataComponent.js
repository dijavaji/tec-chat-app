import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from "yup";


import './PersonalDataComponent.css'

const PersonalDataComponent = () => {

  const handleSubmit =(formData)=>{
    //TODO conectar con backend
    console.log(formData);
  }

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={editValidationSchema}>
    {() =>(
     <Form className="data-form">
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
        <button type="submit" className="register-btn">Actualizar</button>
      </div>
     </Form>
     )
    }
    </Formik>
  )
}

function initialValues(data){
  return {
    email:  data || '',
  }
}

const editValidationSchema = Yup.object({
  firstName: Yup.string().required("El nombre es obligatorio").min(3, "El nombre debe contener al menos 3 caracteres"),
  lastName: Yup.string().required("El apellido es obligatorio").min(3, "El apellido debe contener al menos 3 caracteres"),
  userName: Yup.string().matches(/[a-zA-Z0-9-]*$/, "El nickname no puede tener espacios").required("El nombre de usuario es obligatorio").min(3, "El nickname debe contener al menos 3 caracteres"),
  email: Yup.string().email("El email no es valido").required("El email es obligatorio"),
  address: Yup.string().required("La direcci\u00f3n es obligatorio"),
  password: Yup.string().required("La contrase\u00f1a es obligatoria").min(5, "La contrase\u00f1a debe contener al menos 5 caracteres"),
  accept: Yup.boolean().oneOf([true], 'Aceptar los t\u00e9rminos y condiciones').required("Aceptar t\u00e9rminos y condiciones"),
}
);

export default PersonalDataComponent
