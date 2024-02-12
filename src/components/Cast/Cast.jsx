import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCastById } from '../../js/api.js';
import css from './Cast.module.css';

export const Cast = () => {
  const { movieId } = useParams();
  const [response, setResponse] = useState([]);
  const BASE_IMG_URL = 'https://image.tmdb.org/t/p/w500/';

  useEffect(() => {
    async function getReview() {
      const response = await getCastById(movieId);
      setResponse(response.cast);
      return response.cast;
    }

    getReview();
  }, [movieId]);

  return (
    <div>
      {response.map(actor => {
        return (
          <div key={actor.id} className={css.container}>
            <h2 className={css.header}>Character: {actor.character}</h2>
            <img
              src={BASE_IMG_URL + actor.profile_path}
              alt={actor.character}
              height={225}
              width={200}
            />
            <span>Name: {actor.name}</span>
            <span>Popularity: {actor.popularity}</span>
          </div>
        );
      })}
    </div>
  );
};
