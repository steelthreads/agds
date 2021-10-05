import React from 'react';
import { Header } from '@ag.ds/header';
import { MainNav, NavLink } from '@ag.ds/main-nav';
import { Footer, FooterLink } from '@ag.ds/footer';

export default {
  title: 'Pages/Layout',
};

export const Basic = () => (
  <>
    <Header />
    <MainNav>
      <NavLink href={'/'} title={'Home'} active={true} />
      <NavLink href={'/establishments'} title={'Establishments'} />
    </MainNav>
    <div style={{ height: 300 }} />
    <Footer>
      <FooterLink href={'https://awe.gov.au'} title={'awe.gov.au'} />
    </Footer>
  </>
);
