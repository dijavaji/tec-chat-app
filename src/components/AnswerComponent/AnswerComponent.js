import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from "yup";
import { IoSaveOutline, IoCloseOutline } from "react-icons/io5";
import './AnswerComponent.css';

const AnswerSchema = Yup.object().shape({
  text: Yup.string().required("La respuesta no puede estar vacía"),
});

const AnswerComponent = ({ initial, onSubmit, onCancel }) => {
  return (
    <div className="inline-edit-form">
      <Formik
        initialValues={{ text: initial?.text || "" }}
        validationSchema={AnswerSchema}
        onSubmit={async (values, { setSubmitting }) => {
          await onSubmit(values);
          setSubmitting(false);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <div className="form-group">
              <label>Nueva Respuesta</label>
              <Field 
                name="text" 
                className="form-control" 
                placeholder="Escribe la respuesta del asistente..."
                autoFocus
              />
              <ErrorMessage name="text" component="div" className="error-message" />
            </div>
            
            <div className="form-actions">
              <button type="button" onClick={onCancel} className="btn-cancel">
                <IoCloseOutline size={18} />
                Cancelar
              </button>
              <button type="submit" disabled={isSubmitting} className="btn-submit">
                <IoSaveOutline size={18} />
                {isSubmitting ? 'Guardando...' : 'Guardar Respuesta'}
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default AnswerComponent;
