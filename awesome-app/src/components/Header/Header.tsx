import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="container mb-4">
      <header>
        <nav>
          <ul className="nav nav-tabs">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Todo
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/effects">
                Effect
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/context">
                Context
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/counter">
                Counter
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}
