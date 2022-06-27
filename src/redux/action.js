import axios from "axios";
import action from "./constants";
// import Data fro\

export const requestUsers =
  ({ page, isAddMore }) =>
  async (dispatch) => {
    dispatch({
      type: action.LOAD,
    });
    try {
      const json = await axios({
        url: `/api/CONTENTLISTINGPAGE-PAGE${page}.json`,
        responseType: "json",
        credentials: "include",
        mode: "no-cors",
        headers: {
          Accept: "application/json; odata=verbose",
        },
      });
      dispatch({
        type: action.LOAD_SUCCESS,
        movieData: json.data.page,
        isAddMore,
        isError: false,
      });
    } catch (e) {
      dispatch({
        type: action.LOAD_SUCCESS,
        movieData: [],
        isError: true,
      });
    }
  };
