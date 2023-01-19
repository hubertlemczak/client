import { ComponentMeta, ComponentStory } from '@storybook/react';

import Step from './index';

export default {
  title: 'Form/Step',
  component: Step,
  argTypes: {},
  parameters: {
    backgrounds: {
      default: 'blue',
      values: [{ name: 'blue', value: '#473FFF' }],
    },
  },
} as ComponentMeta<typeof Step>;

const Template: ComponentStory<typeof Step> = args => <Step {...args} />;

export const Defualt = Template.bind({});
Defualt.args = { isActive: false, stepNumber: 1, label: 'Your Info' };

export const Active = Template.bind({});
Active.args = { isActive: true, stepNumber: 2, label: 'Select Plan' };
