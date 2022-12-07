import "./disposer.css";
import DisposerHome from "./DisposerHome";
import DisposerProfile from "./DisposerProfile";
import { Link } from "react-router-dom";
export default function Disposer({ user }) {
  console.log(user);
  function navi() {
    if (user !== null) {
      return <DisposerHome />;
    } else {
      return <DisposerProfile />;
    }
  }
  // return (
  //   <main id="disposer">
  //     <div id="disposer-nav">
  //       <Link to="#disposer-home">Home</Link>
  //       <Link to="#disposer-profile">Profile</Link>
  //     </div>

  //     <DisposerHome />
  //   </main>
  // );

  return <>{user ? <DisposerHome /> : <DisposerProfile />}</>;
}
