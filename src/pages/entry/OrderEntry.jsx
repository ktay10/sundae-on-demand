import React from "react";
import Options from "./Options";
import { useOrderDetails } from "../../contexts/OrderDetails";

const OrderEntry = () => {
  const [orderDetails] = useOrderDetails();

  const grandTotal = orderDetails?.totals?.grandTotal;
  return (
    <div>
      <Options optionType="scoops" />
      <Options optionType="toppings" />
      <h2>Grand Total: {grandTotal}</h2>
    </div>
  );
};

export default OrderEntry;
