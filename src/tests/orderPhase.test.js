import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import App from "../App";

test("order phase for happy path", async () => {
  // render app
  render(<App />);
  // add scoop & topping
  // 3 vanilla scoops
  const vanillaInput = await screen.findByRole("spinbutton", {
    name: "Vanilla",
  });
  userEvent.clear(vanillaInput);
  userEvent.type(vanillaInput, "3");
  // M&Ms + gummi bears + hot fudge +
  const mAndMsCheckbox = await screen.findByRole("checkbox", {
    name: /M&Ms/i,
  });
  userEvent.click(mAndMsCheckbox);
  const gummiBearsCheckbox = await screen.findByRole("checkbox", {
    name: /Gummi bears/i,
  });
  userEvent.click(gummiBearsCheckbox);
  const hotFudgeCheckbox = await screen.findByRole("checkbox", {
    name: /hot fudge/i,
  });
  userEvent.click(hotFudgeCheckbox);

  // find and click order btn
  const orderSummaryButton = screen.getByRole("button", {
    name: /order summary/i,
  });
  userEvent.click(orderSummaryButton);

  // check summary information based on order
  const summaryHeading = screen.getByRole("heading", {
    name: /order summary/i,
  });
  expect(summaryHeading).toBeInTheDocument();

  const scoopsHeading = screen.getByRole("heading", { name: /Scoops: $6.00/i });
  expect(scoopsHeading).toBeInTheDocument();
  const toppingsHeading = screen.getByRole("heading", {
    name: /Toppings: $4.50/i,
  });
  expect(toppingsHeading).toBeInTheDocument();

  expect(screen.getByText("3 Vanilla")).toBeInTheDocument();
  expect(screen.getByText("M&Ms")).toBeInTheDocument();
  expect(screen.getByText("hot fudge")).toBeInTheDocument();
  expect(screen.getByText("gummi bears")).toBeInTheDocument();

  // accept terms & conditions, click button to confirm order
  const termsAndConditionsCheckbox = screen.getByRole("checkbox", {
    name: /terms and conditions/i,
  });
  userEvent.click(termsAndConditionsCheckbox);
  const orderButton = screen.getByRole("button", {
    name: /confirm order/i,
  });
  userEvent.click(orderButton);

  // confirm order # in confirmation page
  const thankYouHeader = await screen.findByRole("header", {
    name: /thank you/i,
  });
  expect(thankYouHeader).toBeInTheDocument();
  const orderNumber = screen.getByText(/order number/i);
  expect(orderNumber).toBeInTheDocument();

  // click "new order" btn in confirmation page
  const newOrderButton = screen.getByRole("button", {
    name: /new order/i,
  });
  userEvent.click(newOrderButton);

  // check scoops & toppings subtotals have been reset
  const scoopsTotal = screen.getByText("Scoops total: $0.00");
  expect(scoopsTotal).toBeInTheDocument();
  const toppingsTotal = screen.getByText("Toppings total: $0.00");
  expect(toppingsTotal).toBeInTheDocument();

  // wait for items to appear so that testing library doesnot make error
  await screen.findByRole("spinbutton", { name: "Vanilla" });
  await screen.findByRole("checkbox", { name: "Cherries" });
});
