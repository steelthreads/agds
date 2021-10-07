import React from 'react';
import { forwardRefWithAs } from '@ag.ds/utils';

interface TextProps {
  as?: 'p' | 'span' | 'small' | 'em' | 'strong' | 'sup' | 'mark' | 'abbr' | 'var' | 'kbd' | 'ins' | 'pre' | 'code';
  children: React.ReactNode | React.ReactNode[];
}

export const Text = forwardRefWithAs(({ as = 'span', children, ...rest }: TextProps, ref) => {
  const Tag = as;
  return <Tag ref={ref} {...rest}>{children}</Tag>
})
