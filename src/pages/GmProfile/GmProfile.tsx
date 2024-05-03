import { useNavigate } from "react-router-dom";
import { useGmProfileViewModel } from "./GmProfile.viewModel";
import appRoutes from "../../constants/appRoutes";
import {
  BackButton,
  ChessProfileLink,
  ProfileName,
  ProfileUsername,
  ProfileAvatar,
  ProfileCard,
  ProfileLabel,
  SmallIcon,
} from "./GmProfile.styles";
import { Flex } from "../../components/Flex";
import { PageWrapper } from "../../components/PageWrapper";
import { Spacer } from "../../components/Spacer";
import { useMediaQueries } from "../../hooks/useMediaQueries";

const chessImg =
  "https://www.chess.com/bundles/web/favicons/favicon.5d6cb047.svg";
const verifiedImg =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Twitter_Verified_Badge.svg/2048px-Twitter_Verified_Badge.svg.png";
const emptyAvatarImg =
  "https://www.shutterstock.com/image-vector/blank-avatar-photo-place-holder-600nw-1114445501.jpg";

export const GmProfile = () => {
  const navigate = useNavigate();
  const { isBelow } = useMediaQueries();

  const { error, isLoading, profile, timeSinceLastOnline } =
    useGmProfileViewModel();

  const handleGoBack = () => {
    navigate(appRoutes.list);
  };

  if (isLoading) return <p>Loading...</p>;

  if (error) return <p>{"An error has occurred: " + error.message}</p>;

  if (!profile) return <p>Profile not found</p>;

  return (
    <PageWrapper gap={[6, 6]}>
      <Spacer top={6} />
      <Flex justifyContent="flex-start">
        <BackButton onClick={handleGoBack}>{"<"} Back to the list</BackButton>
      </Flex>
      <ProfileCard>
        <Flex
          column={isBelow.sm}
          alignItems={isBelow.sm ? "center" : "flex-start"}
          gap={[3, 3]}
        >
          <ProfileAvatar
            src={profile.avatar ?? emptyAvatarImg}
            alt={`${profile.name} avatar`}
          />
          <Flex column gap={[4, 4]}>
            <Flex
              column={isBelow.sm}
              alignItems={isBelow.sm ? "flex-start" : "center"}
              gap={[3, 3]}
            >
              {profile.name && <ProfileName>{profile.name}</ProfileName>}
              <Flex alignItems="center" gap={[3, 3]}>
                <ProfileUsername>@{profile.username}</ProfileUsername>
                {profile.verified && (
                  <SmallIcon src={verifiedImg} alt="Verified profile" />
                )}
                <ChessProfileLink href={profile.url}>
                  <SmallIcon src={chessImg} alt="Chess.com profile" />
                </ChessProfileLink>
              </Flex>
            </Flex>
            <Flex
              column={isBelow.sm}
              alignItems={isBelow.sm ? "flex-start" : "center"}
              gap={[3, 3]}
            >
              <Flex gap={[2, 2]}>
                <ProfileLabel>Followers:</ProfileLabel> {profile.followers}
              </Flex>
              <Flex gap={[2, 2]}>
                <ProfileLabel>League:</ProfileLabel> {profile.league ?? "-"}
              </Flex>
            </Flex>
            <Flex alignItems="center" gap={[3, 3]}>
              <Flex gap={[2, 2]}>
                <ProfileLabel>Time since last online:</ProfileLabel>{" "}
                {timeSinceLastOnline}
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </ProfileCard>
    </PageWrapper>
  );
};
