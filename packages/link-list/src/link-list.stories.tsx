import React from 'react';
import { LinkList, LinkListItem } from '.';

export default {
  title: 'AgDS/Link List',
};

export const Basic = () => (
  <LinkList>
    <LinkListItem href={'/#tab-1'}>Slaughter and carcase</LinkListItem>
    <LinkListItem href={'/#tab-2'}>Offal</LinkListItem>
    <LinkListItem href={'/#tab-3'}>Boning room</LinkListItem>
  </LinkList>
);

export const InlineWithActive = () => (
  <LinkList inline>
    <LinkListItem href={'/#tab-1'}>Slaughter and carcase</LinkListItem>
    <LinkListItem href={'/#tab-2'}>Offal</LinkListItem>
    <LinkListItem href={'/#tab-3'} active>
      Boning room
    </LinkListItem>
  </LinkList>
);
