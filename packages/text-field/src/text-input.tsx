import React, { forwardRef } from 'react';
import cx from 'classnames';

type TypeTypes = 'email' | 'number' | 'password' | 'search' | 'tel' | 'text' | 'url';

type StatusTypes = 'valid' | 'invalid';

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

interface TextInputProps {
  type?: TypeTypes;
  name: string;
  id: string;
  value: string;
  block?: boolean;
  status?: StatusTypes;
  disabled?: boolean;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  onChange: InputProps['onChange'];
}

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  ({ type = 'text', name, id, value, block, status, disabled, size, onChange, ...rest }: TextInputProps, ref) => {
    let statusClassname;
    if (status === 'valid') {
      statusClassname = 'au-text-input--valid';
    } else if (status === 'invalid') {
      statusClassname = 'au-text-input--invalid';
    }
    return (
      <input
        {...rest}
        ref={ref}
        type={type}
        name={name}
        id={id}
        value={value}
        className={cx(
          'au-text-input',
          block && 'au-text-input--block',
          statusClassname,
          size && `au-text-input--width-${size}`
        )}
        aria-invalid={status === 'invalid'}
        disabled={disabled}
        onChange={onChange}
      />
    );
  }
);

TextInput.displayName = 'TextInput';
