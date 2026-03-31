import React from "react";

const Step = ({
  step,
  formData,
  handleChange,
  nextStep,
  prevStep,
  handleSubmit,
}) => {
  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="card">

        {step === 1 && (
          <>
            <h2>Customer Details</h2>

            <label>First Name:</label>
            <input
              id="first_name"
              value={formData.first_name}
              onChange={handleChange}
            />

            <label>Last Name:</label>
            <input
              id="last_name"
              value={formData.last_name}
              onChange={handleChange}
            />

            <button type="button" onClick={nextStep}>
              Next
            </button>
          </>
        )}

        {step === 2 && (
          <>
            <h2>Car Details</h2>

            <label>Car Model:</label>
            <input
              id="model"
              value={formData.model}
              onChange={handleChange}
            />

            <label>Car Price:</label>
            <input
              id="car_price"
              value={formData.car_price}
              onChange={handleChange}
            />

            <div className="btns">
              <button type="button" onClick={prevStep}>
                Previous
              </button>
              <button type="button" onClick={nextStep}>
                Next
              </button>
            </div>
          </>
        )}

        {step === 3 && (
          <>
            <h2>Payment Details</h2>

            <label>Credit Card Number:</label>
            <input
              id="card_info"
              value={formData.card_info}
              onChange={handleChange}
            />

            <label>Expiration Date:</label>
            <input
              id="expiry_date"
              value={formData.expiry_date}
              onChange={handleChange}
            />

            <div className="btns">
              <button type="button" onClick={prevStep}>
                Previous
              </button>
              <button type="submit">Submit</button>
            </div>
          </>
        )}

      </form>
    </div>
  );
};

export default Step;