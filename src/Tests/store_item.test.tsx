import { fireEvent, render, screen } from "@testing-library/react";
import { Product } from "Models/product";
import StoreItem from "Pages/Home/Components/StoreItem/store_item";
import { Provider } from "react-redux";
import { addProductCart } from "Store/Modules/Cart/reducers";
import store from "Store/store";

const product = new Product(1, "Produto", "Tag", "Descrição", 0, "foto", new Date(), new Date());

describe("O item", () => {

    it("tem um botão disponível para adicionar ao carrinho", () => {
        render(<Provider store={store}>
            <StoreItem product={product} />
        </Provider>);
        const button = screen.getByRole("button");
        expect(button).toBeInTheDocument();
        expect(button).toBeEnabled();
    })

    it("é adicionado ao carrinho quando a ação de adicionar produto é chamada", () => {
        render(<Provider store={store}>
            <StoreItem product={product} />
        </Provider>);
        expect(store.getState().cart).toHaveLength(0);
        store.dispatch(addProductCart(product));
        expect(store.getState().cart).toHaveLength(1);
    })

});