import React from 'react';

type AlertProps = {
  variant?: 'info' | 'warning' | 'success' | 'error';
  children: React.ReactElement | React.ReactElement[];
};

export const Alert = ({ variant = 'info', children }: AlertProps) => {
  return <div className={`au-page-alerts au-page-alerts--${variant}`}>{children}</div>;
};
