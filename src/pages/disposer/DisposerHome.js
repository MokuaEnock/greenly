import { click } from "@testing-library/user-event/dist/click";
import { useState, useEffect } from "react";
import Agric from "../images/agriculture.jpg";

export default function DisposerHome({ user }) {
  let [name, setName] = useState("");
  let [location, setLocation] = useState("");
  let [date, setDate] = useState("");
  let [weight, setWeight] = useState("");
  let [wastetype, setWasteType] = useState("");
  let [email, setEmail] = useState("");
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

  // function handleDelete(product) {
  //   fetch(`http://localhost:3000/products/${product.id}`, {
  //     method: "DELETE",
  //   }).then((res) => res.json());
  // }

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

        <div className="disposer-item-add">
          <button className="update">Update</button>
          <button
            className="delete"
            onClick={() => {
              fetch(`http://localhost:3000/products/${item.id}`, {
                method: "DELETE",
                mode: "cors",
              }).then((res) => res.json());
            }}
          >
            Delete
          </button>
        </div>
      </div>
    );
  });

  let item_view = [item].map((item, index) => {
    return (
      <div id="disposer-view" key={index}>
        <span className="title">Here is your order {item.name}</span>
        <span className="image"></span>
        <span className="categories">
          <span className="categ-attributes">{item.date}</span>
          <span className="categ-attributes">{item.wastetype}</span>
          <span className="categ-attributes">{item.location}</span>
          <span className="categ-attributes">{item.weight}</span>
        </span>
        <span className="instructions">{item.instructions}</span>
        <span className="points">Points earned: {item.weight * 10}</span>
      </div>
    );
  });

  let points = orders.map((item) => {
    return item.weight;
  });

  return (
    <main id="disposer-home">
      {/* <div id="disposer-home-title">Your Contributions</div> */}

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
          <span id="graph"></span>
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
        <div id="disposer-list">{all_orders.reverse()}</div>

        {item_view}
      </section>
    </main>
  );
}
