import React from 'react';

interface TextProps {
  as?: 'p' | 'span' | 'small' | 'em' | 'strong' | 'sup' | 'mark' | 'abbr' | 'var' | 'kbd' | 'ins' | 'pre' | 'code';
  children: React.ReactNode | React.ReactNode[];
}

export const Text = ({ as = 'span', children, ...rest }: TextProps) => {
  const Tag = as;
  return <Tag {...rest}>{children}</Tag>
}
