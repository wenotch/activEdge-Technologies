const initialState = {
  isLoggedIn: false,
  loading: false,
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGGED_IN":
      return {
        ...state,
        isLoggedIn: action.payload,
        loading: false,
      };
    case "LOADING":
      return {
        ...state,
        loading: true,
      };
    case "LOGOUT":
      return { state: initialState };

    default:
      return state;
  }
};
