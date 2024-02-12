import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { getFilmById } from '../../js/api.js';
import { useEffect, useState } from 'react';
import css from './Film.module.css';

export const Film = () => {
  const [response, setResponse] = useState({});
  const { movieId } = useParams();
  const location = useLocation();
  const BASE_IMG_URL = 'https://image.tmdb.org/t/p/w500/';

  ///////PERCENTAGE COLOR LOGIC/////////
  let percentage = response.vote_average && response.vote_average.toFixed(1) * 10;
  let percentageColor =
    percentage > 70 ? css.good : percentage < 70 && percentage > 46 ? css.neutral : css.bad;

  useEffect(() => {
    async function getMovie() {
      return await getFilmById(movieId);
    }

    getMovie().then(item => setResponse(item));
  }, [movieId]);

  return (
    <div className={css.container}>
      <Link to={location.state} className={css.backlink}>
        Back to all films
      </Link>
      <div>
        {response && response.backdrop_path && (
          <img
            src={BASE_IMG_URL + response.poster_path}
            alt={response.title}
            className={css.image}
          />
        )}
      </div>
      <div>
        <p className={css.title}>
          {response.title} ({response.release_date && response.release_date.substring(0, 4)})
        </p>
        <p className={css.genres}>
          Average Score:
          <span className={percentageColor}>
            {response.vote_average && response.vote_average.toFixed(1) * 10}%
          </span>
        </p>
        <p className={css.title}>Overview:</p>
        <p className={css.genres}>{response.overview}</p>
        <p className={css.title}>Genres:</p>
        <p className={css.genres}>
          {response.genres &&
            response.genres.map(genre => <span key={genre.id}>{genre.name}</span>)}
        </p>
        <ul>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
          <li>
            <Link to="cast">Cast</Link>
          </li>
        </ul>
        <Outlet />
      </div>
    </div>
  );
};
