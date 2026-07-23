import { Link } from "react-router-dom";
import "../css/NavBar.css";
import "@fontsource/iceberg";

function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <img className="logo" />
        <Link to="/">TrackPenses</Link>
      </div>
      <div className="navbar-links">
        <Link to="/" className="navbar-link">
          Dashboard
        </Link>
        <Link to="/transactions" className="navbar-link">
          Transactions
        </Link>
        <Link to="/limit" className="navbar-link">
          Limit
        </Link>
        <Link to="/settings" className="navbar-link">
          Settings
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;
