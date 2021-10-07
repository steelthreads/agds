import React from 'react';
import cx from 'classnames';

interface HeadingProps {
  as: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'xxxl';
  children: React.ReactNode;
  className?: string;
}

export const Heading = ({ as, size, children, className }: HeadingProps) => {
  const Tag = as;
  return <Tag className={cx(`au-display-${ size }`, className)}>{children}</Tag>
}
