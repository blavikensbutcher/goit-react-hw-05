import { useEffect, useState } from 'react';
import { getFilmByQuery } from '../../js/api.js';

export const SearchMovies = () => {
  const [inputValue, setInputValue] = useState('');
  const [response, setResponse] = useState([]);

  function handleSubmit(event) {
    event.preventDefault();
    setInputValue(event.target.search.value);
    event.target.reset();
  }

  useEffect(() => {
    async function getFilm() {
      const response = await getFilmByQuery(inputValue);
      setResponse(response.data);
    }

    console.log(response);

    getFilm();
  }, [inputValue]);

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="search">Search Movie</label>
      <input placeholder="type here" name="search"></input>
      <button type="submit">Search</button>
    </form>
  );
};
