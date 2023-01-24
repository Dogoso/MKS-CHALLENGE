import CloseButton from "Components/Cart/Components/CloseButton/close_button";
import { useAppDispatch, useAppSelector } from "Hooks/hooks";
import { Product } from "Models/product";
import { removeAllOfProductCart } from "Store/Modules/Cart/reducers";
import styled from "styled-components";
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
`;

const ItemName = styled.span`
  color: black;
  margin-right: 20px;
`;

const Value = styled.span`
  color: black;
  font-weight: bold;
`;

const CloseWrapper = styled.div`
  position: relative;
  top: -45px;
  right: -375px;
`;

const Image = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  margin-right: 10px;
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
      <QtdInput product={product} amount={quantidade} />
      <Value>R${product.price}</Value>
    </Item>
  )
}

export default CartMenuItem;