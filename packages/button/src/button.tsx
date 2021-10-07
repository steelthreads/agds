import React, { forwardRef } from 'react';
import cx from 'classnames';

const mapColorSchemeToClassname = {
  'light': '',
  'dark': 'au-btn--dark',
};

const mapVariantToClassname = {
  'primary': '',
  'secondary': 'au-btn--secondary',
  'tertiary': 'au-btn--tertiary',
};

interface ButtonProps {
  children: React.ReactNode;
  colorScheme?: 'light' | 'dark';
  variant?: 'primary' | 'secondary' | 'tertiary';
  disabled?: boolean;
  onClick?: () => any;
  block?: boolean;
}

// eslint-disable-next-line react/display-name
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(({ children, colorScheme = 'light', variant = 'primary', disabled = false, onClick, block = false }: ButtonProps, ref) => {
  return (
    <button ref={ref} className={cx('au-btn', mapColorSchemeToClassname[colorScheme], mapVariantToClassname[variant], block && 'au-btn--block')}
            disabled={disabled} onClick={disabled ? () => null : onClick}>
      {children}
    </button>
  );
});
