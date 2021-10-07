import React, { forwardRef } from 'react';
import { useLink } from '@ag.ds/core';

interface LinkProps {
  href: string;
  children: React.ReactNode;
}

// eslint-disable-next-line react/display-name,react/prop-types
export const Link = forwardRef<any, LinkProps>(({ href, children, ...rest }, ref) => {
  const _Link = useLink();
  // @ts-ignore
  return <_Link ref={ref} href={href} {...rest}>{children}</_Link>;
})
