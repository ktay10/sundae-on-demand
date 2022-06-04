import "./App.css";
import { useState } from "react";

import Container from "react-bootstrap/Container";
import OrderEntry from "./pages/entry/OrderEntry";
import OrderConfirmation from "./pages/orderConfirmation/OrderConfirmation";
import OrderSummary from "./pages/summary/OrderSummary";

import { OrderDetailsProvider } from "./contexts/OrderDetails";
import { ORDER_PHASES } from "./constants/index";

function App() {
  // orderPhase can be either: 'inProgress', 'review, or 'completed'
  const [orderPhase, setOrderPhase] = useState(ORDER_PHASES.IN_PROGRESS);

  let Component = OrderEntry;
  switch (orderPhase) {
    case ORDER_PHASES.IN_PROGRESS:
      Component = OrderEntry;
      break;
    case ORDER_PHASES.REVIEW:
      Component = OrderSummary;
      break;
    case ORDER_PHASES.COMPLETED:
      Component = OrderConfirmation;
      break;
    default:
      break;
  }

  return (
    <OrderDetailsProvider>
      <Container>{<Component setOrderPhase={setOrderPhase} />}</Container>
    </OrderDetailsProvider>
  );
}

export default App;
