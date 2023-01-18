import { ComponentMeta, ComponentStory } from '@storybook/react';
import withFormik from '@bbbtech/storybook-formik';
import * as Yup from 'yup';

import TextField from './TextField';

export default {
  decorators: [withFormik],
  title: 'Form/TextField',
  component: TextField,
  argTypes: {},
} as ComponentMeta<typeof TextField>;

const Template: ComponentStory<typeof TextField> = args => (
  <TextField {...args} />
);

const validationSchema = Yup.object().shape({
  test: Yup.string()
    .max(5, 'Input is too long')
    .required('This field is required'),
});
const formik = { initialValues: { test: '' }, validationSchema };

export const NoLabel = Template.bind({});
NoLabel.args = { name: 'test' };
NoLabel.parameters = { formik };

export const WithLabel = Template.bind({});
WithLabel.args = {
  label: {
    id: 'id12345',
    name: 'Name',
  },
  name: 'test',
};
WithLabel.parameters = { formik };

export const WithError = Template.bind({});
WithError.args = {
  name: 'test',
};
const errorParams = {
  ...formik,
  initialValues: { test: 'Click on and off to view error message' },
};
WithError.parameters = { formik: errorParams };
