import React from 'react';
import { TabLinkList, LinkListItem } from '.';

export default {
  title: 'AgDS/Tab List',
};

export const Basic = () => (
  <TabLinkList>
    <LinkListItem href={'/#tab-1'}>Slaughter and carcase</LinkListItem>
    <LinkListItem href={'/#tab-2'} active>
      Offal
    </LinkListItem>
    <LinkListItem href={'/#tab-3'}>Boning room</LinkListItem>
  </TabLinkList>
);
