import "./redirect.css";
import { Link } from "react-router-dom";
import Money from "../logos/moneysend.svg";
import Trash from "../logos/39-trash.svg";
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
        Collect waste
      </Link>
      <Link className="redirects" to="/buyer">
        <img src={Money} alt="money" />
        <span>Buy compost</span>
      </Link>
    </main>
  );
}
