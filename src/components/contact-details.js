import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faBuilding } from '@fortawesome/free-solid-svg-icons';

const ContactDetails = ({ data }) => (
  <div className="contact-details">
    <h3 className="typo typo--title typo--700 typo--uppercase">Contact us</h3>
    <p className="typo typo--subTitle typo--600 typo--uppercase">
      Our contact details
    </p>
    <div className="contact-details__description">
      <p className="typo typo--body typo--600 typo--uppercase">
        <FontAwesomeIcon icon={faPhone} /> 
        <span>{data.contact}</span>
      </p>
      <p className="typo typo--bodySmall typo--300">
        <FontAwesomeIcon icon={faBuilding} />
        <span>{data.address}</span>
      </p>
    </div>
  </div>
);

export default ContactDetails;
