import React, { createContext, useContext } from 'react';

type LinkProps = {
  href: string;
  [key: string]: any;
};

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
  children: JSX.Element | JSX.Element[];
  linkFactory: LinkFactoryType;
};

export const AgdsProvider = ({ children, linkFactory }: AgdsProviderProps) => (
  <Context.Provider value={{ linkFactory }}>
    <div className={'au-grid'}>{children}</div>
  </Context.Provider>
);
