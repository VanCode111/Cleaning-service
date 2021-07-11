const initialState = {
  services: [],
  rooms: [],
};

const cleaning = (state = initialState, action) => {
  switch (action.type) {
    case "SET_SERVISES":
      return { ...state, services: action.preload };
    case "SET_ROOMS":
      return { ...state, rooms: action.preload };
    default:
      return state;
  }
};

export default cleaning;
