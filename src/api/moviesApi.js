import axios from "axios";

const API_KEY = "ccb56df6317a72e3939ac7c5bf8082f8";

const instance = axios.create({
  baseURL: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&sort_by=popularity.desc`,
});

export default instance;
