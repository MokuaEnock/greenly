import "./disposer.css";
import DisposerHome from "./DisposerHome";
import DisposerProfile from "./DisposerProfile";
import { Link } from "react-router-dom";
export default function Disposer({ user, onLogin }) {
  console.log(user);

  function handleDelete() {
    fetch("http://localhost:3000/logout", { method: "DELETE" }).then((res) => {
      if (res.ok) {
        onLogin(null);
      }
    });
  }

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
