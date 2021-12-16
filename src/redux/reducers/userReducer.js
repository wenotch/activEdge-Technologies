const initialState = {
  isLoggedIn: false,
  loading: false,
  allArtists: [],
  allAlbum: [],
  allTweets: [],
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

    case "NOT_LOADING":
      return {
        ...state,
        loading: false,
      };

    case "LOGOUT":
      return initialState;

    case "ARTISTS_LIST":
      return { ...state, allArtists: action.payload };

    case "ALL_ALBUM":
      return { ...state, allAlbum: action.payload };
    case "TWEETS":
      return { ...state, allTweets: action.payload };

    default:
      return state;
  }
};
