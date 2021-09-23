import React from "react";
import styled from "styled-components";

interface ButtonProps {
  dark?: boolean;
}

const StyledButton = styled.button<ButtonProps>`
  background: red;
  color: #fff;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 300;
  padding: 9px 36px;
`;

export const Button = React.forwardRef(
  ({ dark }: React.PropsWithChildren<ButtonProps>, ref) => (
    <StyledButton dark={dark}></StyledButton>
  )
);
