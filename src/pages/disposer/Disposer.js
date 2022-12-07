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

  function handleDelete() {

  }

  function DisHome() {
    return (
      <>
        <div id="disposer-nav">
          <button onClick={handleDelete}></button>
        </div>
        <DisposerHome />
      </>
    );
  }

  return <>{user ? <DisHome /> : <DisposerProfile />}</>;
}
