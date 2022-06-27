import action from "./constants";

const initalState = {
  movieData: [],
  isLoading: false,
  isError: false,
};

const reducer = (state = initalState, payload) => {
  switch (payload.type) {
    case action.LOAD:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case action.LOAD_SUCCESS:
      if (payload.isAddMore) {
        const copyPayload = { ...payload.movieData };
        delete payload.movieData["content-items"];
        console.log("!!@@@@--apib-", {
          ...state.movieData["content-items"].content,
          ...copyPayload["content-items"].content,
        });
        return {
          ...state,
          movieData: {
            ...state.movieData,
            ...payload.movieData,
            "content-items": {
              ...state.movieData["content-items"],
              content: [
                ...state.movieData["content-items"].content,
                ...copyPayload["content-items"].content,
              ],
            },
          },
          isLoading: false,
        };
      }
      return {
        ...state,
        movieData: payload.movieData,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default reducer;
