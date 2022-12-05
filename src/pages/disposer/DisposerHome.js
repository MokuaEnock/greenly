export default function DisposerHome() {
  return (
    <main id="disposer-home">
      <div id="disposer-home-title">Your Contributions</div>

      <section id="disposer-stats">
        <div id="disposer-stats-title">
          <span></span>
        </div>
        <div id="disposer-stats-stats"></div>
        <div id="disposer-stats-words"></div>
      </section>

      <div id="disposer-home-title">Request for a disposal</div>

      <section id="disposer-form">
        <form>
          <span>
            <label>Hello whats your name?</label>
            <input type="text" />
          </span>

          <span>
            <label>Location for the waste collection?</label>
            <input type="text" />
          </span>

          <span>
            <label>Waste collection date?</label>
            <input type="date" />
          </span>

          <span>
            <label>The weight of the waste?</label>
            <input type="number" minimum="1" maximum="100" />
          </span>

          <span>
            <label>Type of waste?</label>
            <input type="text" />
          </span>

          <span>
            <label>Your E-mail?</label>
            <input type="email" />
          </span>

          <span>
            <label>Any additional instructions?</label>
            <input type="text" />
          </span>

          <button type="submit">Place order</button>
        </form>
      </section>

      <div id="disposer-home-title">Previous disposals</div>

      <section id="disposer-previous">
        <div id="disposer-list">
          <div className="disposer-item"></div>
          <div className="disposer-item"></div>
          <div className="disposer-item"></div>
          <div className="disposer-item"></div>
          <div className="disposer-item"></div>
        </div>

        <div id="disposer-view"></div>
      </section>
    </main>
  );
}
