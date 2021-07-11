const setServices = (services) => {
  return {
    type: "SET_SERVISES",
    preload: services,
  };
};

export default setServices;
