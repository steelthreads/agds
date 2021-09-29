import React, { createContext, useContext } from 'react';

export type LinkFactoryType = ({
  href,
  ...props
}: {
  href: string;
  [key: string]: string | number;
}) => React.ReactElement;

type State = {
  linkFactory: LinkFactoryType | null;
};

export const Context = createContext<State>({
  linkFactory: null,
});

export const useLink = () => {
  const { linkFactory } = useContext(Context);
  return linkFactory;
};

type AgdsProviderProps = {
  linkFactory: LinkFactoryType;
};

export const AgdsProvider: React.FC<AgdsProviderProps> = ({ children, linkFactory }) => (
  <Context.Provider
    value={{
      linkFactory,
    }}
  >
    <div className={'au-grid'}>{children}</div>
  </Context.Provider>
);
