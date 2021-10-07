import React from 'react';
import { Text } from '@ag.ds/text';
import { forwardRefWithAs } from '@ag.ds/util';
import cx from 'classnames';

type FieldErrorProps = {
  id?: string;
  className?: string;
  children: React.ReactText;
};

export const FieldError = forwardRefWithAs<'span', FieldErrorProps>(
  ({ id, className, children, ...rest }: FieldErrorProps, ref) => (
    <Text {...rest} ref={ref} as={'span'} className={cx('au-error-text', className)} id={id}>
      {children}
    </Text>
  )
);
