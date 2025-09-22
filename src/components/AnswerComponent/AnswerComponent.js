import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from "yup";

const AnswerSchema = Yup.object().shape({
  text: Yup.string().required("Requerido"),
});

const AnswerComponent = ({ initial, onSubmit, onCancel }) => {
  return (
    <div style={{ border: "1px dashed #ccc", padding: 6, marginTop: 6 }}>
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
            <div>
              <label>Respuesta</label>
              <Field name="text" />
              <ErrorMessage name="text" component="div" style={{ color: "red" }} />
            </div>
            <div>
              <button type="submit" disabled={isSubmitting}>
                Guardar respuesta
              </button>
              <button type="button" onClick={onCancel}>
                Cancelar
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default AnswerComponent;
