import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faBed,
  faMoon,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";

// Common Components
import Badge from "../../../components/badge";

const RoomInformation = ({ data }) => {
  return (
    <div className="card card__room-information fw m-r-15">
      <div className="image-container">
        <img src={data.image.url} alt={data.image.alt} />
      </div>
      <div className="card__description flex fd-column jc-between p-x-15 fw">
        <div>
          <h3 className="typo typo--headline typo--uppercase typo--800">
            {data.name}
          </h3>
          <p className="typo typo--bodySmall typo--uppercase typo--600">
            {data.state}
            <span className="typo typo--caption typo--capitalize m-l-5">
              {data.city}
            </span>
          </p>
        </div>
        <div>
          <p className="typo typo--smallCaption typo--600 typo--uppercase">
            {data.roomType}
          </p>
          <p className="typo typo--caption typo--600 typo--uppercase">
            {data.roomName}
          </p>
        </div>
        <div className="flex jc-between ai-center">
          <Badge>
            <FontAwesomeIcon icon={faBed} color="blue" className="m-r-5" />
            <span className="typo typo--caption typo--600">Sleeps {data.headCount}</span>
          </Badge>
          <div className="card__price flex ai-start typo typo--800">
            <span>$</span> {data.price}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomInformation;
