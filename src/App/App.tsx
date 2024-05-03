import { ThemeProvider } from "styled-components";
import theme from "../constants/theme";
import { Router } from "./Router";
import appRoutes from "../constants/appRoutes";
import { Route } from "react-router-dom";
import { GmList } from "../pages/GmList";
import { GmProfile } from "../pages/GmProfile";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { GlobalStyles } from "./GlobalStyles.styles";

const queryClient = new QueryClient();

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <QueryClientProvider client={queryClient}>
        <Router>
          <Route path={appRoutes.list} element={<GmList />} />
          <Route path={appRoutes.gmProfile()} element={<GmProfile />} />
        </Router>
      </QueryClientProvider>
    </ThemeProvider>
  );
}
