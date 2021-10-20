import React from 'react';
import cx from 'classnames';
import { forwardRefWithAs } from '@ag.ds/util';

const mapAsToSizeDefault: { [key: string]: SizeType } = {
  h1: 'xxl',
  h2: 'xl',
  h3: 'lg',
  h4: 'md',
  h5: 'sm',
  h6: 'xs',
};

type SizeType = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'xxxl';

type HeadingProps = {
  as: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'xxxl';
  children: React.ReactNode;
  className?: string;
};

export const Heading = forwardRefWithAs<'h1', HeadingProps>(({ as, size, children, className, ...rest }, ref) => {
  const Tag = as;

  if (!size) {
    size = mapAsToSizeDefault[as];
  }

  return (
    <Tag ref={ref} className={cx(`au-display-${size}`, className)} {...rest}>
      {children}
    </Tag>
  );
});
