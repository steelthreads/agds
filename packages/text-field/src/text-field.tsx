import React, { forwardRef } from 'react';
import { TextInput, TextInputProps } from '.';
import { Field, FieldProps } from '@ag.ds/field';

type TextFieldProps = FieldProps &
  Omit<TextInputProps, 'onChange'> & {
    // eslint-disable-next-line no-unused-vars
    onChange: (v: string) => any;
  };

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  ({ id, label, onChange, ...rest }: TextFieldProps, ref) => {
    return (
      <Field id={id} label={label}>
        {({ fieldArgs }) => <TextInput ref={ref} {...rest} onChange={(e) => onChange(e.target.value)} {...fieldArgs} />}
      </Field>
    );
  }
);

TextField.displayName = 'TextField';
