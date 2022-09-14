import { render, screen, fireEvent } from "@testing-library/vue";
import { describe, it, expect } from "vitest";
import MyPokemon from "../ApiResponse.vue";

describe("My Pokemon", () => {
  it("render span correctly", async () => {
    render(MyPokemon);

    const pokemon = await screen.findByText("Toggle Pokemons");
    await fireEvent.click(pokemon);
    const value1 = await screen.findByText("bulbasaur");
    await fireEvent.click(pokemon);
    const value2 = screen.queryByText("bulbasaur");

    expect(value1.innerHTML).toBe("bulbasaur");
    expect(value2).toBeNull();
  });
});
