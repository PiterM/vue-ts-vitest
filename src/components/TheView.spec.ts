import { render, screen } from "@testing-library/vue";
import { describe, it, expect } from "vitest";
import TheView from "./TheView.vue";

describe("TheView", () => {
  const viewText = "Hello from inside a view";

  it("render span correctly", async () => {
    const viewId = "viewId";
    render(TheView, {
      props: { element: "span", id: viewId },
      slots: { default: viewText },
    });

    const view = await screen.findByText(viewText);

    expect(view.id).toBe(viewId);
    expect(view.innerHTML).toBe(viewText);
    expect(view.nodeName).toBe("SPAN");
  });

  it("snap shot matches", () => {
    const wrapper = render(TheView, { props: { element: "div" } });
    expect(wrapper).toMatchSnapshot();
  });
});
