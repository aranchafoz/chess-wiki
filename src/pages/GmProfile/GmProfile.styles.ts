import { styled } from "styled-components";
import theme from "../../constants/theme";

const AVATAR_SIZE = "80px";

export const ProfileAvatar = styled.img`
  width: ${AVATAR_SIZE};
  height: ${AVATAR_SIZE};
  border-radius: ${theme.borderRadii[2]}px;
`;

export const ProfileCard = styled.div`
  padding: ${theme.spaces[4]}px;
  border: 1px solid ${theme.colors.grey200};
  border-radius: ${theme.borderRadii[2]}px;
`;

export const ProfileLabel = styled.label`
  color: ${theme.colors.grey600};
`;

export const ProfileName = styled.span`
  color: ${theme.colors.grey900};
  font-weight: ${theme.fontWeights[1]};
`;

export const ProfileUsername = styled.span`
  color: ${theme.colors.blue600};
  font-weight: ${theme.fontWeights[1]};
`;

const ICON_SIZE = "16px";

export const SmallIcon = styled.img`
  width: ${ICON_SIZE};
  height: ${ICON_SIZE};
`;

export const ChessProfileLink = styled.a`
  display: flex;
`;

export const BackButton = styled.button`
  padding: ${theme.spaces[1]}px ${theme.spaces[2]}px;
  color: ${theme.colors.grey900};
  border: 1px solid ${theme.colors.grey200};
  border-radius: ${theme.borderRadii[0]}px;
  cursor: pointer;
`;
