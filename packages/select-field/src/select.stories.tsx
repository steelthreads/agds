import React, { useState } from 'react';

import { Select, Option } from '.';

export default {
  title: 'Forms/Select',
};

export const Basic = () => {
  const [value, setValue] = useState('');
  return (
    <>
      <Select id={'select1'} value={value} onChange={(e) => setValue(e.target.value)}>
        <Option value={'one'}>One</Option>
        <Option value={'two'}>Two</Option>
        <Option value={'three'}>Three</Option>
      </Select>
      <p>Value: {value}</p>
    </>
  );
};
