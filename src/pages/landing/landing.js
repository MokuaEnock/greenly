import React from "react";
import "./landing.css";

export default function Landing() {
  return (
    <main id="landing">
      <section id="tagline">
        <span id="title">Towards a greener Nation</span>
        <span id="paragraph">
          There should be millions of people striving towards zero waste <br />
          rather than a select few who achieve it perfectly.
        </span>
      </section>

      <section id="images">
        <div className="recycle-image" id="recycle-image1"></div>
        <div id="recycle-icon"></div>
        <div className="recycle-image" id="recycle-image2"></div>
      </section>
      <section id="impact"></section>
      <section id="assistance"></section>
    </main>
  );
}
