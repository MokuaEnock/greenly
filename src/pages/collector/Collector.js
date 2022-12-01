import "./collector.css";
import React from "react";
import CollectorHome from "./CollectorHome";
import Collectorprofile from "./CollectorProfile";
import { Link } from "react-router-dom";

export default function Collector() {
  function CollectorBar() {
    return (
      <div id="collector-bar">
        <Link to="#home">Home</Link>
        <Link to="#profile">Profile</Link>
      </div>
    );
  }

  return (
    <main id="collector">
      <CollectorBar />
      <CollectorHome />
      <Collectorprofile />
    </main>
  );
}
