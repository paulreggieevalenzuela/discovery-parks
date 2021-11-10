import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faChevronDown, faTrash, faRoad } from "@fortawesome/free-solid-svg-icons";

// Components
import RoomInformation from "./components/roomInformation";
import LabelInformation from "./components/labelInformation";
import ReservationInformation from "./components/reservationInformation";

const ListView = ({ data }) => {
  return (
    <section className="reservation">
      <ul className="list fw">
        {data.map((hotelData, i) => (
          <li key={i} className="list-item">
            <div className="list-item__hotel-information">
              <RoomInformation data={hotelData} />
              <div className="reservation__info">
                <div className="card card__date-info">
                  <div className="date fw flex jd-between">
                    <LabelInformation
                      title="Arrive"
                      value={hotelData.dateArrive}
                    />
                    <LabelInformation
                      title="Depart"
                      value={hotelData.dateDepart}
                    />
                  </div>
                  <div className="flex">
                    <div className="fw flex jd-between ai-center">
                      <FontAwesomeIcon icon={faMoon} />
                      <span className="typo typo--caption typo--400 m-l-10">
                        {hotelData.nights} Nights
                      </span>
                    </div>
                    <FontAwesomeIcon icon={faChevronDown} />
                  </div>
                </div>
                <div className="card card__guest-info">
                  <LabelInformation
                    title="Guests"
                    value={`${hotelData.guestCount} Guests`}
                  />
                  <FontAwesomeIcon icon={faChevronDown} />
                </div>
              </div>
            </div>
            <a className="cta cta--underline remove-item">
              <FontAwesomeIcon icon={faTrash} />
              <span className="typo typo--300">Remove stop</span>
            </a>
          </li>
        ))}
        <li>
          <a className="cta cta__add-stop typo typo--uppercase fw">
            Add another stop
          </a>
        </li>
      </ul>
      <ReservationInformation />
    </section>
  );
};

export default ListView;
