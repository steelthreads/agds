import React from 'react';
import cx from 'classnames';
import { useLink } from '@ag.ds/core';

type LinkListProps = {
  inline?: boolean;
  children: React.ReactElement<typeof LinkListItem> | React.ReactElement<typeof LinkListItem>[];
};

export const LinkList = ({ children, inline = false }: LinkListProps) => (
  <ul className={cx('au-link-list', inline && 'au-link-list--inline')}>{children}</ul>
);

type LinkListItemProps = {
  href?: string;
  children: React.ReactNode;
};

export const LinkListItem = ({ href, children }: LinkListItemProps) => {
  const Link = useLink();
  return (
    <li>
      <Link href={href}>{children}</Link>
    </li>
  );
};
