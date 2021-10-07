import React from 'react';
import { Header } from '@ag.ds/header';
import { MainNav, MainNavLink } from '@ag.ds/main-nav';
import { Footer, FooterLink } from '@ag.ds/footer';
import { Column, Container, Row } from '@ag.ds/grid-12';

export default {
  title: 'Integration/Page Layout',
};

export const Basic = () => (
  <>
    <Header />
    <MainNav>
      <MainNavLink href={'/'} title={'Home'} active={true} />
      <MainNavLink href={'/establishments'} title={'Establishments'} />
    </MainNav>
    <Container>
      <Row>
        <Column className={'col-xs-12'}>
          <div style={{ height: 300 }} />
        </Column>
      </Row>
    </Container>
    <Footer>
      <FooterLink href={'https://www.awe.gov.au/about/contact'} title={'Contact us'} />
      <FooterLink href={'https://www.awe.gov.au/about/commitment/accessibility'} title={'Accessibility'} />
      <FooterLink href={'https://www.awe.gov.au/disclaimer'} title={'Disclaimer'} />
      <FooterLink href={'https://www.awe.gov.au/about/commitment/privacy'} title={'Privacy'} />
      <FooterLink href={'https://gold.designsystemau.org'} title={'Copyright'} />
    </Footer>
  </>
);
