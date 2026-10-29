import { Link } from 'react-router-dom';
export default function NotFound() {
  return <div className="container page-head"><h1>Page not found</h1><p>The page you are looking for is not here.</p><Link className="btn" to="/">Back to home</Link></div>;
}
