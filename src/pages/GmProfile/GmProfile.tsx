import { useGmProfileViewModel } from "./GmProfile.viewModel";

export const GmProfile = () => {
  const { profile } = useGmProfileViewModel();

  return <p>{profile.username}</p>;
};
