import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import React from 'react';

const validationSchema = Yup.object().shape({
  color: Yup.string().required(),
  color2: Yup.string().required('required pls'),
});

function App() {
  return (
    <div>
      <Formik
        initialValues={{ color: '', color2: '' }}
        validationSchema={validationSchema}
        onSubmit={(values, helpers) => {
          console.log(values, helpers);
        }}
      >
        <Form>
          <Field as="select" name="color">
            <option value="" disabled defaultChecked></option>
            <option value="red">red</option>
            <option value="y">y</option>
          </Field>
          <Field name="color2" />
          <ErrorMessage name="color2" component="div" />
          <button type="submit">submit</button>
        </Form>
      </Formik>
    </div>
  );
}

export default App;
