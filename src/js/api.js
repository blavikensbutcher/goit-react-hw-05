import axios from 'axios';

export async function getTrendingFilms() {
  const response = await axios.get('https://api.themoviedb.org/3/trending/movie/week', {
    params: {
      api_key: '5eadf0c870bae7d4b547fc5e7cef7655',
    },
  });
  return response.data.results;
}

export async function getFilmByQuery(query) {
  const response = await axios.get('https://api.themoviedb.org/3/search/movie', {
    params: {
      api_key: '5eadf0c870bae7d4b547fc5e7cef7655',
      query,
    },
  });

  return response.data.results;
}
