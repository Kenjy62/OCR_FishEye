// Images
import logo from "../res/images/logo.png";

// Required
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="flex flex-col items-center md:flex-row md:justify-between">
      <Link to="/">
        <img
          id="logo"
          className="cursor-pointer h-14"
          src={logo}
          alt="FishEye HomePage"
          aria-label="Go to Homepage"
        ></img>
      </Link>
      <ul className="text-2xl font-semibold text-fePrimary hover:text-feSecondary hover:cursor-pointer">
        <Link
          to="/"
          className="cursor-pointer"
          aria-label="Photographers List Page"
        >
          <li>Nos photographes</li>
        </Link>
      </ul>
    </header>
  );
}

export default Header;
