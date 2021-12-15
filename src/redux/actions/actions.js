import axios from "axios";
import toast from "react-hot-toast";

//base url
const baseUrl = "https://jsonplaceholder.typicode.com";

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
