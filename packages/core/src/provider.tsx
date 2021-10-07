import React, { createContext, useContext } from 'react';
import { Link, LinkProps } from './default-link';

import PancakeCss from './__generated__/pancake-css';

// eslint-disable-next-line no-unused-vars, no-undef
export type LinkFactoryType = (props: LinkProps) => JSX.Element;

type State = {
  linkFactory?: LinkFactoryType;
};

export const Context = createContext<State>({
  linkFactory: Link,
});

export const useLink = (): LinkFactoryType => {
  return useContext(Context).linkFactory;
};

interface AgdsProviderProps {
  linkFactory?: LinkFactoryType;
  children: React.ReactNode;
};

export const AgdsProvider = ({ linkFactory = Link, children }: AgdsProviderProps) => {
  return (
    <>
      <PancakeCss />
      <Context.Provider value={{ linkFactory }}>
        <div className={'au-body au-grid'}>{children}</div>
      </Context.Provider>
    </>
  );
}
