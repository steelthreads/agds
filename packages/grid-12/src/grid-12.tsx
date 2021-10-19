import { CSSObject } from '@emotion/react';
import React from 'react';

type ContainerProps = {
  fluid?: boolean;
  children: React.ReactElement<typeof Row> | React.ReactElement<typeof Row>[];
  style?: CSSObject;
};

export const Container = ({ children, fluid = false, style }: ContainerProps) => (
  <div className={fluid ? 'container-fluid' : 'container'} css={style}>
    {children}
  </div>
);

type RowProps = {
  children: React.ReactElement<typeof Column> | React.ReactElement<typeof Column>[];
};

export const Row = ({ children }: RowProps) => <div className="row">{children}</div>;

type ColumnProps = {
  className: string;
  children: React.ReactNode | React.ReactNode[];
};

export const Column = ({ children, className }: ColumnProps) => {
  return <div className={className}>{children}</div>;
};
