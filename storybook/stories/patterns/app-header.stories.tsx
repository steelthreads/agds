import React from 'react';
import { Container } from '@ag.ds/grid-12';
import { Breadcrumb, BreadcrumbItem } from '@ag.ds/breadcrumb';
import { Heading } from '@ag.ds/heading';
import { LinkList, LinkListItem } from '@ag.ds/link-list';

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
      <Heading as={'h1'} size={'xxxl'} style={{ marginTop: '4px', marginBottom: '16px' }}>JBS Australia Pty Ltd</Heading>
    </Container>

    <Container style={{ borderBottom: '9px solid #979797' }}>
      <LinkList inline>
        <LinkListItem href={'/#tab-1'}>Slaughter and carcase</LinkListItem>
        <LinkListItem href={'/#tab-2'}>Offal</LinkListItem>
        <LinkListItem href={'/#tab-3'}>Boning room</LinkListItem>
      </LinkList>
    </Container>
  </div>
);
