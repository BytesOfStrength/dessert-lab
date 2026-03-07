import { Link } from 'react-router';
function NotFound() {
  return (
    <div>
      <h1>Page Not Found</h1>
      <p>Uh Oh! No recipes here.</p>
      <Link to="/">Return Home</Link>
    </div>
  );
}
export default NotFound;
