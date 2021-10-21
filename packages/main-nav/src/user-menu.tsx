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

const linkStyles = {
  fontSize: '1rem',
  lineHeight: '1.5',
  padding: '1rem',
  paddingRight: '0.8rem',
};

export const UserMenu = ({ signIn, signOut, signedIn }: UserMenuProps) => {
  return (
    <div css={{ float: 'right', display: 'inline-block' }}>
      {signedIn === undefined ? null : signedIn ? (
        <div css={{ display: 'flex', alignItems: 'center', verticalAlign: 'middle' }}>
          <div>
            <a
              href={''}
              style={linkStyles}
              onClick={(e) => {
                e.preventDefault();
                signOut();
              }}
            >
              Sign out
            </a>
          </div>
          <div>
            <UserMenuIcon />
          </div>
        </div>
      ) : (
        <a
          href={''}
          style={linkStyles}
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
