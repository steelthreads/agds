import React from 'react';

import { MainNav } from '.';
import { NavLink } from './main-nav';

export default {
  title: 'AgDS/Main Nav',
};

const Template = (args) => (
  <MainNav {...args}>
    <NavLink href={'/intelligence'} title={'Intelligence'} active={true} />
    <NavLink href={'/establishments'} title={'Establishments'} />
    <NavLink href={'/profile'} title={'Profile'} />
  </MainNav>
);

export const Basic = Template.bind({});

Basic.args = {
  dark: true,
};
