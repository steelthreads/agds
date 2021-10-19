/** @jsxRuntime classic */
/** @jsx jsx */

import { css, Global, jsx } from '@emotion/react';
import React from 'react';
import cx from 'classnames';
import { useLink } from '@ag.ds/core';

type LinkListProps = {
  inline?: boolean;
  children: React.ReactElement<typeof LinkListItem> | React.ReactElement<typeof LinkListItem>[];
};

export const LinkList = ({ children, inline = false }: LinkListProps) => (
  <React.Fragment>
    {inline && (
      <Global
        styles={css`
          .au-link-list--inline li {
            margin-right: 1em;
          }
        `}
      />
    )}
    <ul className={cx('au-link-list', inline && 'au-link-list--inline')}>{children}</ul>
  </React.Fragment>
);

type LinkListItemProps = {
  href: string;
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
