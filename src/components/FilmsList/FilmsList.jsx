import { getTrendingFilms } from '../../js/api.js';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export const FilmsList = () => {
  const [response, setResponse] = useState([]);

  function createMarkup(array) {
    return (
      <ul>
        {array.map(item => {
          return (
            <li key={item.id}>
              <Link to="/">{item.title}</Link>
            </li>
          );
        })}
      </ul>
    );
  }

  createMarkup(response);

  useEffect(() => {
    async function callFilms() {
      const response = await getTrendingFilms();
      setResponse(response);
    }
    callFilms();
  }, []);

  return (
    <>
      <h2>Trending Today</h2>
      {createMarkup(response)}
    </>
  );
};
