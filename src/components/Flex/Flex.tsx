import styled, { css, DefaultTheme } from "styled-components";

type JustifyContentType =
  | "flex-start"
  | "flex-end"
  | "center"
  | "space-between"
  | "space-around"
  | "stretch";

export type AlignItemsType =
  | "baseline"
  | "flex-start"
  | "flex-end"
  | "center"
  | "self-start"
  | "space-between"
  | "space-around"
  | "stretch";

export type GapType = [number | null, number | null];

type GrowType = number;

export interface FlexTypes {
  alignItems?: AlignItemsType;
  column?: boolean;
  columnReverse?: boolean;
  gap?: GapType;
  grow?: GrowType;
  inline?: boolean;
  justifyContent?: JustifyContentType;
  rowReverse?: boolean;
  shrink?: number;
  $wrap?: boolean; // prefixed with "$" to avoid passing this down to the DOM (https://styled-components.com/docs/api#transient-props)
}

interface FlexItemTypes {
  grow?: GrowType;
  shrink?: number;
  alignSelf?: AlignItemsType;
}

const getGap = ({ gap, theme }: { theme: DefaultTheme; gap?: GapType }) => {
  if (!gap) return "";
  let cssGap = "gap:";

  if (gap[0] && gap[0] > -1) {
    cssGap = `${cssGap} ${theme.spaces[gap[0]]}px`;
  } else {
    cssGap = `${cssGap} 0`;
  }

  if (gap[1] && gap[1] > -1) {
    cssGap = `${cssGap} ${theme.spaces[gap[1]]}px`;
  }

  return cssGap;
};

export const flexStyles = css<FlexTypes>`
  display: ${({ inline }) => (inline ? "inline-flex" : "flex")};
  ${({ column }) => column && "flex-direction: column;"}
  ${({ columnReverse }) => columnReverse && "flex-direction: column-reverse;"}
  ${({ rowReverse }) => rowReverse && "flex-direction: row-reverse;"}
  ${({ justifyContent }) =>
    justifyContent && `justify-content: ${justifyContent};`}
  ${({ alignItems }) => alignItems && `align-items: ${alignItems};`}
  ${({ $wrap }) => $wrap && `flex-wrap: wrap;`}
  ${({ grow }) => grow && `flex-grow: ${grow};`}
  ${({ shrink }) => shrink && `flex-shrink: ${shrink};`}
  ${({ gap, theme }) => getGap({ gap, theme })}
`;

export const Flex = styled.div<FlexTypes>`
  ${flexStyles}
`;

export const FlexItem = styled.div<FlexItemTypes>`
  ${({ alignSelf }) => alignSelf && `align-self: ${alignSelf};`}
  ${({ grow }) => grow && `flex: ${grow};`}
  ${({ shrink }) => shrink && `flex-shrink: ${shrink};`}
`;
