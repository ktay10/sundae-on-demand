import React, { useState } from "react";
import { OverlayTrigger, Popover } from "react-bootstrap";

const SummaryForm = () => {
  const [isChkBxChecked, setIsChkBxChecked] = useState(false);

  const TermsAndConditions = () => (
    <Popover id="popover-basic">
      <Popover.Header as="h3">T&Cs</Popover.Header>
      <Popover.Body>I agree</Popover.Body>
    </Popover>
  );

  const onCheck = (e) => {
    setIsChkBxChecked((prev) => !prev);
  };

  return (
    <div>
      <OverlayTrigger trigger={"hover"} overlay={TermsAndConditions}>
        <label>
          <input type={"checkbox"} onChange={onCheck}></input>
          {"Terms and Conditions"}
        </label>
      </OverlayTrigger>
      <button disabled={!isChkBxChecked}>{`Confirm Order`}</button>
    </div>
  );
};

export default SummaryForm;
