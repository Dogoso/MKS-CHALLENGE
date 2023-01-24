import CloseButton from "Components/Cart/Components/CloseButton/close_button";
import { useEffect } from "react";
import { useState } from "react";
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

interface ICartMenuItem {
  nome: string,
  valor: number,
  imagem: string,
  quantidade: number
}
function CartMenuItem({ imagem, nome, valor }: ICartMenuItem) {

  const [quantidade, setQuantidade] = useState<number>(1);

  return (
    <Item>
      <CloseWrapper>
        <CloseButton onClick={() => setQuantidade(0)} />
      </CloseWrapper>
      <img src={imagem} alt={nome} />
      <ItemName>
        {nome}
      </ItemName>
      <QtdInput value={quantidade} onChange={setQuantidade} />
      <Value>R${valor}</Value>
    </Item>
  )
}

export default CartMenuItem;