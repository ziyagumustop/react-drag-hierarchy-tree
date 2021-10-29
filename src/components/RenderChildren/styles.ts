import { css } from "@emotion/react";
import styled from "@emotion/styled";

import { ITreeOptions } from "../interfaces";

export const ChildrenComponent = styled.div<ITreeOptions>`
  position: relative;
  margin: 0;
  padding: 0;
  list-style-type: none;
  transition: all 1s ease-in-out;

  &:before,
  &:after {
    transition: all 0.35s;
  }

  padding-top: 20px;
  display: table;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 50%;
    width: 0;
    height: 20px;
    border-left: 1px solid #000;
  }

  &:after {
    content: "";
    display: table;
    clear: both;
  }

  ${(props) =>
    props.horizontal &&
    css`
      display: table-cell;
      padding-top: 0;
      padding-left: 20px;

      &:before {
        top: 50%;
        left: 0;
        width: 20px;
        height: 0;
        border-left: 0;
        border-top: 1px solid #000;
      }

      &:after {
        display: none;
      }

      & > .org-tree-node {
        display: block;
        padding-left: 20px;
      }
    `}
`;
