/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';

import Button from './components/Button/Button';
import StepOne from './components/form/StepOne/StepOne';
import StepSidebar from './components/form/StepSidebar/StepSidebar';

const validationSchema = Yup.object().shape({
  name: Yup.string().required('This field is required'),
  email: Yup.string().required('This field is required'),
  country: Yup.string().required('This field is required'),
  phoneNumber: Yup.string().required('This field is required'),
});

const formContainerStyle = css({
  display: 'flex',
  gap: 140,
  position: 'relative',

  padding: 20,
  margin: 40,

  backgroundColor: 'white',
  borderRadius: 16,

  minHeight: 608,
});

const mainFormStyle = css({
  maxWidth: 450,
  height: 568,

  '@media (max-width: 760px)': {
    maxWidth: 375,
  },
});

const buttonCustomStyle = css({
  position: 'absolute',
  bottom: 20,
  right: 20,
});

function App() {
  return (
    <div css={[formContainerStyle]}>
      <StepSidebar
        steps={[
          { stepNumber: 1, label: 'Your Info' },
          { stepNumber: 2, label: 'Select Plan' },
          { stepNumber: 3, label: 'Add-ons' },
          { stepNumber: 4, label: 'Summary' },
        ]}
      />

      <div css={[mainFormStyle]}>
        <Formik
          initialValues={{ name: '', email: '', country: '', phoneNumber: '+' }}
          validationSchema={validationSchema}
          onSubmit={(values, helpers) => {
            console.log(values, helpers);
          }}
        >
          {formikProps => {
            const [, countryCode] = formikProps.values.country.split('\n');

            if (countryCode) {
              if (!formikProps.values.phoneNumber.startsWith(countryCode)) {
                formikProps.setFieldValue('phoneNumber', countryCode);
              }
            }

            return (
              <Form>
                <StepOne />

                <Button
                  label="Next Step"
                  buttonCustomStyle={buttonCustomStyle}
                />
              </Form>
            );
          }}
        </Formik>
      </div>
    </div>
  );
}

export default App;
