import React from "react";
import {
    ButtonToggle,
  } from 'reactstrap';

import FormInput from './form-input';

const Form = () => {
  return (
    <>
      <form>
        <div className="flex">
          <FormInput label="First Name" type="text" />
          <FormInput label="Last Name" type="text" />
        </div>
        <div className="flex">
          <FormInput label="Email" type="email" />
          <FormInput label="Phone" type="phone" />
        </div>
        <FormInput label="Message" type="textarea" rows="5" />
      </form>
      <ButtonToggle className="cta typo--uppercase" color="primary">
        Send inquiry
      </ButtonToggle>
    </>
  );
};

export default Form;
