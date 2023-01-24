import { useAppSelector } from "Hooks/hooks";
import { useState } from "react";
import styled from "styled-components";
import CartSideMenu from "./Components/CartSideMenu/cart_side_menu";
import { ReactComponent as CartSvg } from "./src/cart.svg";

const OpenButton = styled.button`
  border: none;
  background-color: white;
  border-radius: 10px;
  width: 100px;
  height: 50px;
  cursor: pointer;
`;

const NumberItens = styled.span`
  font-size: 24px;
  font-weight: bold;
  margin-left: 5px;
`;

function Cart() {

  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const cart = useAppSelector(state => state.cart);

  return <>
    <OpenButton onClick={() => setIsCartOpen(true)}>
      <CartSvg />
      <NumberItens>
        {cart.length}
      </NumberItens>
    </OpenButton>
    {isCartOpen && <CartSideMenu closeFunc={setIsCartOpen} />}
  </>
}

export default Cart;