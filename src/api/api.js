const genres = {
  12: "Adventure",
  14: "Fantasy",
  16: "Animation",
  18: "Drama",
  27: "Horror",
  28: "Action",
  35: "Comedy",
  36: "History",
  37: "Western",
  53: "Thriller",
  80: "Crime",
  99: "Documentary",
  878: "Science Fiction",
  9648: "Mystery",
  10402: "Music",
  10749: "Romance",
  10751: "Family",
  10752: "War",
  10770: "TV Movie",
};

const API_URL = `https://api.themoviedb.org/3/discover/movie?api_key=ccb56df6317a72e3939ac7c5bf8082f8&sort_by=popularity.desc`;
//const API_VIDEO_URL = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=ccb56df6317a72e3939ac7c5bf8082f8&language=en-US`;
const getImagePath = (path) =>
  `https://image.tmdb.org/t/p/w440_and_h660_face${path}`;
const getBackdropPath = (path) =>
  `https://image.tmdb.org/t/p/w370_and_h556_multi_faces${path}`;

export const getMovies = async () => {
  const { results } = await fetch(API_URL).then((x) => x.json());
  const movies = results.map(
    ({
      id,
      original_title,
      poster_path,
      backdrop_path,
      vote_average,
      overview,
      release_date,
      genre_ids,
    }) => ({
      key: id,
      title: original_title,
      poster: getImagePath(poster_path),
      backdrop: getBackdropPath(backdrop_path),
      rating: vote_average,
      description: overview,
      releaseDate: release_date,
      genres: genre_ids.map((genre) => genres[genre]),
    })
  );

  return movies;
};

export const getVideoPath = async (id) => {
  const { results } = await fetch(
    `https://api.themoviedb.org/3/movie/${id}/videos?api_key=ccb56df6317a72e3939ac7c5bf8082f8&language=en-US`
  ).then((x) => x.json());
  return results[0].key;
};
