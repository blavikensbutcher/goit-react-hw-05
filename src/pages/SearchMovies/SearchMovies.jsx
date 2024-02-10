import { useEffect, useState } from 'react';
import { getFilmByQuery } from '../../js/api.js';
import { Link } from 'react-router-dom';

export const SearchMovies = () => {
  const [inputValue, setInputValue] = useState('');
  const [response, setResponse] = useState([]);

  function handleSubmit(event) {
    event.preventDefault();
    setInputValue(event.target.search.value);
    event.target.reset();
  }

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
    async function getFilm() {
      const answer = await getFilmByQuery(inputValue);
      setResponse(answer);
    }
    getFilm();
  }, [inputValue]);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="search">Search Movie</label>
        <input placeholder="type here" name="search"></input>
        <button type="submit">Search</button>
      </form>

      {createMarkup(response)}
    </>
  );
};
