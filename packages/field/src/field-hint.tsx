import React from 'react';
import { Text } from '@ag.ds/text';
import { forwardRefWithAs } from '@ag.ds/util';
import cx from 'classnames';

type FieldHintProps = {
  id?: string;
  className?: string;
  children: React.ReactText;
};

export const FieldHint = forwardRefWithAs<'span', FieldHintProps>(
  ({ id, className, children, ...rest }: FieldHintProps, ref) => (
    <Text {...rest} ref={ref} as={'span'} className={cx('au-hint-text', className)} id={id}>
      {children}
    </Text>
  )
);
