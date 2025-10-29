import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from "yup";
import { FaWindowClose, FaSave } from "react-icons/fa";



const QuestionSchema = Yup.object().shape({
  text: Yup.string().required("Requerido"),
});

const QuestionComponent = ({ initial, onSubmit, onCancel }) => {
  return (
    <div style={{ border: "1px solid #ddd", padding: 8, marginBottom: 8 }}>
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
            <div>
              <label>Pregunta</label>
              <Field name="text" />
              <ErrorMessage name="text" component="div" style={{ color: "red" }} />
            </div>
            <div>
              <button type="submit" disabled={isSubmitting} className="action-btn">
                <FaSave title="Guardar pregunta"/>
              </button>
              <button type="button" onClick={onCancel} className="action-btn">
                <FaWindowClose title="Cancelar" />
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default QuestionComponent;
