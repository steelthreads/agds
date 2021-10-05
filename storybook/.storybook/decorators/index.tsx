import React from 'react';
import { AgdsProvider } from '@ag.ds/core';

export const AgdsDecorator = (Story: React.ElementType) => (
  <AgdsProvider
    linkFactory={({ href, children, ...props }) => (
      <a href={href} {...props}>
        {children}
      </a>
    )}
  >
    <Story />
  </AgdsProvider>
);
