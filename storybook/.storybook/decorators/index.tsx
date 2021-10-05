import React from 'react';
import { AgdsProvider } from '@ag.ds/core';

export const AgdsDecorator = (Story: React.ElementType) => (
  <AgdsProvider
    linkFactory={({ children, href, ...rest }) => {
      return <a href={href} {...rest}>{children}</a>;
    }}
  >
    <Story />
  </AgdsProvider>
);
