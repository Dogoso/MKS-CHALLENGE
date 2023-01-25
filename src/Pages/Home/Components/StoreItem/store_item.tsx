import { useAppDispatch } from "Hooks/hooks";
import { Product } from "Models/product";
import { addProductCart } from "Store/Modules/Cart/reducers";
import styled from "styled-components";
import { ReactComponent as ShoppingSvg } from "./src/shopping-bag.svg";

const Item = styled.div`
  box-shadow: 0px 0px 10px #00000050;
  width: 250px;
  min-width: 250px;
  max-width: 250px;
  height: 400px;
  min-height: 400px;
  max-height: 400px;
  border-radius: 20px;
  display: inline-flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 20px;
`;

const ShoppingButton = styled.button`
  border: none;
  background: #0F52BA;
  color: white;
  text-transform: uppercase;
  font-size: 16px;
  padding: 10px;
  border-bottom-right-radius: 20px;
  border-bottom-left-radius: 20px;
  cursor: pointer;
`;

const Description = styled.div`
  color: #000000AA;
  padding: 0px 10px;
  font-size: 12px;
`;

const Image = styled.img`
  height: 200px;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  object-fit: cover;
`;

const Price = styled.div`
  background-color: black;
  color: white;
  font-weight: bold;
  padding: 5px;
  border-radius: 5px;
  height: 20px;
`;

const Title = styled.h2`
  font-weight: normal;
  font-size: 20px;
`;

const MainInfo = styled.div`
  display: flex;
  align-items: center;
  padding: 0px 10px;
`;

interface IStoreItem {
  product: Product
}
function StoreItem({ product }: IStoreItem) {

  const dispatch = useAppDispatch();

  function addInCart() {
    dispatch(addProductCart(product));
  }

  return (
    <Item>
      <Image src={product.photo} alt={product.name} />
      <MainInfo>
        <Title>{product.name}</Title> <Price>R${product.price}</Price>
      </MainInfo>
      <Description>
        {product.description}
      </Description>
      <ShoppingButton onClick={addInCart}>
        <ShoppingSvg /> Comprar
      </ShoppingButton>
    </Item>
  )
}

export default StoreItem;