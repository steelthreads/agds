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
    <Text as={'mark'}>Mark</Text>
    <br />
    <Text as={'abbr'}>Abbr</Text>
    <br />
    <Text as={'var'}>Var</Text>
    <br />
    <Text as={'kbd'}>Kbd</Text>
    <br />
    <Text as={'ins'}>Ins</Text>
    <br />
    <Text as={'pre'}>Pre</Text>
    <br />
    <Text as={'code'}>Code</Text>
    <br />
  </>
)
