import axios from 'axios';

export const searchMovie = query => {
  const prefix = 'https://api.themoviedb.org/3/search/movie?';
  const apiKey = process.env.REACT_APP_MOVIE_API_KEY;
  const searchRequest = `${prefix}api_key=${apiKey}&language=en-US&query=${query}&page=1&include_adult=false`;

  axios
    .get(searchRequest)
    .then(result => console.log(result))
    .catch(error => console.log(error));
};
