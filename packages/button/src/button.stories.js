import React from 'react';

import { Button } from '.';

export default {
  title: 'AgDS/Button',
  component: Button,
  parameters: {},
};

const Template = (args) => <Button {...args} />;

export const Basic = Template.bind({});

Basic.args = {
  dark: true,
  children: 'Button',
};

export const ComplexLabel = () => (
  <Button>
    <span>Hello</span>
    <span>Hello</span>
  </Button>
);
