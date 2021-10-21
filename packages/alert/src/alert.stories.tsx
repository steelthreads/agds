import React from 'react';

import { Alert } from '.';

export default {
  title: 'AgDS/Alert',
  component: Alert,
  argTypes: {
    dark: {
      options: [true, false],
      control: { type: 'radio' },
    },
    variant: {
      options: ['info', 'success', 'error', 'warning'],
      control: { type: 'select' },
    },
  },
};

// @ts-ignore
const Template = (args) => (
  <Alert {...args}>
    <h1>Custom header</h1>
    <p>Custom content</p>
  </Alert>
);

export const Basic = Template.bind({});

// @ts-ignore
Basic.args = {
  dark: false,
  variant: 'info',
};
