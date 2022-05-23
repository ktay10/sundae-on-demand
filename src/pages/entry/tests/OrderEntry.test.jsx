import {
  render,
  screen,
  waitFor,
} from "../../../test-utils/testing-library-utils";
import OrderEntry from "../OrderEntry";
import { server } from "../../../mocks/server";
import { rest } from "msw";

test("handle errors for scoops & toppings routes", async () => {
  // reset handler to make it return error (code: 500)
  server.resetHandlers(
    rest.get("http://localhost:3030/scoops", (req, res, ctx) =>
      res(ctx.status(500))
    ),
    rest.get("http://localhost:3030/toppings", (req, res, ctx) =>
      res(ctx.status(500))
    )
  );

  render(<OrderEntry />);

  // Here we use waitFor because without it, there will be an error caused by that it gets executed once any one of the 2 alerts get to be rendered and does not wait for the other
  await waitFor(async () => {
    const alerts = await screen.findAllByRole("alert");
    expect(alerts).toHaveLength(2);
  });
});
