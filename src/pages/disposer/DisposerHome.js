export default function DisposerHome() {
  return (
    <main id="disposer-home">
      <div id="disposer-home-title">Hello Mokua</div>
      <form id="disposer-form">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <button type="submit">Order</button>
      </form>

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
