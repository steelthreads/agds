import React from 'react';

export type LinkProps = {
  href: string;
  // eslint-disable-next-line no-undef
  children: JSX.Element | JSX.Element[];
  [key: string]: any;
};

export const Link = ({ href, children, ...rest }: LinkProps) => {
  return <a href={href} {...rest}>{children}</a>
}
