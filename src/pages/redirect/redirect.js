import "./redirect.css";
import { Link } from "react-router-dom";
import Money from "../logos/moneysend.svg";
import Trash from "../logos/39-trash.svg";
export default function Redirect() {
  return (
    <main id="redirect">
      <section id="redirect-title">
        <span id="redirect-head">Hello there Enock, welcome to Okoa.</span>
        <span id="redirect-par">How would you like to use Okoa?</span>
      </section>

      <section id="redirect-cont">
        <Link className="redirects" to="/disposer">
          <img src={Trash} alt="money" />
          <span>Dispose waste</span>
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
      </section>
    </main>
  );
}
