import styled from "styled-components";
import { ReactComponent as ShoppingSvg } from "./src/shopping-bag.svg";

const Item = styled.div`
  box-shadow: 0px 0px 10px #00000050;
  width: 250px;
  height: 300px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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

const Image = styled.div`
  height: 130px;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
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
  imagem: string,
  titulo: string,
  preco: number,
  descricao: string
}
function StoreItem({ imagem, titulo, preco, descricao }: IStoreItem) {
  return (
    <Item>
      <Image>
        <img src={imagem} alt={titulo} />
      </Image>
      <MainInfo>
        <Title>{titulo}</Title> <Price>R${preco}</Price>
      </MainInfo>
      <Description>
        {descricao}
      </Description>
      <ShoppingButton>
        <ShoppingSvg /> Comprar
      </ShoppingButton>
    </Item>
  )
}

export default StoreItem;