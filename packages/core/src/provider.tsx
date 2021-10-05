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
  linkFactory: LinkFactoryType;
  pathToPancakeMinCss?: string;
  // eslint-disable-next-line no-undef
  children: JSX.Element | JSX.Element[];
};

export const AgdsProvider = ({ children, linkFactory = Link, pathToPancakeMinCss = './__generated__/pancake.min.css' }: AgdsProviderProps) => {
  return (
    <>
      <Global styles={require(pathToPancakeMinCss)} />
      <Context.Provider value={{ linkFactory }}>
        <div className={'au-body au-grid'}>{children}</div>
      </Context.Provider>
    </>
  );
}
