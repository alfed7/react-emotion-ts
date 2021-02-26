import React from "react";
import { css } from "@emotion/css";

//import styled from '@emotion/styled'

// const Button = styled.button`
//   padding: 32px;
//   background-color: hotpink;
//   font-size: 24px;
//   border-radius: 4px;
//   color: black;
//   font-weight: bold;
//   &:hover {
//     color: white;
//   }
// `

export interface ButtonProps {
  children: React.ReactNode;
  /**
   * What text color to use
   */
  color?: string;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({ color, children }) => (
  <button
    className={css`
      padding: 1em;
      background-color: hotpink;
      font-size: 1.2em;
      border: 0;
      border-radius: 5%;
      &:hover {
        color: ${color || "#ccc"};
      }
    `}
  >
    {children}
  </button>
);
export default Button;
