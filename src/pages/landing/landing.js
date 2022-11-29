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

      <section id="impact">
        <div id="impact-title">Our Impact</div>
        <div id="impact-content">
          <div>
            <span className="span-image"></span>
            <span className="span-number">500</span>
            <span className="span-word">Waste Collectors</span>
          </div>

          <div>
            <span className="span-image"></span>
            <span className="span-number">500</span>
            <span className="span-word">Proffesional Workers</span>
          </div>

          <div>
            <span className="span-image"></span>
            <span className="span-number">500</span>
            <span className="span-word">Industries Served</span>
          </div>

          <div>
            <span className="span-image"></span>
            <span className="span-number">500</span>
            <span className="span-word">Waste recycled</span>
          </div>
        </div>
      </section>

      <section id="assistance">
        <div id="assistance-title">
          <span id="title">How may we be of assistance?</span>
          <span id="par">We collect and recycle solid waste</span>
        </div>
        <div id="assistance-content">
          <div id="picking">
            <span id="title">Dispose</span>
            <span id="wording">
              <span>
                We collect waste all over Nairobi the country, our goal is to
                enable proper waste disposal options are available to you.
              </span>
            </span>
          </div>
          <div id="collection">
            <span id="title">Collect</span>
            <span id="wording">
              <span>
                Collect Raw materials form us for recycling,we trust that you
                will keep the dream alive by handling the provided materials
                approprIately
              </span>
            </span>
          </div>
        </div>
      </section>

      <section id="solutions">
        <div id="heading">
          <span id="title">Solutions for various Industries</span>
          <span id="word">
            Whatever your industry does be sure that we have a solution for you
            <br />
            that is enviromental friendly.
          </span>
        </div>

        <div id="content">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </section>

      <section id="image-tag"></section>

      <section id="process"></section>

      <section id="partners"></section>

      <section id="request"></section>
    </main>
  );
}
