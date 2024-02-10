import { Link } from 'react-router-dom';

export const NotFoundPage = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <b style={{ fontSize: 30 }}>You lost somewhere :(</b>
      <Link to="/">Back to homepage</Link>
    </div>
  );
};
