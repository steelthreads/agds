import React from 'react';

export interface LinkProps {
  href: string;
  children: React.ReactNode;
  [key: string]: any;
}

// eslint-disable-next-line react/display-name
export const Link = ({ href, children, ...rest }: LinkProps) => {
  return (
    <a href={href} {...rest}>
      {children}
    </a>
  );
};
