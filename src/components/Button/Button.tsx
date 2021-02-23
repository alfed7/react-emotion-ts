import React from "react";
import { css, cx } from "@emotion/css";

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

export interface Props {
  children: React.ReactNode;
  color?: string;
}

const Button: React.FC<Props> = ({ color, children }) => (
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