import React from 'react';
import { forwardRefWithAs } from '@ag.ds/util';

interface TextProps {
  as?: 'p' | 'span' | 'small' | 'em' | 'strong' | 'sup' | 'mark' | 'abbr' | 'var' | 'kbd' | 'ins' | 'pre' | 'code';
  children: React.ReactNode | React.ReactNode[];
}

export const Text = forwardRefWithAs<'span', TextProps>(({ as = 'span', children, ...rest }, ref) => {
  const Tag = as;
  return (
    <Tag ref={ref} {...rest}>
      {children}
    </Tag>
  );
});
