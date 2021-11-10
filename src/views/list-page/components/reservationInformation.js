import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMoon,
  faRoad,
  faArrowRight,
  faCalendar,
} from "@fortawesome/free-solid-svg-icons";

import LabelInformation from "./labelInformation";

const ReservationInformation = () => {
  return (
    <div className="reservation__information">
      <div className="card">
        <div className="reservation__total flex jc-between ai-center fw">
          <div className="total-price__container">
            <p className="typo typo--uppercase typo--600">
              <span className="typo typo--400">$</span> 1808
            </p>
            <span className="typo typo--uppercase typo--italic">Total</span>
          </div>
          <div className="reservation__description">
            <p className="typo typo--medium">
              <FontAwesomeIcon icon={faMoon} color="blue" className="m-r-5" />
              16
              <span className="typo typo--caption typo--italic m-l-5">
                Nights
              </span>
            </p>
            <p className="typo typo--medium">
              <FontAwesomeIcon icon={faRoad} color="blue" className="m-r-5" />
              320
              <span className="typo typo--caption typo--italic m-l-5">Km</span>
            </p>
          </div>
        </div>
        <div className="reservation__date">
          <LabelInformation title="First Night" value="10 Sep 2020" />
          <FontAwesomeIcon icon={faArrowRight} color="blue" />
          <LabelInformation title="last Night" value="26 Sep 2020" />
        </div>
        <button className="cta next-step">Proceed to step 2</button>
        <div className="image-container">
          <img
            className="google-map"
            src="https://media.wired.com/photos/59269cd37034dc5f91bec0f1/master/pass/GoogleMapTA.jpg"
            alt="Google maps"
          />
        </div>
      </div>
      <a className="cta cta--underline cta-reset">
        <FontAwesomeIcon icon={faCalendar} className="m-r-5" />
        Reset road trip and start over
      </a>
    </div>
  );
};

export default ReservationInformation;
