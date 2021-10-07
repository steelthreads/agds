import React from 'react';
import { Breadcrumb, BreadcrumbItem } from '.';

export default {
  title: 'AgDS/Breadcrumb',
};

export const Basic = () => (
  <Breadcrumb>
    <BreadcrumbItem href={'/'}>Home</BreadcrumbItem>
    <BreadcrumbItem href={'/profile'}>Profile</BreadcrumbItem>
    <BreadcrumbItem>My Preferences</BreadcrumbItem>
  </Breadcrumb>
)

export const WithIcon = () => (
  <Breadcrumb>
    <BreadcrumbItem>My Preferences <span>icon</span></BreadcrumbItem>
  </Breadcrumb>
)
