import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Stepper = () => {
  const [active, setActive] = React.useState(1);
  return (
    <div className="main-div">
      <div className="wrapper">
        <h3 className="text-center mb-2 text-danger">Stepper</h3>
        <p className="mb-5">Please click on the numbers</p>
        <div className="steppers">
          <div
            className={`${
              active === 1 || active === 2 || active === 3
                ? "bg_grey_dark"
                : "bg_grey_light"
            } stepper`}
            onClick={() => setActive(1)}
          >
            1
          </div>
          <div
            className={`slider ${
              active === 2 || active === 3 ? "bg_position" : ""
            }`}
          />
          <div
            className={`${
              active === 2 || active === 3 ? "bg_grey_dark" : "bg_grey_light"
            } stepper`}
            onClick={() => setActive(2)}
          >
            2
          </div>
          <div className={`slider ${active === 3 && "bg_position"}`} />
          <div
            className={`${
              active === 3 ? "bg_grey_dark" : "bg_grey_light"
            } stepper`}
            onClick={() => setActive(3)}
          >
            3
          </div>
        </div>
        <h5 className="mt-5">{`You're now on ${
          active === 1 ? "step 1" : active === 2 ? "step 2" : "step 3"
        }`}</h5>
        <div className="mt-3 d-flex justify-content-center">
          <span>
            <span className="text-primary">Contact us : </span>
            <a
              href="https://www.facebook.com/freeciphertext/"
              target="_blank"
              rel="noreferrer"
            >
              <img src="/fb-logo.png" alt="fb-logo.png" />
            </a>
            <a href="mailto:harish.git2177@gmail.com">
              <img src="Gmail-logo.jpg" alt="Gmail-logo.jpg" />
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Stepper;
