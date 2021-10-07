import React from 'react';
import { useLink } from '@ag.ds/core';

interface BreadcrumbItemProps {
  href?: string;
  children: React.ReactNode;
}

export const BreadcrumbItem = ({ href, children }: BreadcrumbItemProps) => {
  const Link = useLink();

  if (!href) {
    return <li>{children}</li>;
  }

  return (
    <li>
      <Link href={href}>{children}</Link>
    </li>
  );
};

interface BreadcrumbProps {
  children: React.ReactElement<typeof BreadcrumbItem> | React.ReactElement<typeof BreadcrumbItem>[];
}

export const Breadcrumb = ({ children }: BreadcrumbProps) => {
  return (
    <nav className="au-breadcrumbs" aria-label="breadcrumb">
      <ul className="au-link-list au-link-list--inline">{children}</ul>
    </nav>
  );
};
