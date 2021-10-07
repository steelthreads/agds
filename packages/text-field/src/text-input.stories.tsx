import React, { useState } from 'react';
import { TextInput } from '.';

export default {
  title: 'AgDS/Text Input',
};

export const Basic = () => {
  const [value, setValue] = useState('');
  return (
    <>
      <TextInput
        name={'textinputbasic'}
        id={'textinputbasic'}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <p>Value: {value}</p>
    </>
  );
};
