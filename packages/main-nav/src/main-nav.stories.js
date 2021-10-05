import React from 'react';

import { MainNav } from '.';
import { MainNavLink } from './main-nav';

export default {
  title: 'AgDS/Main Nav',
};

const Template = (args) => (
  <MainNav {...args}>
    <MainNavLink href={'/intelligence'} title={'Intelligence'} active={true} />
    <MainNavLink href={'/establishments'} title={'Establishments'} />
    <MainNavLink href={'/profile'} title={'Profile'} />
  </MainNav>
);

export const Basic = Template.bind({});

Basic.args = {
  dark: true,
};
