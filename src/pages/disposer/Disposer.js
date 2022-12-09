import "./disposer.css";
import DisposerHome from "./DisposerHome";
import DisposerProfile from "./DisposerProfile";

export default function Disposer({ user, setUser }) {
  // console.log(user);

  function handleDelete() {
    fetch("https://okoa-production.up.railway.app/logout", {
      method: "DELETE",
      mode: "cors",
    }).then((res) => {
      if (res.ok) {
        setUser(null);
      }
    });
  }

  function DisHome() {
    return (
      <>
        <div id="disposer-nav">
          <button onClick={handleDelete}>LogOut</button>
        </div>
        <DisposerHome user={user} />
      </>
    );
  }


  return <>{user ? <DisHome /> : <DisposerProfile />}</>;
  // return <>{user ? <DisHome /> : <DisHome />}</>;
}
