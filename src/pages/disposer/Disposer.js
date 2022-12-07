import "./disposer.css";
import DisposerHome from "./DisposerHome";
import DisposerProfile from "./DisposerProfile";
import { Link } from "react-router-dom";
export default function Disposer({ user }) {
  console.log(user);

  function handleDelete() {}

  function DisHome() {
    return (
      <>
        <div id="disposer-nav">
          <button onClick={handleDelete}>LogOut</button>
        </div>
        <DisposerHome />
      </>
    );
  }

  return <>{user ? <DisHome /> : <DisposerProfile />}</>;
}
