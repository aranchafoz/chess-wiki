import { useNavigate } from "react-router-dom";
import { useGmListViewModel } from "./GmList.viewModel";
import appRoutes from "../../constants/appRoutes";
import { PlayerList, PlayerRow } from "./GmList.styles";
import { PageWrapper } from "../../components/PageWrapper";

export const GmList = () => {
  const navigate = useNavigate();

  const { error, isLoading, list } = useGmListViewModel();

  const handleGmClick = (username: string) => {
    navigate(appRoutes.gmProfile(username));
  };

  return (
    <PageWrapper>
      <h1>Grandmasters list</h1>
      {isLoading && <p>Loading...</p>}
      {error && <p>{"An error has occurred: " + error?.message}</p>}
      {!isLoading && !error && list && (
        <PlayerList>
          {list.map((username, index) => (
            <PlayerRow key={index} onClick={() => handleGmClick(username)}>
              {index}.&nbsp;{username}
            </PlayerRow>
          ))}
        </PlayerList>
      )}
    </PageWrapper>
  );
};
