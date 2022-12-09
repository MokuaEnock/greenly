import React from "react";
import "./landing.css";
import Dumpsite1 from "../images/dumpsite1.jpg";
import Dumpsite2 from "../images/dumpsite2.jpg";
import Dumpsite3 from "../images/dumpsite3.jpg";
import Paradise1 from "../images/paradise1.jpg";
import Paradise2 from "../images/paradise2.jpg";
import Tagimage from "../images/Recycle.svg";
import Paper from "../images/paper.jpg";
import Agric from "../images/agriculture.jpg";
import Steel from "../images/steel.jpg";
import Fashion from "../images/fashion.jpg";
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
        <div className="recycle-image" id="recycle-image1">
          <img src={Dumpsite1} alt="dumpsite1" />
        </div>
        <div id="recycle-icon"></div>
        <div className="recycle-image" id="recycle-image2">
          <img src={Paradise2} alt="dumpsite1" />
        </div>
      </section>

      <section id="impact">
        <div id="impact-title">Our Impact</div>
        <div id="impact-content">
          <div>
            <span className="span-image" id="spa1"></span>
            <span className="span-number">500</span>
            <span className="span-word">Waste Collectors</span>
          </div>

          <div>
            <span className="span-image" id="spa2"></span>
            <span className="span-number">500</span>
            <span className="span-word">Proffesional Workers</span>
          </div>

          <div>
            <span className="span-image" id="spa3"></span>
            <span className="span-number">500</span>
            <span className="span-word">Industries Served</span>
          </div>

          <div>
            <span className="span-image" id="spa4"></span>
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
          <div>
            <span id="image">
              <img src={Agric} alt="agric" />
            </span>
            <span id="title">Agriculture</span>
            <span id="content">
              Producing manure for millions of farmers in Africa
            </span>
          </div>

          <div>
            <span id="image">
              <img src={Fashion} alt="agric" />
            </span>
            <span id="title">Fashion</span>
            <span id="content">
              Contributing to the industry by providing raw materials
            </span>
          </div>

          <div>
            <span id="image">
              <img src={Paper} alt="agric" />
            </span>
            <span id="title">Paper</span>
            <span id="content">Providing pulp for leading publishers.</span>
          </div>

          <div>
            <span id="image">
              <img src={Steel} alt="agric" />
            </span>
            <span id="title">Steel</span>
            <span id="content">
              Building Africa by converting some of your waste into steel.
            </span>
          </div>
        </div>
      </section>

      <section id="image-tag">
        <img src={Tagimage} alt="tag" />
      </section>

      <section id="process">
        <div id="heading">
          <span id="title">The process</span>
          <span id="word">
            Learn what happens to your waste from collection
            <br />
            to recycling and reusing.
          </span>
        </div>

        <div id="content">
          <div className="up">
            <span className="process-icon"></span>
            <span className="process-label">Collection </span>
          </div>
          <div className="down">
            <span className="process-label">Sorting</span>
            <span className="process-icon"></span>
          </div>
          <div className="up">
            <span className="process-icon"></span>
            <span className="process-label">De-Toxing</span>
          </div>
          <div className="down">
            <span className="process-label">Treatment</span>
            <span className="process-icon"></span>
          </div>
          <div className="up">
            <span className="process-icon"></span>
            <span className="process-label">Distribution</span>
          </div>
          <div className="down">
            <span className="process-label">Recycling</span>
            <span className="process-icon"></span>
          </div>
        </div>
      </section>

      <section id="partners">
        <div id="title">Meet Our Partners</div>
        <div id="content">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </section>

      <section id="request">
        <div id="image"></div>
        <div id="detail">
          <span>
            Join us today in turning Africa green, request a <br />
            free waste collection from us.
          </span>
          <button>Request for waste Collection</button>
        </div>
      </section>
    </main>
  );
}
