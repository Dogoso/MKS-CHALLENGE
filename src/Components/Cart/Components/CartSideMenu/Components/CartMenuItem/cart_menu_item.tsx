import CloseButton from "Components/Cart/Components/CloseButton/close_button";
import { useAppDispatch, useAppSelector } from "Hooks/hooks";
import { Product } from "Models/product";
import { removeAllOfProductCart } from "Store/Modules/Cart/reducers";
import styled from "styled-components";
import { breakSm } from "Styles/_breakpoints";
import QtdInput from "./Components/QtdInput/qtd_input";

const Item = styled.div`
  background-color: white;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100px;
  padding: 0px 20px;
  margin-bottom: 20px;
  @media only screen and (max-width: ${breakSm}) {
    height: 350px;
    max-height: 400px;
    flex-direction: column;
    justify-content: center;
  }
`;

const ItemName = styled.span`
  color: black;
  margin-right: 20px;
  @media only screen and (max-width: ${breakSm}) {
    font-size: 24px;
  }
`;

const Value = styled.span`
  color: black;
  font-weight: bold;
  @media only screen and (max-width: ${breakSm}) {
    color: white;
    background-color: #373737;
    border-radius: 5px;
    padding: 5px;
    display: flex;
    align-items: center;
  }
`;

const CloseWrapper = styled.div`
  position: relative;
  top: -45px;
  right: -375px;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Image = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  margin-right: 10px;
  @media only screen and (max-width: ${breakSm}) {
    width: 200px;
    height: 200px;
  }
`;

interface ICartMenuItem {
  product: Product
}
function CartMenuItem({ product }: ICartMenuItem) {

  const curAmount = useAppSelector(state => state.cart.filter(cartProduct => cartProduct.id === product.id));
  const dispatch = useAppDispatch();
  const quantidade = curAmount.length;

  function removeAllProducts() {
    dispatch(removeAllOfProductCart(product));
  }

  return (
    <Item>
      <CloseWrapper>
        <CloseButton onClick={removeAllProducts} />
      </CloseWrapper>
      <Image src={product.photo} alt={product.name} />
      <ItemName>
        {product.name}
      </ItemName>
      <Wrapper>
        <QtdInput product={product} amount={quantidade} />
        <Value>R${product.price}</Value>
      </Wrapper>
    </Item>
  )
}

export default CartMenuItem;