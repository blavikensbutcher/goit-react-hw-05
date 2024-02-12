import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getReviewById } from '../../js/api.js';
import css from './Reviews.module.css';

export const Reviews = () => {
  const { movieId } = useParams();
  const [response, setResponse] = useState([]);

  useEffect(() => {
    async function getReview() {
      const response = await getReviewById(movieId);
      setResponse(response);
      return response;
    }

    getReview();
  }, [movieId]);

  return (
    <>
      {response.map(review => {
        return (
          <div key={review.id}>
            <h2 className={css.header}>{review.author}</h2>
            <p className={css.paragraph}>{review.content}</p>
          </div>
        );
      })}
    </>
  );
};
