import { render, screen } from "@testing-library/react";
import Header from "Components/Header/header";
import React from "react";
import { Provider } from "react-redux";
import store from "Store/store";

describe("O header", () => {
  
    it("renderiza corretamente o botão de carrinho", () => {
      render(
        <Provider store={store}>
          <Header />
        </Provider>
      );
      const cartButton = screen.getByRole("button");
      expect(cartButton).toBeInTheDocument();
    })

    it("renderiza o carrinho corretamente quando o botão de carrinho é clicado", () => {
        jest.spyOn(React, "useState").mockImplementation(() => [true, () => true]);
        render(
          <Provider store={store}>
            <Header />
          </Provider>
        );
        const cart = screen.getByRole("menu");
        expect(cart).toBeInTheDocument();
      })

});