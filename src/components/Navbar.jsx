import { Link } from "react-router-dom";
import puppy from "../images/puppy.png";

export default function Navbar() {
  return (
    <div className="nav-container">
      <img src={puppy} alt="image not found" />
      <nav>
        <ul>
          <button className="details-btn">
            <Link to="/">HOME</Link>
          </button>
          <button className="details-btn">
            <Link to="/roster">ROSTER</Link>
          </button>
        </ul>
      </nav>
    </div>
  );
}
