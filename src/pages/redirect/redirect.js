import "./redirect.css";
import { Link } from "react-router-dom";

export default function Redirect() {
  return (
    <main id="redirect">
      <Link className="redirects" to="/disposer">
        Dispose Waste
      </Link>
      <Link className="redirects" to="/partner">
        Partner with us
      </Link>
      <Link className="redirects" to="/collector">
        Collector waste
      </Link>
      <Link className="redirects" to="/buyer">
        Buy Compost
      </Link>
    </main>
  );
}
