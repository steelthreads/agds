/** @jsxRuntime classic */
/** @jsx jsx */

import { jsx } from '@emotion/react';
import React from 'react';
import { UserMenuIcon } from './user-menu-icon.svg';
import { Text } from '@ag.ds/text';

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
      }}
    >
      {signedIn === undefined ? null : signedIn ? (
        <React.Fragment>
          <Text
            as={'span'}
            style={{ flex: 1, fontSize: '1rem', lineHeight: '1.5', padding: '1rem', paddingRight: '0.8rem' }}
            onClick={signOut}
          >
            Sign out
          </Text>
          <UserMenuIcon />
        </React.Fragment>
      ) : (
        <Text
          as={'span'}
          style={{ flex: 1, fontSize: '1rem', lineHeight: '1.5', padding: '1rem', paddingRight: '0.8rem' }}
          onClick={signIn}
        >
          Sign in
        </Text>
      )}
    </div>
  );
};
