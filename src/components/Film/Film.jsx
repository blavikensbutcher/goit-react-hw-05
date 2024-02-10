import { useParams } from 'react-router-dom';
import { getFilmById } from '../../js/api.js';
import { useEffect, useState } from 'react';

export const Film = () => {
  const [response, setResponse] = useState({});
  const { movieId } = useParams();

  const BASE_IMG_URL = 'https://image.tmdb.org/t/p/w500/';

  useEffect(() => {
    async function getMovie() {
      return await getFilmById(movieId);
    }

    getMovie().then(item => setResponse(item));
  }, [movieId]);

  return (
    <div>
      {response && response.backdrop_path && (
        <img src={BASE_IMG_URL + response.poster_path} alt={response.title} />
      )}

      <div>
        <p>{response.title}</p>
        <p>{response.release_date && response.release_date.substring(0, 4)}</p>
        <p>Average Score: {response.vote_average && response.vote_average.toFixed(2) * 10}% </p>
        <p>Overview:</p>
        <p>{response.overview}</p>
      </div>
      <p>Genres:</p>
      <div>
        {response.genres && response.genres.map(genre => <span key={genre.id}>{genre.name}</span>)}
      </div>
    </div>
  );
};
