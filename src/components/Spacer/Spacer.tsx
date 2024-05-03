import React from "react";
import styled, { css } from "styled-components";
import theme from "../../constants/theme";

export interface SpacerProps {
  className?: string;
  /** margin-top space index */
  top?: number;
  /** margin-bottom space index */
  bottom?: number;
  /** margin-left space index */
  left?: number;
  /** margin-right space index */
  right?: number;
  /** display: inline-block */
  inline?: boolean;
}

type MarginDirection = "top" | "bottom" | "left" | "right";

const getMarginValue = (direction: MarginDirection, value?: number) => {
  if (value === undefined) return;

  const sign = value < 0 ? "-" : "";
  const spacesIndex: number = Math.abs(value);
  return css`
    margin-${direction}: ${sign}${theme.spaces[spacesIndex]}px;
  `;
};

const Space = styled.div<SpacerProps>`
  ${({ top }) => getMarginValue("top", top)};
  ${({ bottom }) => getMarginValue("bottom", bottom)};
  ${({ left }) => getMarginValue("left", left)};
  ${({ right }) => getMarginValue("right", right)};
  display: ${({ inline }) => (inline ? "inline-block" : "block")};
`;

export const Spacer = ({
  children,
  ...rest
}: React.PropsWithChildren<SpacerProps>) => {
  return <Space {...rest}>{children}</Space>;
};
