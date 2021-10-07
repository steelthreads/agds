import React, { useState } from 'react';
import { TextField } from '.';

export default {
  title: 'Forms/Text Field',
};

export const Basic = () => {
  const [value, setValue] = useState('');
  return (
    <>
      <TextField id={'basicexamplefield'} value={value} onChange={setValue} />
      <p>Value: {value}</p>
    </>
  );
};
