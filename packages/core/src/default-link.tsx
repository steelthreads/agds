import React from 'react';

// eslint-disable-next-line no-unused-vars
export type LinkFactoryType = (p: LinkProps) => JSX.Element;

export type LinkProps = {
  href: string;
  children: React.ReactNode;
  [key: string]: any;
};

export const Link = ({ href, children, ...rest }: LinkProps) => {
  return (
    <a href={href} {...rest}>
      {children}
    </a>
  );
};

Link.displayName = 'Link';
