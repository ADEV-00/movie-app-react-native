import createDataContext from "./createDataContext";
import moviesApi from "../api/moviesApi";

const movieRecuer = (state, action) => {
  switch (action.type) {
    case "fetch_movies":
      return action.payload;
    default:
      return state;
  }
};

const getImagePath = (path) => {
  `https://image.tmdb.org/t/p/w440_and_h660_face${path}`;
};

const fetchMovies = (dispatch) => async () => {
  const results = await trackerApi.get();
  const movies = results.map(
    ({
      id,
      original_title,
      poster_path,
      vote_average,
      overview,
      release_date,
    }) => ({
      key: id,
      title: original_title,
      poster: getImagePath(poster_path),
      rating: vote_average,
      description: overview,
      releaseDate: release_date,
    })
  );
  dispatch({ type: "fetch_movies", payload: movies });
};

export const { Provider, Context } = createDataContext(
  movieRecuer,
  {
    fetchMovies,
  },
  []
);
