import React from "react";
import Options from "./Options";
import { useOrderDetails } from "../../contexts/OrderDetails";
import { Button } from "react-bootstrap";
import { ORDER_PHASES } from "../../constants";

const OrderEntry = ({ setOrderPhase }) => {
  const [orderDetails] = useOrderDetails();

  const grandTotal = orderDetails?.totals?.grandTotal;

  // disable order button if there aren't any scoops in order
  const orderDisabled = orderDetails.totals.scoops === "$0.00";

  return (
    <div>
      <h1>Design Your Sundae!</h1>
      <Options optionType="scoops" />
      <Options optionType="toppings" />
      <h2>Grand Total: {grandTotal}</h2>
      <Button
        disabled={orderDisabled}
        onClick={() => setOrderPhase(ORDER_PHASES.REVIEW)}
      >
        Order Sunday!
      </Button>
    </div>
  );
};

export default OrderEntry;
