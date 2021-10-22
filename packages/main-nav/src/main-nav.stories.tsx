import React, { useState } from 'react';

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

const SampleUserMenu = () => {
  const [signedIn, setSignedIn] = useState(true);
  return (
    <UserMenu
      signIn={() => {
        setSignedIn(true);
      }}
      signOut={() => {
        setSignedIn(false);
      }}
      signedIn={signedIn}
    />
  );
};

export const WithUserMenu = () => (
  <MainNav UserMenuComponent={SampleUserMenu}>
    <MainNavLink href={'/'} title={'Home'} active={true} />
    <MainNavLink href={'/establishments'} title={'Establishments'} />
    <MainNavLink href={'/intelligence'} title={'Data and Insights'} />
  </MainNav>
);

export const NoNavItems = () => (
  <MainNav />
)
