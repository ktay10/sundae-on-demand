import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import SummaryForm from "../SummaryForm";

describe("chkBx interaction with the btn", () => {
  afterEach(cleanup); // clean up the DOM after each test

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

    fireEvent.click(chkBx);
    expect(btn).toBeEnabled();

    fireEvent.click(chkBx);
    expect(btn).toBeDisabled();
  });
});
