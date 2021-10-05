import React, { createContext, useContext } from 'react';
import { Global } from '@emotion/react';
import { Link, LinkProps  } from './default-link';

// eslint-disable-next-line no-unused-vars, no-undef
export type LinkFactoryType = (props: LinkProps) => JSX.Element;

type State = {
  linkFactory?: LinkFactoryType;
};

export const Context = createContext<State>({
  linkFactory: () => <></>,
});

export const useLink = (): LinkFactoryType => {
  return useContext(Context).linkFactory;
};

type AgdsProviderProps = {
  linkFactory?: LinkFactoryType;
  PancakeCssImport?: any;
  // eslint-disable-next-line no-undef
  children: JSX.Element | JSX.Element[];
};

export const AgdsProvider = ({ linkFactory = Link, PancakeCssImport, children }: AgdsProviderProps) => {
  return (
    <>
      {PancakeCssImport ? <Global styles={PancakeCssImport} /> : null}
      <Context.Provider value={{ linkFactory }}>
        <div className={'au-body au-grid'}>{children}</div>
      </Context.Provider>
    </>
  );
}
