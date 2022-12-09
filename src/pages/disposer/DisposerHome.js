import { useState, useEffect } from "react";
import Agric from "../images/agriculture.jpg";
export default function DisposerHome({ user }) {
  let [name, setName] = useState("");
  let [location, setLocation] = useState("");
  let [date, setDate] = useState("");
  let [weight, setWeight] = useState("");
  let [wastetype, setWasteType] = useState("");
  let [instructions, setInstructions] = useState("");
  let [isLoading, setIsLoading] = useState(false);
  let [errors, setErrors] = useState([]);
  let [item, setItem] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    fetch("http://localhost:3000/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_id: user.id,
        name,
        location,
        date,
        weight,
        wastetype,
        // email,
        instructions,
      }),
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        // history.push("/");
        console.log("success", r);
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }

  let orders = user.orders;

  let all_orders = orders.map((item) => {
    return (
      <div
        className="disposer-item"
        key={item.id}
        onClick={() => setItem(item)}
      >
        <div className="disposer-item-image"></div>

        <div className="disposer-item-info">
          <div>
            <span>Type: {item.wastetype}</span>
            <span>Location: {item.location}</span>
          </div>

          <div id="additional-info">
            <span>Weight: {item.weight}</span>
            <span>Date: {item.date}</span>
            <span>Id: {item.id}</span>
          </div>
        </div>
      </div>
    );
  });

  let item_view = [item].map((item) => {
    return (
      <div id="disposer-view" key={item.id}>
        <span id="view-title">Hello {item.title}</span>
        <span id="view-image">
          <img src={Agric} alt="product" />
        </span>
        <span id="view-info">
          <button className="view-attr">{item.location}</button>
          <button className="view-attr">{item.date}</button>
          <button className="view-attr">{item.weight} kgs</button>
        </span>
        <span id="view-value">
          <button>Points: 145</button>
          <button>Ksh: 20</button>
        </span>
        <span id="view-instructions">{item.instructions}</span>
        <span id="view-buttons">
          <button id="view-update">Update</button>
          <button
            id="view-delete"
            onClick={() => {
              fetch(`http://localhost:3000/orders/${item.id}`, {
                method: "DELETE",
              }).then((res) => res.json());
            }}
          >
            Cancel
          </button>
        </span>
      </div>
    );
  });

  let points = orders.map((item) => {
    return item.weight;
  });

  return (
    <main id="disposer-home">
      <section id="disposer-stats">
        <div id="disposer-stats-title">
          <div>
            <span>Points</span>
            <span>{points * 10}</span>
          </div>

          <div>
            <span>Value</span>
            <span>{(points * 10) / 0.3}</span>
          </div>

          <div>
            <span>Weight</span>
            <span>{points.reduce((a, b) => a + b, 0)}</span>
          </div>
        </div>

        <div id="disposer-stats-stats">
          <span>Contribution this month</span>
        </div>

        <div id="disposer-stats-words">
          <div>
            <span>Collections</span>
            <span>{points.length}</span>
          </div>

          <div>
            <span>Weight</span>
            <span>{points.reduce((a, b) => a + b, 0)}</span>
          </div>

          <div>
            <span>Top Category</span>
            <span>Organic</span>
          </div>
        </div>
      </section>

      <section id="user-form">
        <form onSubmit={handleSubmit}>
          <div id="user-form-title">Place Your order</div>
          <div id="user-form-cont">
            <div id="user-form-icons"></div>
            <div id="user-form-inputs">
              <span>
                <label>Hello whats your name?</label>
                <input
                  type="text"
                  autoComplete="on"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </span>

              <span>
                <label>Location for collection?</label>
                <input
                  type="text"
                  autoComplete="on"
                  required
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
              </span>

              <span>
                <label>Waste collection date?</label>
                <input
                  type="date"
                  autoComplete="on"
                  required
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
              </span>

              <span>
                <label>The weight of the waste?</label>
                <input
                  type="number"
                  minimum="1"
                  maximum="100"
                  autoComplete="on"
                  required
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                />
              </span>

              <span>
                <label>Type of waste?</label>
                <input
                  type="text"
                  autoComplete="on"
                  required
                  value={wastetype}
                  onChange={(e) => setWasteType(e.target.value)}
                />
              </span>

              <span>
                <label>Any additional instructions?</label>
                <input
                  type="text"
                  autoComplete="on"
                  required
                  value={instructions}
                  onChange={(e) => setInstructions(e.target.value)}
                />
              </span>
              <p className="error"></p>

              <button type="submit">Order</button>
            </div>
            <div id="user-form-image">
              <span></span>
            </div>
          </div>
        </form>
      </section>

      <div id="disposer-home-title">Previous disposals</div>

      <section id="disposer-previous">
        <div id="disposer-list">
          <div id="disposer-item">
            <span className="item-image">
              <img src={Agric} alt="dispose" />
            </span>
            <span className="item-info">
              <button>Location</button>
              <button>Organic</button>
            </span>
            <span className="item-insts">instructions</span>
            <span className="item-buts">
              <button>45 kgs</button>
              <button>12/03/2022</button>
            </span>
          </div>
          <div id="disposer-item"></div>
          <div id="disposer-item"></div>
          <div id="disposer-item"></div>
          <div id="disposer-item"></div>
          <div id="disposer-item"></div>
        </div>
        {item_view}
      </section>
    </main>
  );
}
