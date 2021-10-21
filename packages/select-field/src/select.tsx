import React, { forwardRef } from 'react';
import cx from 'classnames';

type OptionType = {
  children: React.ReactText;
  value: string;
};

export const Option = ({ children, value }: OptionType) => <option value={value}>{children}</option>;

type SelectProps = {
  id: string;
  onChange: React.SelectHTMLAttributes<HTMLSelectElement>['onChange'];
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  block?: boolean;
  children: React.ReactElement<typeof Option> | React.ReactElement<typeof Option>[];
  placeholder?: string;
  value: string;
};

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ children, id, onChange, size, block, placeholder, value, ...rest }: SelectProps, ref) => (
    <select
      {...rest}
      id={id}
      className={cx('au-select', size && `au-text-input--width-${size}`, block && 'au-text-input--block')}
      ref={ref}
      onChange={onChange}
      value={value}
    >
      {placeholder && <Option value="">{placeholder}</Option>}
      {children}
    </select>
  )
);

Select.displayName = 'Select';
