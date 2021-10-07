import React from 'react';
import { FieldLabel, FieldHint, FieldError } from '.';

type FieldRenderProps = {};

export type FieldProps = {
  id?: string;
  // eslint-disable-next-line no-unused-vars
  children: (args: FieldRenderProps) => React.ReactNode;
  invalidMsg?: string;
  description?: string;
  labelVisible?: boolean;
};

export const Field = ({ id, children, description, invalidMsg, labelVisible = true }: FieldProps) => {
  const hintId = `${id}-hint`;
  const errorId = `${id}-error-text`;
  return (
    <div className="au-form-group">
      {labelVisible && <FieldLabel htmlFor={id}>Email</FieldLabel>}
      {description && <FieldHint id={hintId}>{description}</FieldHint>}
      {invalidMsg && <FieldError id={errorId}>{invalidMsg}</FieldError>}
      {children({
        id,
        'aria-describedBy': hintId,
      })}
    </div>
  );
};
