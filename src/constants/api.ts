const api = {
  gmList: "/titled/GM",
  gmProfile: (username: string) => `/player/${username}`,
};

export default api;
