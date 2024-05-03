const appRoutes = {
  list: "/",
  gmProfile: (username: string = ":username") => `/${username}`,
};

export default appRoutes;
