import React from 'react';
import { Container } from '@ag.ds/grid-12';
import { Breadcrumb, BreadcrumbItem } from '@ag.ds/breadcrumb';
import { Heading } from '@ag.ds/heading';

export default {
  title: 'Patterns/App Header',
};

// TODO - tokenise
const AU_color_background_shade = '#F5F5F5';

export const Basic = () => (
  <div style={{ background: AU_color_background_shade, paddingTop: '2em' }}>
    <Container>
      <Breadcrumb>
        <BreadcrumbItem href={'/'}>Data and Insights Home</BreadcrumbItem>
        <BreadcrumbItem>Meat Hygiene Assessment (MHA)</BreadcrumbItem>
      </Breadcrumb>
      <Heading as={'h1'} size={'xxxl'} style={{ marginTop: '4px', marginBottom: '16px' }}>
        JBS Australia Pty Ltd
      </Heading>
    </Container>
  </div>
);
