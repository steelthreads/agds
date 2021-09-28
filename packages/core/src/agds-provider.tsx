import React, { createContext, useContext } from 'react';

export type LinkFactoryType = ({
  href,
  ...props
}: {
  href: string;
  [key: string]: any;
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
  children: React.ReactNode;
  linkFactory: LinkFactoryType;
}

export const AgdsProvider = ({ children, linkFactory }: AgdsProviderProps) => (
  <Context.Provider
    value={{
      linkFactory,
    }}
  >
    {children}
  </Context.Provider>
);
