import React from 'react';

import { MainNav, MainNavLink, UserMenu } from '.';

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

const MockUserMenu = () => (
  <UserMenu signIn={() => alert('sign in')} signOut={() => alert('sign out')} signedIn={true} />
);

export const WithUserMenu = () => (
  <MainNav UserMenuComponent={MockUserMenu}>
    <MainNavLink href={'/'} title={'Home'} active={true} />
    <MainNavLink href={'/establishments'} title={'Establishments'} />
    <MainNavLink href={'/intelligence'} title={'Data and Insights'} />
  </MainNav>
);
