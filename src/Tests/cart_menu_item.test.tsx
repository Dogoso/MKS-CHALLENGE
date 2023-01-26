import { render } from "@testing-library/react";
import CartMenuItem from "Components/Cart/Components/CartSideMenu/Components/CartMenuItem/cart_menu_item";
import { Product } from "Models/product";
import { Provider } from "react-redux";
import { addProductCart, removeAllOfProductCart, removeOneProductCart } from "Store/Modules/Cart/reducers";
import store from "Store/store";

const product = new Product(0, "Nome", "Brand", "Descrição", 10, "Foto", new Date(), new Date());

describe("O item", () => {

    it("é removido quando a ação de remover todos iguais os produtos é chamada", () => {
        render(<Provider store={store}>
            <CartMenuItem product={product} />
        </Provider>);
        store.dispatch(addProductCart(product));
        store.dispatch(addProductCart(product));
        store.dispatch(addProductCart(product));
        store.dispatch(addProductCart(product));
        expect(store.getState().cart).toHaveLength(4);
        store.dispatch(removeAllOfProductCart(product));
        expect(store.getState().cart).toHaveLength(0);
    });

    it("é removido quando a ação de remover um item do carrinho é chamada", () => {
        render(<Provider store={store}>
            <CartMenuItem product={product} />
        </Provider>);
        store.dispatch(addProductCart(product));
        store.dispatch(removeOneProductCart(product));
        expect(store.getState().cart).toHaveLength(0);
    });

})