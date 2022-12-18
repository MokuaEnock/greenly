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

        <div className="form-cont" id="locations">
          <span className="inputs">
            <label>Enter county</label>
            <select id="location">
              <option>Select sub-County</option>
              <option value="Nairobi">Nairobi</option>
              <option value="Kiambu">Kiambu</option>
              <option value="Kajiado">Kajiado</option>
              <option value="Machakos">Machakos</option>
            </select>
          </span>

          <span className="inputs">
            <label>Select your Sub-County</label>
            <select id="location">
              <option>Select sub-County</option>
              <option value="Nairobi">Nairobi</option>
              <option value="Kiambu">Kiambu</option>
              <option value="Kajiado">Kajiado</option>
              <option value="Machakos">Machakos</option>
            </select>
          </span>

          <span className="inputs">
            <label>Select your ward</label>
            <select id="location">
              <option>Select sub-County</option>
              <option value="Nairobi">Nairobi</option>
              <option value="Kiambu">Kiambu</option>
              <option value="Kajiado">Kajiado</option>
              <option value="Machakos">Machakos</option>
            </select>
          </span>
        </div>

        <div className="form-cont" id="address">
          <span className="inputs">
            <label>Your email address</label>
            <input type="email" placeholder="example@example.com" />
          </span>

          <span className="inputs">
            <label>Your phone number</label>
            <input
              type="tel"
              name="phone"
              id="phone"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{3}-[0-9]{3}"
              placeholder="254-712-345-678"
            />
          </span>

          <span className="inputs">
            <label>Enter your id number</label>
            <input type="number" placeholder="01234567" />
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

        <div id="form-buttons">
          <button type="reset" id="reset-profile">
            Reset Form
          </button>
          <button type="submit" id="submit-profile">
            Submit Form
          </button>
        </div>
      </form>
    </main>
  );
}
