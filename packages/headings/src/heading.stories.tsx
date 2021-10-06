import React from 'react';
import { Heading } from '.';

export default {
  title: 'AgDS/Headings',
};

export const Basic = () => (
  <>
    <Heading level="1" size="xxxl">Heading 1</Heading>
    <Heading level="2" size="xxl">Heading 2</Heading>
    <Heading level="3" size="xl">Heading 3</Heading>
    <Heading level="4" size="lg">Heading 4</Heading>
    <Heading level="5" size="md">Heading 5</Heading>
    <Heading level="6" size="sm">Heading 6</Heading>
  </>
);

export const Display = () => (
  <>
    <Heading size="xxxl" level="4">h4 + Display xxxl</Heading>
    <Heading size="xxl" level="6">h6 + Display xxl</Heading>
    <Heading size="xl" level="4">h4 + Display xl</Heading>
    <Heading size="lg" level="5">h5 + Display lg</Heading>
    <Heading size="md" level="2">h2 + Display md</Heading>
    <Heading size="sm" level="3">h3 + Display sm</Heading>
    <Heading size="xs" level="1">h1 + Display xs</Heading>
  </>
);
