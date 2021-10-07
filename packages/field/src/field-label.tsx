import React from 'react';
import { Text } from '@ag.ds/text';
import { forwardRefWithAs } from '@ag.ds/util';
import { VisuallyHidden } from '@ag.ds/a11y';
import cx from 'classnames';

type FieldLabelProps = {
  htmlFor: string;
  children: React.ReactText;
  id?: string;
  visible?: boolean;
  className?: string;
};

export const FieldLabel = forwardRefWithAs<'label', FieldLabelProps>(
  ({ visible = true, children, className, ...rest }: FieldLabelProps, ref) => {
    const as = 'label';
    if (!visible) {
      return <VisuallyHidden as={as} {...rest} />;
    }
    return (
      <Text ref={ref} as={as} className={cx('au-label', className)} {...rest}>
        {children}
      </Text>
    );
  }
);
