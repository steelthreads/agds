import React from 'react';
import { AgdsProvider } from '@ag.ds/core';

export const AgdsDecorator = (Story: React.ElementType) => (
  <AgdsProvider
    PancakeCssImport={require('../../../pancake/css/pancake.min.css')}
    linkFactory={({ href, children, ...props }) => (
      <a href={href} {...props}>
        {children}
      </a>
    )}
  >
    <Story />
  </AgdsProvider>
);
