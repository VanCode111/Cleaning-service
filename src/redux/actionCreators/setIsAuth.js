const setIsAuth = (isAuth) => {
  return {
    type: "SET_IS_AUTH",
    preload: isAuth,
  };
};

export default setIsAuth;
