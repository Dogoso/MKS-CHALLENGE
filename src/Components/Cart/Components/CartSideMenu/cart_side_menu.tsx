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
  padding: 40px;
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
        <CartMenuItem imagem="nenhuma" nome="Ipad boladao" valor={100} quantidade={0} />
      </MenuBody>
      <Total>
        <div>Total:</div> <div>R$???</div>
      </Total>
      <MenuFooter>
        Finalizar Compra
      </MenuFooter>
    </Menu>
  )
}

export default CartSideMenu;