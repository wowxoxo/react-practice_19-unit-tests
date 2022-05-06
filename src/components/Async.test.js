import { render, screen } from "@testing-library/react";
import Async from "./Async";

describe("Async component", () => {
  test("should renders posts if request succeeds", () => {
    render(<Async />);

    const listEls = screen.queryAllByRole("listitem");
    expect(listEls.length).not.toBeNull();
  });

  test("should renders posts if request succeeds 2", async () => {
    render(<Async />);

    const listEls = await screen.findAllByRole("listitem");
    expect(listEls).not.toHaveLength(0);
  });

  test("should renders posts if request succeeds 3", async () => {
    window.fetch = jest.fn();
    window.fetch.mockResolvedValue({
      json: async () => [{ id: "p1", title: "Post one" }]
    });
    render(<Async />);

    const listEls = await screen.findAllByRole("listitem");
    expect(listEls).not.toHaveLength(0);
  });
});
