/** @jsxRuntime classic */
/** @jsx jsx */

import { css, Global, jsx, CSSObject } from '@emotion/react';
import React from 'react';
import cx from 'classnames';
import { useLink } from '@ag.ds/core';

type LinkListProps = {
  inline?: boolean;
  children: React.ReactElement<typeof LinkListItem> | React.ReactElement<typeof LinkListItem>[];
  style?: CSSObject;
};

export const LinkList = ({ children, inline = false, style }: LinkListProps) => (
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
    <ul className={cx('au-link-list', inline && 'au-link-list--inline')} css={style}>
      {children}
    </ul>
  </React.Fragment>
);

type LinkListItemProps = {
  href: string;
  children: React.ReactNode;
  active?: boolean;
};

export const LinkListItem = ({ href, children, active = false }: LinkListItemProps) => {
  const Link = useLink();
  return (
    <li className={cx(active ? 'active' : '')}>
      <Link href={href}>{children}</Link>
    </li>
  );
};
