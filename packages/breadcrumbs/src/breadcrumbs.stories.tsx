import React from 'react';
import { Breadcrumbs, BreadcrumbsItem } from '.';

export default {
  title: 'AgDS/Breadcrumbs',
};

export const Basic = () => (
  <Breadcrumbs>
    <BreadcrumbsItem href={'/'}>Home</BreadcrumbsItem>
    <BreadcrumbsItem href={'/profile'}>Profile</BreadcrumbsItem>
    <BreadcrumbsItem >My Preferences</BreadcrumbsItem>
  </Breadcrumbs>
)
