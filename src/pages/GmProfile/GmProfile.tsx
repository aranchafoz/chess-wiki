import { useNavigate } from "react-router-dom";
import { useGmProfileViewModel } from "./GmProfile.viewModel";
import appRoutes from "../../constants/appRoutes";

export const GmProfile = () => {
  const navigate = useNavigate();

  const { error, isLoading, profile, timeSinceLastOnline } =
    useGmProfileViewModel();

  const handleGoBack = () => {
    navigate(appRoutes.list);
  };

  if (isLoading) return <p>Loading...</p>;

  if (error) return <p>{"An error has occurred: " + error.message}</p>;

  if (!profile) return <p>Profile not found</p>;

  return (
    <div>
      <button onClick={handleGoBack}>Go to the list</button>
      <p>{profile.name}</p>
      <p>@{profile.username}</p>
      <a href={profile.url}>Chess profile</a>
      <p>
        <img src={profile.avatar} alt={`${profile.name} avatar`} />
      </p>
      <p>Followers: {profile.followers}</p>
      <p>League: {profile.league ?? "-"}</p>
      <p>Online: {timeSinceLastOnline}</p>
      {profile.is_streamer && <p>Streamer</p>}
      {profile.verified && <p>Verified</p>}
    </div>
  );
};
