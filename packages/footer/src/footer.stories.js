import React from 'react';

import { Footer, FooterLink } from '.';

export default {
  title: 'AgDS/Footer',
};

export const Basic = () => <Footer />;

export const WithLinks = () => (
  <Footer>
    <FooterLink href={'/somewhere'} title={'Internal link'} />
  </Footer>
);

export const WithExternalLinks = () => (
  <Footer>
    <FooterLink href={'https://gold.designsystemau.org'} title={'GOLD'} external={true} />
  </Footer>
);
