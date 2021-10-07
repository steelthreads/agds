import React from 'react';
import { useLink } from '@ag.ds/core';

interface BreadcrumbsItemProps {
  href?: string;
  children: React.ReactNode;
}

export const BreadcrumbsItem = ({ href, children }: BreadcrumbsItemProps) => {
  const Link = useLink();

  if (!href) {
    return <li>{children}</li>;
  }

  return <li><Link href={href}>{children}</Link></li>;
}

interface BreadcrumbsProps {
  children: React.ReactElement<typeof BreadcrumbsItem> | React.ReactElement<typeof BreadcrumbsItem>[];
}

export const Breadcrumbs = ({ children }: BreadcrumbsProps) => {
  return (
    <nav className="au-breadcrumbs" aria-label="breadcrumb">
      <ul className="au-link-list au-link-list--inline">
        {children}
      </ul>
    </nav>
  )
}
