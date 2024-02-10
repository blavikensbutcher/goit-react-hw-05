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
              <Link to={'/movies/' + item.id}>{item.title}</Link>
            </li>
          );
        })}
      </ul>
    );
  }

  useEffect(() => {
    async function callFilms() {
      try {
        const response = await getTrendingFilms();
        setResponse(response);
      } catch (e) {
        console.log(e);
      }
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
