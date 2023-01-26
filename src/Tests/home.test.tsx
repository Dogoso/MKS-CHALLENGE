import Home from "Pages/Home/home";
import { render, screen } from "@testing-library/react";
import store from "Store/store";
import { Provider } from "react-redux";
import React from "react";
import * as hooks from "Hooks/hooks";

const resp = {
    "products": [
        {
            "id": 8,
            "name": "Headset Cloud Stinger",
            "brand": "HyperX",
            "description": "O HyperX Cloud Stinger™ é o headset ideal para jogadores que procuram leveza e conforto, qualidade de som superior e maior praticidade.",
            "photo": "https://mks-sistemas.nyc3.digitaloceanspaces.com/products/hyperxcloudstinger.webp",
            "price": "600.00",
            "createdAt": "2023-01-23T18:17:04.771Z",
            "updatedAt": "2023-01-23T18:17:04.771Z"
        }
    ],
    "count": 1
};


describe("A Home", () => {

    beforeEach(() => {
        jest.spyOn(React, "useEffect").mockImplementation(() => undefined);
    })

    it("renderiza o shimmer skeleton durante o carregamento", () => {
        jest.spyOn(hooks, "useAppSelector").mockImplementation(() => []);
        render(
            <Provider store={store}>
                <Home />
            </Provider>
        );
        const products = screen.getByTestId("shimmer");
        expect(products).toBeInTheDocument();
    })

    it("renderiza os itens da loja após carregamento", () => {
        jest.spyOn(hooks, "useAppSelector").mockImplementation(() => resp.products);
        render(
            <Provider store={store}>
                <Home />
            </Provider>
        );
        const products = screen.getByTestId("products");
        expect(products).toBeInTheDocument();
    });

});