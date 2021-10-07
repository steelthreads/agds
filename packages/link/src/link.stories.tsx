import React from 'react';
import { Link } from '.';

export default {
  title: 'AgDS/Link',
};

export const Basic = () => <Link href="#">Hash link</Link>;

export const WithTextAndIcon = () => <Link href="#">Hash link<span>Icon</span></Link>;
