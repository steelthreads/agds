import React from 'react';
import { FieldLabel, FieldHint, FieldError } from '.';

type FieldRenderProps = {};

export type FieldProps = {
  id?: string;
  invalidMsg?: string;
  description?: string;
  labelVisible?: boolean;
  label: string;
};

export type Props = FieldProps & {
  // eslint-disable-next-line no-unused-vars
  children: (fieldArgs: FieldRenderProps) => React.ReactNode;
};

export const Field = ({ id, children, description, invalidMsg, labelVisible = true, label }: Props) => {
  const hintId = `${id}-hint`;
  const errorId = `${id}-error-text`;
  return (
    <div className="au-form-group">
      {labelVisible && <FieldLabel htmlFor={id}>{label}</FieldLabel>}
      {description && <FieldHint id={hintId}>{description}</FieldHint>}
      {invalidMsg && <FieldError id={errorId}>{invalidMsg}</FieldError>}
      {children({
        id,
        'aria-describedBy': hintId,
      })}
    </div>
  );
};
