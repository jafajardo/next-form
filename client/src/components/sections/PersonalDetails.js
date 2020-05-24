import React from "react";

function PersonalDetails({ values, handleChange, nextStep }) {
  return (
    <form>
      <div className="row">
        <div className="u-full-width">
          <label htmlFor="firstName">First Name</label>
          <input
            className="u-full-width"
            type="text"
            name="firstName"
            id="firstName"
            value={values.firstName}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="row">
        <div className="u-full-width">
          <label htmlFor="lastName">Last Name</label>
          <input
            className="u-full-width"
            type="text"
            name="lastName"
            id="lastName"
            value={values.lastName}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="row">
        <div className="u-full-width">
          <label htmlFor="email">Email</label>
          <input
            className="u-full-width"
            type="email"
            name="email"
            id="email"
            value={values.email}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="row">
        <div className="u-full-width">
          <label htmlFor="mobile">Mobile</label>
          <input
            className="u-full-width"
            type="text"
            name="mobile"
            id="mobile"
            value={values.mobile}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="u-full-width button-box">
        <button
          className="button button-primary next-section"
          onClick={nextStep}
        >
          Next Section
        </button>
      </div>
    </form>
  );
}

export default PersonalDetails;
