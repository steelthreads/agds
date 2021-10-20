import React, { createContext, useContext } from 'react';
import { Link, LinkFactoryType } from './default-link';

import PancakeCss from './__generated__/pancake-css';

type State = {
  linkFactory?: LinkFactoryType;
};

export const Context = createContext<State>({
  linkFactory: Link,
});

type AgdsProviderProps = {
  linkFactory?: LinkFactoryType;
  children: React.ReactNode;
};

export const AgdsProvider = ({ linkFactory, children }: AgdsProviderProps) => {
  return (
    <>
      <PancakeCss />
      <Context.Provider value={{ linkFactory }}>
        <div className={'au-body au-grid'}>{children}</div>
      </Context.Provider>
    </>
  );
};

export const useLink = (): LinkFactoryType | undefined => {
  return useContext(Context).linkFactory;
};
