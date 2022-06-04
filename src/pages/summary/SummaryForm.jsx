import React, { useState } from "react";
import { Button, Form, OverlayTrigger, Popover } from "react-bootstrap";
import { ORDER_PHASES } from "../../constants";

const SummaryForm = ({ setOrderPhase }) => {
  const [isChkBxChecked, setIsChkBxChecked] = useState(false);

  function handleSubmit(ev) {
    ev.preventDefault();

    // pass along to the next phase
    // the next page will handle submitting order from context

    setOrderPhase(ORDER_PHASES.COMPLETED);
  }

  const newPopover = (
    <Popover id="termsandconditions-popover">
      {/* <Popover.Content>No real ice cream will be delivered</Popover.Content> */}
      <Popover.Body>No real ice cream will be delivered</Popover.Body>
    </Popover>
  );

  const onCheck = (e) => {
    // setIsChkBxChecked((prev) => !prev);
    setIsChkBxChecked(e.target.checked);
  };

  const checkBoxLabel = (
    <span>
      I agree to
      <OverlayTrigger placement="right" overlay={newPopover}>
        <span style={{ color: "blue" }}>Terms and Conditions</span>
      </OverlayTrigger>
    </span>
  );

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="terms-and-conditions">
        <Form.Check
          type="checkbox"
          checked={isChkBxChecked}
          onChange={onCheck}
          label={checkBoxLabel}
        />
      </Form.Group>
      <Button variant="primary" type="submit" disabled={!isChkBxChecked}>
        Confirm order
      </Button>
    </Form>
  );
};

export default SummaryForm;
