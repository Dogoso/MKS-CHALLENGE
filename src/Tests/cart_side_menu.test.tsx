import { render, screen } from "@testing-library/react";
import CartSideMenu from "Components/Cart/Components/CartSideMenu/cart_side_menu";
import * as hooks from "Hooks/hooks";
import { Product } from "Models/product";
import { Provider } from "react-redux";
import store from "Store/store";

const products = [
    new Product(0, "Nome", "Brand", "Descrição", 10, "Foto", new Date(), new Date()),
    new Product(1, "Nome Dois", "Brand", "Descrição", 10, "Foto", new Date(), new Date()),
    new Product(2, "Nome Tres", "Brand", "Descrição", 10, "Foto", new Date(), new Date()),
];

describe("O menu de carrinho", () => {

    beforeEach(() => {
        jest.spyOn(hooks, "useAppSelector").mockImplementation(() => products);
    })

    it("renderiza todos os produtos que estão no carrinho", () => {

        render(<Provider store={store}>
            <CartSideMenu closeFunc={() => undefined} />
        </Provider>);

        const itens = screen.getAllByRole("menuitem");
        expect(itens).toHaveLength(3);
    });

    it("mostra o valor total de forma correta para o usuário", () => {

        render(<Provider store={store}>
            <CartSideMenu closeFunc={() => undefined} />
        </Provider>);

        const price = screen.getByRole("note");
        expect(price.innerHTML).toEqual("R$30");
    });

})