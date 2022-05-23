import "./App.css";
// import SummaryForm from "./pages/summary/SummaryForm";
// import Options from "./pages/entry/Options";

import Container from "react-bootstrap/Container";
import OrderEntry from "./pages/entry/OrderEntry";
import { OrderDetailsProvider } from "./contexts/OrderDetails";

function App() {
  return (
    <Container>
      <OrderDetailsProvider>
        {/* Summary page and entry page need provider */}
        <OrderEntry />
      </OrderDetailsProvider>
      {/* Confirmation page does not need provider */}
    </Container>
    // <div className="App">
    //   <Options />
    //   <SummaryForm />
    // </div>
  );
}

export default App;
