import { render, screen, fireEvent } from "@testing-library/vue";
import { describe, it, expect } from "vitest";
import MyPokemon from "../ApiResponse.vue";

describe("My Pokemon", () => {
  it("render span correctly", async () => {
    //arrange
    render(MyPokemon);

    const pokemon = await screen.findByText("Get Pokemon");
    await fireEvent.click(pokemon);
    const value = await screen.findByText("bulbasaur");

    //asert
    expect(value.innerHTML).toBe("bulbasaur");
  });
});
