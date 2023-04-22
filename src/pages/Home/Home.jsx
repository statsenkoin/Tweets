import { Link, useLocation } from 'react-router-dom';

export default function Home() {
  const location = useLocation();
  return (
    <>
      <Link to="/alltweets" state={{ from: location }}>
        Home
      </Link>
    </>
  );
}
