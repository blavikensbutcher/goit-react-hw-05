import { useEffect, useState } from 'react';
import { getFilmByQuery } from '../../js/api.js';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { Button, TextField } from '@mui/material';
import css from './SearchMovies.module.css';

export default function SearchMovies() {
  const [response, setResponse] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  function handleSubmit(event) {
    event.preventDefault();
    setSearchParams({ query: event.target.search.value });
    event.target.reset();
  }

  function handleChange(event) {
    setSearchParams({
      query: event.target.value,
    });
  }

  function createMarkup(array) {
    return (
      <ul>
        {array.map(item => {
          return (
            <li key={item.id}>
              <Link to={'/movies/' + item.id} state={location}>
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    );
  }

  useEffect(() => {
    async function getFilm() {
      const answer = await getFilmByQuery(searchParams.get('query'));
      setResponse(answer);
    }
    getFilm();
  }, [searchParams]);

  return (
    <>
      <form onSubmit={handleSubmit} className={css.form}>
        <TextField
          id="outlined-basic"
          label="Put movie name here"
          variant="outlined"
          color={'success'}
          name="search"
          onChange={handleChange}
          className={css.textField}
        />
        <Button
          variant="outlined"
          color={'success'}
          type="submit"
          style={{ marginLeft: 15, height: 56 }}
        >
          Search
        </Button>
      </form>

      {createMarkup(response)}
    </>
  );
}
