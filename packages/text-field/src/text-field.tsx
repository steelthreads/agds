import React, { forwardRef } from 'react';
import { TextInput, TextInputProps } from '.';
import { Field, FieldProps } from '@ag.ds/field';

type TextFieldProps = FieldProps &
  Omit<TextInputProps, 'onChange'> & {
    // eslint-disable-next-line no-unused-vars
    onChange: (v: string) => any;
  };

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  ({ id, label, onChange, invalidMsg, description, labelVisible, ...rest }: TextFieldProps, ref) => {
    return (
      <Field id={id} label={label} invalidMsg={invalidMsg} description={description} labelVisible={labelVisible}>
        {({ fieldArgs }) => (
          <TextInput ref={ref} {...rest} onChange={(e) => onChange(e.target.value)} {...fieldArgs} {...rest} />
        )}
      </Field>
    );
  }
);

TextField.displayName = 'TextField';
