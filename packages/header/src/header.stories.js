import React from 'react';

import {Header} from './header';

export default {
  title: 'Example/Header',
  component: Header,
  parameters: {},
};

const Template = (args) => <Header {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  variant: 'primary',
  children: 'Header',
};
