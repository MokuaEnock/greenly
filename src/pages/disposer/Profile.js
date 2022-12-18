import "./profile.css";

export default function Profile() {
  return (
    <main id="poser-profile">
      <section id="profile-title">
        <span id="profile-head">We would like to get some data from you.</span>
        <span id="profile-par">Read our privacy policy</span>
      </section>

      <form id="profile-form">
        <div className="form-cont">
          <span className="inputs">
            <label>First name</label>
            <input type="text" placeholder="FIrst name" />
          </span>
          <span className="inputs">
            <label>Second name</label>
            <input type="text" placeholder="Second name" />
          </span>
          <span className="inputs">
            <label>Last name</label>
            <input type="text" placeholder="Last name" />
          </span>
        </div>

        <div className="form-cont">
          <span className="inputs">
            <label>Select your gender.</label>
            <select id="age">
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </span>

          <span className="inputs">
            <label>Enter your date of birth.</label>
            <input type="date" id="birthday" name="birthday" />
          </span>
        </div>

        <div className="form-cont">
          <span className="inputs">
            <label>Enter county</label>
            <select></select>
          </span>
          <span className="inputs">
            <label>Second name</label>
            <input type="text" placeholder="Second name" />
          </span>
          <span className="inputs">
            <label>Last name</label>
            <input type="text" placeholder="Last name" />
          </span>
        </div>

        <div className="form-cont">
          <span className="inputs">
            <label>Select your gender.</label>
            <select id="age">
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </span>
          <span className="inputs">
            <label>Second name</label>
            <input type="text" placeholder="Second name" />
          </span>
          <span className="inputs">
            <label>Last name</label>
            <input type="text" placeholder="Last name" />
          </span>
        </div>

        <div className="form-cont">
          <span className="inputs">
            <label>First name</label>
            <input type="text" placeholder="FIrst name" />
          </span>
          <span className="inputs">
            <label>Second name</label>
            <input type="text" placeholder="Second name" />
          </span>
          <span className="inputs">
            <label>Last name</label>
            <input type="text" placeholder="Last name" />
          </span>
        </div>
      </form>
    </main>
  );
}
