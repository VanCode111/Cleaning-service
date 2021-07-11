const initialState = {
  isAuth: false,
  user: {},
};

const userStore = (state = initialState, action) => {
  switch (action.type) {
    case "SET_IS_AUTH":
      return { ...state, isAuth: action.preload };
    case "SET_USER":
      return { ...state, user: action.preload };
    default:
      return state;
  }
};

export default userStore;
