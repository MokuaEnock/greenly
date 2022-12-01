export default function CollectorHome() {
  function Card() {
    return <div className="waste-card"></div>;
  }

  return (
    <main id="collector-home">
      <section id="collector-stats">
        <div id="collector-stats-terms"></div>
        <div id="collector-stats-graph"></div>
        <div id="collector-stats-figures"></div>
      </section>
      <section id="collector-collections">
        <div id="collector-collection-header">New collections</div>
        <div id="collector-container">
          <div id="collector-container-list">
            <div className="waste-card"></div>
            <div className="waste-card"></div>
            <div className="waste-card"></div>
            <div className="waste-card"></div>
            <div className="waste-card"></div>
            <div className="waste-card"></div>
            <div className="waste-card"></div>
            <div className="waste-card"></div>
            <div className="waste-card"></div>
          </div>
          <div id="collector-container-view"></div>
        </div>
      </section>
    </main>
  );
}
