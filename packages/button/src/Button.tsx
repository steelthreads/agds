import React from 'react';

interface ButtonProps {
  dark?: boolean;
}

export const Button = React.forwardRef(
    ({dark}: React.PropsWithChildren<ButtonProps>, ref) => <button>Hello</button>
);
