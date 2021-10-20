/** @jsxRuntime classic */
/** @jsx jsx */

import { jsx } from '@emotion/react';
import React from 'react';
import { UserMenuIcon } from './user-menu-icon.svg';

export type UserMenuProps = {
  signIn: () => unknown;
  signOut: () => unknown;
  signedIn?: boolean;
};

export const UserMenu = ({ signIn, signOut, signedIn }: UserMenuProps) => {
  return (
    <div
      css={{
        display: 'flex',
        height: '100%',
        color: '#9EE8FF',
        alignItems: 'center',
        verticalAlign: 'middle',
        textAlign: 'right',
        flexDirection: 'row-reverse',
      }}
    >
      {signedIn === undefined ? null : signedIn ? (
        <React.Fragment>
          <UserMenuIcon />
          <a
            href={''}
            style={{
              fontSize: '1rem',
              lineHeight: '1.5',
              padding: '1rem',
              paddingRight: '0.8rem',
            }}
            onClick={(e) => {
              e.preventDefault();
              signOut();
            }}
          >
            Sign out
          </a>
        </React.Fragment>
      ) : (
        <a
          href={''}
          style={{
            fontSize: '1rem',
            lineHeight: '1.5',
            padding: '1rem',
            paddingRight: '0.8rem',
          }}
          onClick={(e) => {
            e.preventDefault();
            signIn();
          }}
        >
          Sign in
        </a>
      )}
    </div>
  );
};
