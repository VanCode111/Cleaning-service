const setUser = (user) => {
  return {
    type: "SET_USER",
    preload: user,
  };
};

export default setUser;
