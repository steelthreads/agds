import React from 'react';

import { MainNav } from '.';
import { MainNavLink } from './main-nav';

export default {
  title: 'AgDS/Main Nav',
};

// @ts-ignore
const Template = (args) => (
  <MainNav {...args}>
    <MainNavLink href={'/'} title={'Home'} active={true} />
    <MainNavLink href={'/establishments'} title={'Establishments'} />
    <MainNavLink href={'/intelligence'} title={'Data and Insights'} />
  </MainNav>
);

export const Basic = Template.bind({});

// @ts-ignore
Basic.args = {};
