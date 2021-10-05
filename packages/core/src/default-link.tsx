import React from 'react';

export type LinkProps = {
  href: string;
  children: any; // TODO
  [key: string]: any;
};

export const Link = ({ href, children, ...rest }: LinkProps) => {
  return <a href={href} {...rest}>{children}</a>
}
