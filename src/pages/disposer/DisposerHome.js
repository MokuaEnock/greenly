import { useState, useEffect } from "react";
import { useNavigate } from "react-router";

export default function DisposerHome({ user }) {
  let [name, setName] = useState("");
  let [location, setLocation] = useState("");
  let [date, setDate] = useState("");
  let [weight, setWeight] = useState("");
  let [wastetype, setWasteType] = useState("");
  let [email, setEmail] = useState("");
  let [instructions, setInstructions] = useState("");
  let [orders, setOrders] = useState([]);
  let [isLoading, setIsLoading] = useState(false);
  let history = useNavigate();
  const [errors, setErrors] = useState([]);

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
        // r.json().then((err) => setErrors(err.errors));
        console.log("failed");
      }
    });
  }

  useEffect(() => {
    fetch(`http://localhost:3000/orders/${user.id}`)
      .then((res) => res.json())
      .then((res) => {
        setOrders(res);
      });
  }, [user.id]);

  console.log("successsssss", orders);

  return (
    <main id="disposer-home">
      <div id="disposer-home-title">Your Contributions</div>

      <section id="disposer-stats">
        <div id="disposer-stats-title">
          <div>
            <span>Total points earned</span>
            <span>1000</span>
          </div>

          <div>
            <span>Value of points in Ksh</span>
            <span>50</span>
          </div>

          <div>
            <span>Total weight of waste</span>
            <span>220</span>
          </div>
        </div>
        <div id="disposer-stats-stats">
          <span>Hello Enock</span>
        </div>

        <div id="disposer-stats-words">
          <div>
            <span>Collections this Month</span>
            <span>5</span>
          </div>

          <div>
            <span>Total weight this week</span>
            <span>105</span>
          </div>

          <div>
            <span>Total waste category</span>
            <span>Organic</span>
          </div>
        </div>
      </section>

      <div id="disposer-home-title">Request for a disposal</div>

      <section id="disposer-form">
        <form onSubmit={handleSubmit}>
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
            <label>Location for the waste collection?</label>
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
            <label>Your E-mail?</label>
            <input
              type="email"
              autoComplete="on"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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

          <button type="submit">Place order</button>
        </form>
      </section>

      <div id="disposer-home-title">Previous disposals</div>

      <section id="disposer-previous">
        <div id="disposer-list">
          <div className="disposer-item">
            <div className="disposer-item-image"></div>

            <div className="disposer-item-info">
              <div>
                <span>Type</span>
                <span>Location</span>
              </div>

              <div id="additional-info">
                <span>Weight</span>
                <span>12/03/2022</span>
                <span>Order Id</span>
              </div>
            </div>

            <div className="disposer-item-add">
              <button className="update">Update</button>
              <button className="delete">Delete</button>
            </div>
          </div>

          <div className="disposer-item">
            <div className="disposer-item-image"></div>

            <div className="disposer-item-info">
              <div>
                <span>Type</span>
                <span>Location</span>
              </div>

              <div id="additional-info">
                <span>Weight</span>
                <span>12/03/2022</span>
                <span>Order Id</span>
              </div>
            </div>

            <div className="disposer-item-add">
              <button className="update">Update</button>
              <button className="delete">Delete</button>
            </div>
          </div>

          <div className="disposer-item">
            <div className="disposer-item-image"></div>

            <div className="disposer-item-info">
              <div>
                <span>Type</span>
                <span>Location</span>
              </div>

              <div id="additional-info">
                <span>Weight</span>
                <span>12/03/2022</span>
                <span>Order Id</span>
              </div>
            </div>

            <div className="disposer-item-add">
              <button className="update">Update</button>
              <button className="delete">Delete</button>
            </div>
          </div>

          <div className="disposer-item">
            <div className="disposer-item-image"></div>

            <div className="disposer-item-info">
              <div>
                <span>Type</span>
                <span>Location</span>
              </div>

              <div id="additional-info">
                <span>Weight</span>
                <span>12/03/2022</span>
                <span>Order Id</span>
              </div>
            </div>

            <div className="disposer-item-add">
              <button className="update">Update</button>
              <button className="delete">Delete</button>
            </div>
          </div>

          <div className="disposer-item">
            <div className="disposer-item-image"></div>

            <div className="disposer-item-info">
              <div>
                <span>Type</span>
                <span>Location</span>
              </div>

              <div id="additional-info">
                <span>Weight</span>
                <span>12/03/2022</span>
                <span>Order Id</span>
              </div>
            </div>

            <div className="disposer-item-add">
              <button className="update">Update</button>
              <button className="delete">Delete</button>
            </div>
          </div>
        </div>

        <div id="disposer-view">
          <span className="title">Solid 354</span>
          <span className="image"></span>
          <span className="categories">
            <span className="categ-attributes"></span>
            <span className="categ-attributes"></span>
            <span className="categ-attributes"></span>
            <span className="categ-attributes"></span>
          </span>
          <span className="instructions"></span>
        </div>
      </section>
    </main>
  );
}
