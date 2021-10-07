import React from 'react';
import cx from 'classnames';
import { forwardRefWithAs } from '@ag.ds/utils';

interface HeadingProps {
  as: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'xxxl';
  children: React.ReactNode;
  className?: string;
}

export const Heading = forwardRefWithAs<'h1', HeadingProps>(({ as, size, children, className, ...rest }, ref) => {
  const Tag = as;
  return <Tag ref={ref} className={cx(`au-display-${ size }`, className)} {...rest}>{children}</Tag>
})
