import { ComponentMeta, ComponentStory } from '@storybook/react';

import StepSidebar from './StepSidebar';

export default {
  title: 'Form/StepSidebar',
  component: StepSidebar,
  argTypes: {},
} as ComponentMeta<typeof StepSidebar>;

const Template: ComponentStory<typeof StepSidebar> = args => (
  <StepSidebar {...args} />
);

export const Filled = Template.bind({});
Filled.args = {
  steps: [
    { stepNumber: 1, label: 'Your Info' },
    { stepNumber: 2, label: 'Select Plan' },
    { stepNumber: 3, label: 'Add-ons' },
    { stepNumber: 4, label: 'Summary' },
  ],
};
