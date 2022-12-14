import Agric from "../images/agriculture.jpg";
export default function BuyerHome() {
  return (
    <main id="buyer-home">
      <section id="buyer-title">
        <span id="buyer-heading">Hello there Enok want to buy?</span>
        <span id="buyer-par">
          Purchase quality and quantity compost from us.
        </span>
      </section>

      <section id="compost-title">Todays Listings</section>

      <section id="compost-container">
        <div className="compost-card">
          <span className="compost-card-image">
            <img src={Agric} alt="compost" />
          </span>
          <span className="compost-card-info">
            <button className="infos">Potassium</button>
            <button className="infos">Moisture</button>
            <button className="infos">Discounted</button>
          </span>
          <span className="compost-card-desc">
            Compost, crumbly mass of rotted organic matter made from decomposed
            plant material, used in gardening and agriculture.
          </span>
          <span className="compost-card-buttons">
            <button className="price">Ksh 150/kg</button>
            <button className="order">Order</button>
          </span>
        </div>{" "}
        <div className="compost-card">
          <span className="compost-card-image">
            <img src={Agric} alt="compost" />
          </span>
          <span className="compost-card-info">
            <button className="infos">Potassium</button>
            <button className="infos">Moisture</button>
            <button className="infos">Discounted</button>
          </span>
          <span className="compost-card-desc">
            Compost, crumbly mass of rotted organic matter made from decomposed
            plant material, used in gardening and agriculture.
          </span>
          <span className="compost-card-buttons">
            <button className="price">Ksh 150/kg</button>
            <button className="order">Order</button>
          </span>
        </div>{" "}
        <div className="compost-card">
          <span className="compost-card-image">
            <img src={Agric} alt="compost" />
          </span>
          <span className="compost-card-info">
            <button className="infos">Potassium</button>
            <button className="infos">Moisture</button>
            <button className="infos">Discounted</button>
          </span>
          <span className="compost-card-desc">
            Compost, crumbly mass of rotted organic matter made from decomposed
            plant material, used in gardening and agriculture.
          </span>
          <span className="compost-card-buttons">
            <button className="price">Ksh 150/kg</button>
            <button className="order">Order</button>
          </span>
        </div>{" "}
        <div className="compost-card">
          <span className="compost-card-image">
            <img src={Agric} alt="compost" />
          </span>
          <span className="compost-card-info">
            <button className="infos">Potassium</button>
            <button className="infos">Moisture</button>
            <button className="infos">Discounted</button>
          </span>
          <span className="compost-card-desc">
            Compost, crumbly mass of rotted organic matter made from decomposed
            plant material, used in gardening and agriculture.
          </span>
          <span className="compost-card-buttons">
            <button className="price">Ksh 150/kg</button>
            <button className="order">Order</button>
          </span>
        </div>{" "}
        <div className="compost-card">
          <span className="compost-card-image">
            <img src={Agric} alt="compost" />
          </span>
          <span className="compost-card-info">
            <button className="infos">Potassium</button>
            <button className="infos">Moisture</button>
            <button className="infos">Discounted</button>
          </span>
          <span className="compost-card-desc">
            Compost, crumbly mass of rotted organic matter made from decomposed
            plant material, used in gardening and agriculture.
          </span>
          <span className="compost-card-buttons">
            <button className="price">Ksh 150/kg</button>
            <button className="order">Order</button>
          </span>
        </div>{" "}
        <div className="compost-card">
          <span className="compost-card-image">
            <img src={Agric} alt="compost" />
          </span>
          <span className="compost-card-info">
            <button className="infos">Potassium</button>
            <button className="infos">Moisture</button>
            <button className="infos">Discounted</button>
          </span>
          <span className="compost-card-desc">
            Compost, crumbly mass of rotted organic matter made from decomposed
            plant material, used in gardening and agriculture.
          </span>
          <span className="compost-card-buttons">
            <button className="price">Ksh 150/kg</button>
            <button className="order">Order</button>
          </span>
        </div>
      </section>
    </main>
  );
}
