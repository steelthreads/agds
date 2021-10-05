import React from 'react';

import { Footer, FooterLink } from '.';

export default {
  title: 'AgDS/Footer',
};

export const Basic = () => <Footer />;

export const WithLinks = () => (
  <Footer>
    <FooterLink href={'#somewhere'} title={'Internal link'} />
  </Footer>
);

export const WithExternalLinks = () => (
  <Footer>
    <FooterLink href={'https://www.awe.gov.au/about/contact'} title={'Contact us'} />
    <FooterLink href={'https://www.awe.gov.au/about/commitment/accessibility'} title={'Accessibility'} />
    <FooterLink href={'https://www.awe.gov.au/disclaimer'} title={'Disclaimer'} />
    <FooterLink href={'https://www.awe.gov.au/about/commitment/privacy'} title={'Privacy'} />
    <FooterLink href={'https://gold.designsystemau.org'} title={'Copyright'} />
  </Footer>
);
