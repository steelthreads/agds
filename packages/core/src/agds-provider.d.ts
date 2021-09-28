import React from 'react';
export declare type LinkFactoryType = ({ href, ...props }: {
    href: string;
    [key: string]: string | number;
}) => React.ReactElement;
declare type State = {
    linkFactory: LinkFactoryType | null;
};
export declare const Context: React.Context<State>;
export declare const useLink: () => LinkFactoryType | null;
declare type AgdsProviderProps = {
    linkFactory: LinkFactoryType;
};
export declare const AgdsProvider: React.FC<AgdsProviderProps>;
export {};
