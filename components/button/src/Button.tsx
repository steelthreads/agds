import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";

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

  ${(props) => {
    // console.log(props.theme);
    return css``;
  }}
`;

export const Button = React.forwardRef(
  ({ dark }: React.PropsWithChildren<ButtonProps>, ref) => (
    <StyledButton dark={dark}>hello</StyledButton>
  )
);
