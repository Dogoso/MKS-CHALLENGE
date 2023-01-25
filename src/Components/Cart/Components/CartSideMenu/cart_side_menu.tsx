import { useAppSelector } from "Hooks/hooks";
import { useDispatch } from "react-redux";
import { resetCart } from "Store/Modules/Cart/reducers";
import styled from "styled-components";
import CloseButton from "../CloseButton/close_button";
import CartMenuItem from "./Components/CartMenuItem/cart_menu_item";

const Menu = styled.section`
  position: fixed;
  top: 0px;
  height: 100vh;
  width: 500px;
  right: 0px;
  background-color: #0F52BA;
  box-shadow: 0px -10px 10px #000000BA;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: default;
`;

const MenuHeader = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const HeaderTitle = styled.h1`
  color: white;
  text-align: start;
`;

const MenuBody = styled.div`
  padding: 20px;
  min-height: 290px;
  max-height: 290px;
  height: 290px;
  overflow-y: scroll;
`;

const MenuFooter = styled.button`
  background-color: black;
  color: white;
  height: 70px;
  width: 100%;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
`;

const Total = styled.div`
  padding: 0px 30px;
  font-weight: bold;
  font-size: 24px;
  display: flex;
  justify-content: space-between;
  align-items: end;
`;

interface ICartSideMenu {
  closeFunc: React.Dispatch<React.SetStateAction<boolean>>
}
function CartSideMenu({ closeFunc }: ICartSideMenu) {

  const allProducts = useAppSelector(state => state.cart);
  const products = useAppSelector(state => Array.from(new Set(state.cart)));
  const totalPrice = allProducts.reduce((prev, cur) => Number(prev) + Number(cur.price), 0);
  const dispatch = useDispatch();

  function confirmBuy() {
    alert("Compra efetuada!");
    dispatch(resetCart());
  }

  return (
    <Menu>
      <MenuHeader>
        <HeaderTitle>
          Carrinho <br />
          de compras
        </HeaderTitle>
        <CloseButton onClick={() => closeFunc(false)} />
      </MenuHeader>
      <MenuBody>
        {products.map(product => <CartMenuItem product={product} />)}
      </MenuBody>
      <Total>
        <div>Total:</div> <div>R${totalPrice}</div>
      </Total>
      <MenuFooter onClick={confirmBuy}>
        Finalizar Compra
      </MenuFooter>
    </Menu>
  )
}

export default CartSideMenu;