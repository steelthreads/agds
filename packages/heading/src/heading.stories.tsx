import React from 'react';
import { Heading } from '.';

export default {
  title: 'AgDS/Heading',
};

export const Basic = () => (
  <>
    <Heading as="h1">Heading 1</Heading>
    <Heading as="h2">Heading 2</Heading>
    <Heading as="h3">Heading 3</Heading>
    <Heading as="h4">Heading 4</Heading>
    <Heading as="h5">Heading 5</Heading>
    <Heading as="h6">Heading 6</Heading>
  </>
);

export const Display = () => (
  <>
    <Heading size="xxxl" as="h4">h4 + Display xxxl</Heading>
    <Heading size="xxl" as="h6">h6 + Display xxl</Heading>
    <Heading size="xl" as="h4">h4 + Display xl</Heading>
    <Heading size="lg" as="h5">h5 + Display lg</Heading>
    <Heading size="md" as="h2">h2 + Display md</Heading>
    <Heading size="sm" as="h3">h3 + Display sm</Heading>
    <Heading size="xs" as="h1">h1 + Display xs</Heading>
  </>
);
