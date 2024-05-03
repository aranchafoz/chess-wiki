import { styled } from "styled-components";
import theme from "../../constants/theme";

export const PlayerList = styled.ol`
  display: flex;
  flex-direction: column;
  gap: ${theme.spaces[2]}px;
  margin: 0;
  padding: 0;

  width: 300px;
`;

export const PlayerRow = styled.li`
  padding: ${theme.spaces[2]}px ${theme.spaces[4]}px;
  border: 1px solid ${theme.colors.grey200};
  border-radius: ${theme.borderRadii[1]}px;
  cursor: pointer;

  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;

  &:hover {
    background-color: ${theme.colors.grey100};
  }
`;
