const initialState = {
  isAuth: false,
};

const userStore = (state = initialState, action) => {
  switch (action.type) {
    case "SET_IS_AUTH":
      return { ...state, isAuth: action.preload };
    default:
      return state;
  }
};

export default userStore;
