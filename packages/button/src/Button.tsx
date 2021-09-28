import React from 'react';
import '@gold.au/buttons/lib/css/styles.css';

interface ButtonProps {
  dark?: boolean;
}

export const Button = ({ dark }: ButtonProps) => <button className={'au-btn'}>Hello</button>;
