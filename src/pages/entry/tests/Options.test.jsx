import { render, screen } from "../../../test-utils/testing-library-utils";
import Options from "../Options";

test("display image of each scoop option from the Server", async () => {
  render(<Options optionType={`scoops`} />);

  // find the image
  const scoopImages = await screen.findAllByRole("img", { name: /scoop$/i }); // end of each alt text of the image should be "scoop" as defined in ScoopOption.jsx
  expect(scoopImages).toHaveLength(2); // count here is 2 as we define only 2 elements in the array of the mocks/handlers.js

  const altTextArray = scoopImages.map((image) => image.alt);
  expect(altTextArray).toEqual(["Chocolate scoop", "Vanilla scoop"]); // when working with arrays or object equality → use toEqual; while in strings and numbers → use toBe
});

test("display image of each topping option from the Server", async () => {
  render(<Options optionType="toppings" />);
  const toppingImages = await screen.findAllByRole("img", {
    name: /topping$/i,
  });
  expect(toppingImages).toHaveLength(4);
  const altTextArray = toppingImages.map((image) => image.alt);
  expect(altTextArray).toEqual([
    "Cherries topping",
    "M&Ms topping",
    "Hot fudge topping",
    "Gummi Bears topping",
  ]);
});
