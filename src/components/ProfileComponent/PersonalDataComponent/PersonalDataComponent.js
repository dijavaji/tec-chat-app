import React from 'react';
import moment from 'moment';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from "yup";


import './PersonalDataComponent.css';

const DefaultTz = "America/New_York";

const PersonalDataComponent = (props) => {

  const { setShowModal, currentPerson, refetch } = props;

  //console.log(moment(currentPerson.birthDate).format("YYYY-MM-DD"));

  const handleSubmit =(formData)=>{
    //TODO conectar con backend
    console.log(formData);
  }

  return (
    <Formik initialValues={initialValues(currentPerson)} onSubmit={handleSubmit} validationSchema={editValidationSchema}>
    {() =>(
     <Form className="personal-form">
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
          <Field type="text" name="address" placeholder="Direcci&#243;n"
          className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0  focus:text-gray-700 focus:bg-white focus:border-yellow-500 focus:outline-none"  />
          <ErrorMessage name="address" component="div" className="error-message"/>
        </div>

        <div className="mb-4">
          <Field type="date" name="birthDate" timezone={DefaultTz} placeholder="Cumplea&#241;os"
          className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0  focus:text-gray-700 focus:bg-white focus:border-yellow-500 focus:outline-none"  />
          <ErrorMessage name="birthDate" component="div" className="error-message"/>
        </div>

        <div className="mb-4">
          <Field as="select" name="gender" placeholder="G&#233;nero"
          className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0  focus:text-gray-700 focus:bg-white focus:border-yellow-500 focus:outline-none">
            <option value="F">Femenino</option>
            <option value="M">Masculino</option>
          </Field>
          <ErrorMessage name="gender" component="div" className="error-message"/>
        </div>

        <div className="mb-4">
          <Field type="text" name="idn" placeholder="Identificaci&#243;n"
          className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0  focus:text-gray-700 focus:bg-white focus:border-yellow-500 focus:outline-none"  />
          <ErrorMessage name="idn" component="div" className="error-message"/>
        </div>

        <div className="">
          <Field type="tel" name="phone" placeholder="Tel&#233;fono"
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
    firstName: data.firstName || '',
    lastName: data.lastName || '',
    phone: data.phone || '',
    address: data.address || '',
    birthDate: moment(data.birthDate).format("YYYY-MM-DD") || '',
    gender: data.gender || '',
    idn: data.idn || '',

  }
}

const editValidationSchema = Yup.object({
  firstName: Yup.string().required("El nombre es obligatorio").min(3, "El nombre debe contener al menos 3 caracteres"),
  lastName: Yup.string().required("El apellido es obligatorio").min(3, "El apellido debe contener al menos 3 caracteres"),
  address: Yup.string().required("La direcci\u00f3n es obligatorio"),
  phone: Yup.string().matches(/^[+]{1}(?:[0-9\-\\(\\)\\/.]\s?){6,15}[0-9]{1}$/, "El tel\u00e9fono debe ser un numero valido").min(3, "El tel\u00e9fono debe contener al menos 3 caracteres").max(13,"El tel\u00e9fono debe contener al maximo 13 caracteres"),
}
);

export default PersonalDataComponent
