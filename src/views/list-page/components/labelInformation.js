import React from "react";

const LabelInformation = ({ title, value }) => {
  return (
    <div className="fw">
      <p className="info__title typo typo--caption typo--600 typo--uppercase">
        {title}
      </p>
      <span className="typo typo--label typo--600 typo--uppercase">
        {value}
      </span>
    </div>
  );
};

export default LabelInformation;
