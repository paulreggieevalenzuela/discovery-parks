import React from "react";
import { Input } from "reactstrap";

const FormInput = (props) => {
  const renderElement = (type) => {
    switch (type) {
      case "textarea":
        return <textarea className="form-control" {...props} />;
      default:
        return <Input className="form-input" {...props} />;
    }
  };

  return (
    <div className="form-container">
      <label className="form-label typo--bodySmall typo--600 typo--uppercase">
        {props.label}
      </label>
      {renderElement(props.type)}
    </div>
  );
};

export default FormInput;
