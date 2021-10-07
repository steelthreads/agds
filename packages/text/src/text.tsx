import React from 'react';
import { forwardRefWithAs } from '@ag.ds/util';

interface TextProps {
  as?:
    | 'p'
    | 'span'
    | 'small'
    | 'em'
    | 'strong'
    | 'sup'
    | 'mark'
    | 'abbr'
    | 'var'
    | 'kbd'
    | 'ins'
    | 'pre'
    | 'code'
    | 'label';
  children: React.ReactNode | React.ReactNode[];
}

export const Text = forwardRefWithAs<'span', TextProps>(({ as: Tag = 'span', children, ...rest }: TextProps, ref) => {
  return (
    <Tag ref={ref} {...rest}>
      {children}
    </Tag>
  );
});
