import React from 'react';
import { Formik, Field, Form } from 'formik';

import {toast} from "react-toastify";


const UrlUploadComponent = () => {

  const handleSubmit = async (values)=>{

    toast.success("Cargando datos proceso en background.");
  }

  return (
    <div className = "container">
      <h1>Agregar ruta</h1>
      <Formik initialValues={initialSchema} onSubmit={handleSubmit} >
        <Form>
        <label htmlFor="urlDirection">Ruta</label>
        <Field id="urlDirection" name="urlDirection" placeholder="/home/.." />
        <button type="submit">Submit</button>
      </Form>
      </Formik>
    </div>
  )
}

const initialSchema ={
        urlDirection: '',
}

export default UrlUploadComponent;
