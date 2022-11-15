import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import NewCategory from "../components/NewCategory";
import { Provider } from "react-redux";
import { store } from "../store";
import Category from "../components/Category";

const newRender = (component) =>
  render(<Provider store={store}>{component}</Provider>);

describe("New Category Component", () => {
  it("should test that a category was added successfully", async function () {
    // eslint-disable-next-line testing-library/render-result-naming-convention
    const categoryBox = newRender(<NewCategory />);
    const input = await categoryBox.findByPlaceholderText("New Category");

    user.type(input, "Shoes");
    const addBtn = await screen.findByText("Add Category");
    user.click(addBtn);
    const categoryList = newRender(<Category />);
    const categories = await categoryList.findAllByTestId("categoryType");
    expect(categories.length).toBe(2);
  });
});
