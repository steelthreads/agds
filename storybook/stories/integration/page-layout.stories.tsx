import React, { useState } from 'react';
import { Header } from '@ag.ds/header';
import { MainNav, MainNavLink, UserMenu } from '@ag.ds/main-nav';
import { Footer, FooterLink } from '@ag.ds/footer';
import { Column, Container, Row } from '@ag.ds/grid-12';
import { Heading } from '@ag.ds/heading';

export default {
  title: 'Integration/Page Layout',
};

const BasicUserMenu = () => {
  const [signedIn, setSignedIn] = useState(false);
  return <UserMenu signIn={() => setSignedIn(true)} signOut={() => setSignedIn(false)} signedIn={signedIn} />;
};

export const Basic = () => (
  <>
    <Header />
    <MainNav UserMenuComponent={BasicUserMenu}>
      <MainNavLink href={'/'} title={'Home'} active={true} />
      <MainNavLink href={'/establishments'} title={'Establishments'} />
      <MainNavLink href={'/intelligence'} title={'Data and Insights'} />
    </MainNav>
    <Container>
      <Row>
        <Column className={'col-xs-12'}>
          <div style={{ height: 300, paddingTop: '2rem', paddingBottom: '2rem' }}>
            <Heading as={'h1'} size={'xxl'}>
              Page heading 1
            </Heading>
          </div>
        </Column>
      </Row>
    </Container>
    <Footer>
      <FooterLink href={'https://www.awe.gov.au/about/contact'} title={'Contact us'} />
      <FooterLink href={'https://www.awe.gov.au/about/commitment/accessibility'} title={'Accessibility'} />
      <FooterLink href={'https://www.awe.gov.au/disclaimer'} title={'Disclaimer'} />
      <FooterLink href={'https://www.awe.gov.au/about/commitment/privacy'} title={'Privacy'} />
      <FooterLink href={'https://www.awe.gov.au/about/copyright'} title={'Copyright'} />
    </Footer>
  </>
);
