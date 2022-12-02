import "./disposer.css";
import DisposerHome from "./DisposerHome";
// import DisposerProfile from "./DisposerProfile";
import { Link } from "react-router-dom";
export default function Disposer() {
  return (
    <main id="disposer">
      <div id="disposer-nav">
        <Link to="#disposer-home">Home</Link>
        <Link to="#disposer-profile">Profile</Link>
      </div>

      <DisposerHome />
      {/* <DisposerProfile /> */}
    </main>
  );
}
