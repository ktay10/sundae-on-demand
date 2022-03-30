import {
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SummaryForm from "../SummaryForm";

describe("chkBx interaction with the btn", () => {
  test("chkbx should disabled by defaut and btn is disabled", () => {
    render(<SummaryForm />);
    const chkBx = screen.getByRole("checkbox", {
      name: /terms and conditions/i,
    });
    const btn = screen.getByRole("button", { name: /confirm order/i });

    expect(chkBx).not.toBeChecked();
    expect(btn).toBeDisabled();
  });

  test("checking chkbx should enable the btn. Then unchecking the chkbx should disable the btn", () => {
    render(<SummaryForm />);
    const chkBx = screen.getByRole("checkbox", {
      name: /terms and conditions/i,
    });
    const btn = screen.getByRole("button", { name: /confirm order/i });

    userEvent.click(chkBx);
    expect(btn).toBeEnabled();

    userEvent.click(chkBx);
    expect(btn).toBeDisabled();
  });

  test("popover appears when hovering on the label. Then unhover", async () => {
    render(<SummaryForm />);
    const nullPopover = screen.queryByText(/I agree/i);
    expect(nullPopover).not.toBeInTheDocument();

    const lbl = screen.getByText(/terms and conditions/i);
    userEvent.hover(lbl);
    const popover = screen.getByText(/I agree/i);
    expect(popover).toBeInTheDocument();

    userEvent.unhover(lbl);
    // use waitForElementToBeRemoved to wait for async actions as in this case of disappearing the Popover
    await waitForElementToBeRemoved(() => screen.queryByText(/I agree/i));
  });
});
