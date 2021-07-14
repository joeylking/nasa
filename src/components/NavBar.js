import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="navbar">
      <ul>
        <Link to="/" className="home-link">
          Back
        </Link>
      </ul>
    </div>
  );
}
