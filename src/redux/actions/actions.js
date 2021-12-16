import axios from "axios";
import toast from "react-hot-toast";

//base url
const baseUrl = "https://jsonplaceholder.typicode.com";

// fetchs all artists
export const fetchAllArtist = () => {
  return async (dispatch, getState) => {
    const options = {
      url: baseUrl + "/users",
      method: "GET",
    };

    try {
      const response = await axios(options);
      dispatch({ type: "ARTISTS_LIST", payload: response.data });
    } catch {
      toast.error("Something went wrong");
    }
  };
};

// fetches all tweets
export const fetchAllTweets = () => {
  return async (dispatch, getState) => {
    const options = {
      url: baseUrl + "/comments",
      method: "GET",
    };

    try {
      const response = await axios(options);
      dispatch({ type: "TWEETS", payload: response.data });
    } catch {
      toast.error("Something went wrong");
    }
  };
};

// fetches all albums
export const fetchAllAlbums = () => {
  return async (dispatch, getState) => {
    const options = {
      url: baseUrl + "/albums",
      method: "GET",
    };

    try {
      const response = await axios(options);
      dispatch({ type: "ALL_ALBUM", payload: response.data });
    } catch {
      toast.error("Something went wrong");
    }
  };
};

// create tweet
export const createTweet = (data) => {
  return async (dispatch, getState) => {
    const options = {
      url: baseUrl + "/comments",
      method: "post",
      data: data,
    };

    try {
      const response = await axios(options);
      toast.success("Tweet created");
      dispatch({ type: "NOT_LOADING" });
    } catch {
      toast.error("Something went wrong");
    }
  };
};
