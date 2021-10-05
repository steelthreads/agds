import React, { createContext, useContext } from 'react';
import { Global } from '@emotion/react';

type LinkProps = {
  href: string;
  [key: string]: any;
};

// eslint-disable-next-line no-unused-vars, no-undef
export type LinkFactoryType = ({ href, ...props }: LinkProps) => JSX.Element;

type State = {
  linkFactory: LinkFactoryType;
};

export const Context = createContext<State>({
  linkFactory: () => <></>,
});

export const useLink = (): LinkFactoryType => {
  return useContext(Context).linkFactory;
};

type AgdsProviderProps = {
  // eslint-disable-next-line no-undef
  children: JSX.Element | JSX.Element[];
  linkFactory: LinkFactoryType;
};

export const AgdsProvider = ({ children, linkFactory }: AgdsProviderProps) => (
  <>
    <Global styles={require('../../../pancake/css/pancake.min.css')} />
    <Context.Provider value={{ linkFactory }}>
      <div className={'au-body au-grid'}>{children}</div>
    </Context.Provider>
  </>
);
