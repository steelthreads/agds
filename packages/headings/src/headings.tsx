import React from 'react';
import cx from 'classnames';

interface HeadingProps {
  level: '1' | '2' | '3' | '4' | '5' | '6';
  size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'xxxl';
  children: React.ReactNode;
  className?: string;
}

export const Heading = ({ level, size, children, className }: HeadingProps) => {
  const HeadingTag = `h${ level }` as const;
  return <HeadingTag className={cx(`au-display-${ size }`, className)}>{children}</HeadingTag>
}
