import React from 'react';

interface ContainerProps {
  fluid?: boolean;
  children: React.ReactElement<typeof Row> | React.ReactElement<typeof Row>[];
}

export const Container = ({ children, fluid = false }: ContainerProps) => (
  <div className={fluid ? 'container-fluid' : 'container'}>{children}</div>
)

interface RowProps {
  children: React.ReactElement<typeof Column> | React.ReactElement<typeof Column>[];
}

export const Row = ({ children }: RowProps) => (
  <div className="row">{children}</div>
)

interface ColumnProps {
  className: string;
  children: React.ReactNode | React.ReactNode[];
}

export const Column = ({ children, className }: ColumnProps) => {
  return (
    <div className={className}>{children}</div>
  );
}
