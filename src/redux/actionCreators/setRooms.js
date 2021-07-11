const setRooms = (rooms) => {
  return {
    type: "SET_ROOMS",
    preload: rooms,
  };
};

export default setRooms;
