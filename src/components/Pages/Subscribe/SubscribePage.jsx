import React, { useState } from "react";
import "./SubscribePage.css";
import filmGenresAndSubgenres from "./filmGenresAndSubgenres";
import states from "./states";

function SubscribePage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [subgenres, setSubgenres] = useState([]);

  //Email Validation
  const [emailError, setEmailError] = useState("");
  const validateEmail = (email) => {
    return email.includes("@");
  };

  const [cityError, setCityError] = useState("");
  const [stateError, setStateError] = useState("");

  // State variables for each form field
  const [userData, setUserData] = useState({
    genre: "",
    subgenre: "",
    phoneNumber: "",
    email: "",
    mailingAddress1: "",
    mailingAddress2: "",
    city: "",
    state: "",
    zip: "",
  });

  const handleGenreChange = (event) => {
    const genre = event.target.value;
    setUserData({
      ...userData,
      genre: genre,
      subgenre: "",
    });
    setSubgenres(filmGenresAndSubgenres[genre] || []);
    console.log(genre);
    console.log(userData);
  };

  // Handler for navigating to the next step
  const goToNextStep = (nextStep) => {
    if (nextStep == 2) {
      if (userData.email === "") {
        setEmailError("Please enter your email");
      } else if (!validateEmail(userData.email)) {
        setEmailError("Please enter a valid email");
      } else {
        setEmailError("");
        setCurrentStep(nextStep);
      }
    }

    if (nextStep == 3) {
      if (userData.city === "") {
        setCityError("Please enter your city");
      } else {
        setCityError("");
      }

      if (userData.state === "") {
        setStateError("Please select your state");
      } else {
        setStateError("");
      }

      if (userData.city !== "" && userData.state !== "") {
        setCurrentStep(nextStep);
      }
    }
  };

  // Form submission handler
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <main className="subscribe-page" id="main">
      <h2 className="subscribe-form__title">Subscribe to Our Newsletters</h2>
      <div className="subscribe-page__form-container">
        {/* stepper progress bar */}
        <div className="stepper">
          <div
            className={`stepper__step ${
              currentStep === 1 ? "stepper__step--active" : ""
            }`}>
            <div className="stepper__circle">1</div>
            <div className="stepper__label">Step 1</div>
          </div>
          <div
            className={`stepper__step ${
              currentStep === 2 ? "stepper__step--active" : ""
            }`}>
            <div className="stepper__circle">2</div>
            <div className="stepper__label">Step 2</div>
          </div>
          <div
            className={`stepper__step ${
              currentStep === 3 ? "stepper__step--active" : ""
            }`}>
            <div className="stepper__circle">3</div>
            <div className="stepper__label">Step 3</div>
          </div>
        </div>
        {isSubmitted ? (
          <div className="subscribe-form__card subscribe-form__card--success">
            <h2 className="subscribe-form__heading">Success!</h2>
            <p>Thank you for subscribing to our Newsletter.</p>
          </div>
        ) : (
          <form className="subscribe-page__form" onSubmit={handleSubmit}>
            {/* Step 1: Personal Preference */}
            {currentStep == 1 && (
              <section className="subscribe-form__step" id="step1">
                <legend className="subscribe-form__step-title">
                  Personal Preference
                </legend>
                <p className="subscribe-form__note">
                  Required fields are marked with an asterisk (
                  <abbr title="required" className="required__star">
                    *
                  </abbr>
                  ).
                </p>
                <div className="subscribe-form__field-group-step1">
                  <div className="subscribe-form__field">
                    <label htmlFor="genre" className="subscribe-form__label">
                      Favorite Genre:
                    </label>
                    <select
                      className="subscribe-form__input"
                      value={userData.genre}
                      onChange={handleGenreChange}>
                      <option value="">Select Genre</option>
                      {Object.keys(filmGenresAndSubgenres).map((genre) => (
                        <option key={genre} value={genre}>
                          {genre}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="subscribe-form__field">
                    <label htmlFor="subgenre" className="subscribe-form__label">
                      Subgenre:
                    </label>
                    <select
                      className="subscribe-form__input"
                      value={userData.subgenre}
                      onChange={(e) =>
                        setUserData({ ...userData, subgenre: e.target.value })
                      }
                      disabled={!userData.genre}>
                      <option value="">Select Subgenre</option>
                      {subgenres.map((subgenre) => (
                        <option key={subgenre} value={subgenre}>
                          {subgenre}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="subscribe-form__field">
                    <label
                      htmlFor="phoneNumber"
                      className="subscribe-form__label">
                      Phone Number:
                    </label>
                    <input
                      type="text"
                      id="phoneNumber"
                      className="subscribe-form__input"
                      value={userData.phoneNumber}
                      onChange={(e) =>
                        setUserData({
                          ...userData,
                          phoneNumber: e.target.value,
                        })
                      }
                      aria-label="input phone number"
                    />
                  </div>
                  <div className="subscribe-form__field">
                    <label htmlFor="email" className="subscribe-form__label">
                      Email:
                      <abbr title="required" className="required__star">
                        *
                      </abbr>
                    </label>
                    <div className="subscribe-form__input-validate">
                      <input
                        type="text"
                        id="email"
                        className="subscribe-form__input"
                        value={userData.email}
                        onChange={(e) =>
                          setUserData({ ...userData, email: e.target.value })
                        }
                        aria-label="input email"
                      />
                      {emailError && (
                        <div className="subscribe-form__error">
                          {emailError}
                        </div>
                      )}
                    </div>
                  </div>
                  <button
                    type="button"
                    className="subscribe-form__button"
                    onClick={() => goToNextStep(2)}
                    aria-label="Go to Next 2nd Step">
                    Next
                  </button>
                </div>
              </section>
            )}

            {/* Step 2: Address */}
            {currentStep == 2 && (
              <section
                className={`subscribe-form__step ${
                  currentStep == 2 ? "subscribe-form__step--active" : ""
                }`}
                id="step2">
                <fieldset className="mailing-address__container">
                  <legend className="subscribe-form__step-title">
                    Mailing address
                  </legend>
                  <p className="subscribe-form__note">
                    Required fields are marked with an asterisk (
                    <abbr title="required" className="required__star">
                      *
                    </abbr>
                    ).
                  </p>

                  <div className="subscribe-form__field-group">
                    <div className="subscribe-form__field">
                      <label
                        className="subscribe-page__usa-label"
                        htmlFor="mailing-address-1">
                        Street address:
                      </label>
                      <input
                        className="subscribe-form__input"
                        id="mailing-address-1"
                        name="mailing-address-1"
                        onChange={(e) =>
                          setUserData({
                            ...userData,
                            mailingAddress1: e.target.value,
                          })
                        }
                        aria-label="input mailing street address"
                      />
                    </div>
                    <div className="subscribe-form__field">
                      <label
                        className="subscribe-page__usa-label"
                        htmlFor="mailing-address-2">
                        Street address line 2:
                      </label>
                      <input
                        className="subscribe-form__input"
                        id="mailing-address-2"
                        name="mailing-address-2"
                        onChange={(e) =>
                          setUserData({
                            ...userData,
                            mailingAddress2: e.target.value,
                          })
                        }
                        aria-label="input mailing street address 2"
                      />
                    </div>
                    <div className="subscribe-form__field">
                      <label
                        className="subscribe-page__usa-label"
                        htmlFor="city">
                        City:
                        <abbr title="required" className="required__star">
                          *
                        </abbr>
                      </label>
                      <div className="subscribe-form__input-validate">
                        <input
                          className="subscribe-form__input"
                          id="city"
                          name="city"
                          onChange={(e) =>
                            setUserData({ ...userData, city: e.target.value })
                          }
                          aria-label="input city"
                        />
                        {cityError && (
                          <div className="subscribe-form__error">
                            {cityError}
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="subscribe-form__field">
                      <label
                        className="subscribe-page__usa-label"
                        htmlFor="state">
                        State:
                        <abbr title="required" className="required__star">
                          *
                        </abbr>
                      </label>
                      <div className="subscribe-form__input-validate">
                        <select
                          className="subscribe-form__input"
                          id="state"
                          name="state"
                          onChange={(e) =>
                            setUserData({ ...userData, state: e.target.value })
                          }>
                          <option value="">- Select -</option>
                          {states.map((state) => (
                            <option key={state.value} value={state.value}>
                              {state.label}
                            </option>
                          ))}
                        </select>
                        {stateError && (
                          <div className="subscribe-form__error">
                            {stateError}
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="subscribe-form__field">
                      <label
                        className="subscribe-page__usa-label"
                        htmlFor="zip">
                        ZIP code:
                      </label>
                      <input
                        className="subscribe-form__input"
                        id="zip"
                        name="zip"
                        pattern="[\d]{5}(-[\d]{4})?"
                        onChange={(e) =>
                          setUserData({ ...userData, zip: e.target.value })
                        }
                        aria-label="input city"
                      />
                    </div>
                    <button
                      type="button"
                      className="subscribe-form__button"
                      onClick={() => goToNextStep(3)}
                      aria-label="Go to next 3rd step">
                      Next
                    </button>
                  </div>
                </fieldset>
              </section>
            )}

            {/* Step 3: Confirmation */}
            {currentStep == 3 && (
              <section className="subscribe-form__step" id="step3">
                <h3 className="subscribe-form__heading">Confirmation</h3>
                <ul className="subscribe-form__summary">
                  {userData.genre && (
                    <li className="subscribe-form__summary-item">
                      <strong>Genre:</strong> {userData.genre}
                    </li>
                  )}
                  {userData.subgenre && (
                    <li className="subscribe-form__summary-item">
                      <strong>Subgenre:</strong> {userData.subgenre}
                    </li>
                  )}
                  <li className="subscribe-form__summary-item">
                    <strong>Email:</strong> {userData.email}
                  </li>
                  {userData.phoneNumber && (
                    <li className="subscribe-form__summary-item">
                      <strong>Phone Number:</strong> {userData.phoneNumber}
                    </li>
                  )}
                  {userData.mailingAddress1 && (
                    <li className="subscribe-form__summary-item">
                      <strong>Street address:</strong>{" "}
                      {userData.mailingAddress1}
                    </li>
                  )}
                  {userData.mailingAddress2 && (
                    <li className="subscribe-form__summary-item">
                      <strong>Street address line2:</strong>{" "}
                      {userData.mailingAddress2}
                    </li>
                  )}
                  <li className="subscribe-form__summary-item">
                    <strong>City:</strong> {userData.city}
                  </li>
                  <li className="subscribe-form__summary-item">
                    <strong>State:</strong> {userData.state}
                  </li>
                  {userData.zip && (
                    <li className="subscribe-form__summary-item">
                      <strong>Zip Code:</strong> {userData.zip}
                    </li>
                  )}
                </ul>
                <button
                  type="submit"
                  className="subscribe-form__submit-btn"
                  onClick={handleSubmit}
                  aria-label="Submit subscription form">
                  Submit
                </button>
              </section>
            )}
          </form>
        )}
      </div>
    </main>
  );
}

export default SubscribePage;
