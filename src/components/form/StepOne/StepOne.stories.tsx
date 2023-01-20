import withFormik from '@bbbtech/storybook-formik';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import StepOne from './StepOne';

export default {
  title: 'Form/StepOne',
  decorators: [withFormik],
  component: StepOne,
  argTypes: {},
} as ComponentMeta<typeof StepOne>;

const Template: ComponentStory<typeof StepOne> = () => <StepOne />;

const formik = { initialValues: { name: '', email: '', phoneNumber: '' } };
export const Default = Template.bind({});
Default.parameters = { formik };
