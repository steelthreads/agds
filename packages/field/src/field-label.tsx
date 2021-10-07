import React from 'react';
import { Text } from '@ag.ds/text';
import { forwardRefWithAs } from '@ag.ds/util';
import { VisuallyHidden } from '@ag.ds/a11y';

type LabelProps = {
  htmlFor: string;
  children: React.ReactText;
  id?: string;
  visible?: boolean;
};

export const Label = forwardRefWithAs<'label', LabelProps>(({ visible = true, children, ...rest }: LabelProps, ref) => {
  const as = 'label';
  if (!visible) {
    return <VisuallyHidden as={as} {...rest} />;
  }
  return (
    <Text ref={ref} as={as} {...rest}>
      {children}
    </Text>
  );
});
