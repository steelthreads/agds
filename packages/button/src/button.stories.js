import React from 'react';

import {Button} from '.';

export default {
  title: 'AgDS/Button',
  component: Button,
  parameters: {},
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  variant: 'primary',
  children: 'Button',
};
