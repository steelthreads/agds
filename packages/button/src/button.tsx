import React from 'react';
import '@gold.au/buttons/lib/css/styles.css';
import cx from 'classnames';

interface ButtonProps {
  dark?: boolean;
  children: React.ReactNode;
}

export const Button = React.forwardRef(
  ({ dark = false, children }: ButtonProps, ref: React.ForwardedRef<HTMLButtonElement>) => {
    return (
      <button ref={ref} className={cx('au-btn', dark && 'au-btn--dark')}>
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
