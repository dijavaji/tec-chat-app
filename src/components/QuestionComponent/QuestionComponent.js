import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from "yup";
import { IoSaveOutline, IoCloseOutline } from "react-icons/io5";
import './QuestionComponent.css';

const QuestionSchema = Yup.object().shape({
  text: Yup.string().required("La pregunta no puede estar vacía"),
});

const QuestionComponent = ({ initial, onSubmit, onCancel }) => {
  return (
    <div className="inline-edit-form">
      <Formik
        initialValues={{ text: initial?.text || "" }}
        validationSchema={QuestionSchema}
        onSubmit={async (values, { setSubmitting }) => {
          await onSubmit(values);
          setSubmitting(false);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <div className="form-group">
              <label>Nueva Pregunta</label>
              <Field 
                name="text" 
                className="form-control" 
                placeholder="Escribe la frase de entrenamiento..."
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
                {isSubmitting ? 'Guardando...' : 'Guardar Pregunta'}
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default QuestionComponent;
