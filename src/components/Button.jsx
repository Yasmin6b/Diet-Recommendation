import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  color: black;
  font-size: 20px;
  font-weight: 700;
  padding: 14px 28px;
  border-radius: 999px;
  border: none;
  display: inline-block;
  margin: 30px 10px;
  cursor: pointer;
  background-color: ${(props) =>
    props.variant === "primary"
      ?  "rgb(32, 200, 161)"
      : props.variant === "secondary"
      ? "transparent"
      : "#333"};

  &:hover {
    opacity: 0.8;
  }
`;

const Button = ({ children, variant = "primary" }) => {
  return (
    <StyledButton variant={variant} >
      {children}
    </StyledButton>
  );
};

export default Button;
