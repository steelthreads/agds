import React from 'react';
import { forwardRefWithAs } from '@ag.ds/util';

type Props = {
  children?: React.ReactNode;
};

export const VisuallyHidden = forwardRefWithAs<'span', Props>(({ as: Tag = 'span', ...rest }, ref) => {
  return <Tag ref={ref} css={styles} {...rest} />;
});

export const styles = {
  border: 0,
  clip: 'rect(0, 0, 0, 0)',
  height: 1,
  overflow: 'hidden',
  padding: 0,
  position: 'absolute',
  whiteSpace: 'nowrap',
  width: 1,
} as const;
