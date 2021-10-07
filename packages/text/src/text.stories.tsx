import React from 'react';
import { Text } from '.';

export default {
  title: 'AgDS/Text',
};

export const Basic = () => (
  <>
    <Text as={'p'}>Paragraph</Text>
    <br />
    <Text as={'span'}>Span</Text>
    <br />
    <Text as={'small'}>Small</Text>
    <br />
    <Text as={'em'}>Em</Text>
    <br />
    <Text as={'sup'}>Sup</Text>
    <br />
  </>
)
