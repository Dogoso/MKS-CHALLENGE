import { useAppDispatch } from "Hooks/hooks";
import { Product } from "Models/product";
import { addProductCart, removeOneProductCart } from "Store/Modules/Cart/reducers";
import styled from "styled-components";
import { breakSm } from "Styles/_breakpoints";

const Input = styled.div`
  display: flex;
  flex-direction: column;
`;

const InputTitle = styled.small`
  color: black;
  font-size: 10px;
  @media only screen and (max-width: ${breakSm}) {
    font-size: 14px;
  }
`;

const ValueWrapper = styled.span`
  color: black;
  border-top: 1px solid #00000020;
  border-bottom: 1px solid #00000020;
  font-size: 14px;
  padding: 0px 5px;
  @media only screen and (max-width: ${breakSm}) {
    padding: 3px;
  }
`;

const QtdButtonLeft = styled.button`
  border: 1px solid #00000020;
  background-color: white;
  cursor: pointer;
  border-bottom-left-radius: 5px;
  border-top-left-radius: 5px;
  @media only screen and (max-width: ${breakSm}) {
    transform: scale(1.3);
  }
`;

const QtdButtonRight = styled.button`
  border: 1px solid #00000020;
  background-color: white;
  cursor: pointer;
  border-bottom-right-radius: 5px;
  border-top-right-radius: 5px;
  @media only screen and (max-width: ${breakSm}) {
    transform: scale(1.3);
  }
`;

const Controllers = styled.div`
  width: 80px;
  min-width: 80px;
  max-width: 80px;
  @media only screen and (max-width: ${breakSm}) {
    width: 120px;
    min-width: 120px;
    max-width: 120px;
  }
`;

interface IQtdInput {
  product: Product,
  amount: number
}
function QtdInput({ product, amount }: IQtdInput) {

  const dispatch = useAppDispatch();

  function removeProduct() {
    dispatch(removeOneProductCart(product));
  }

  function addProduct() {
    dispatch(addProductCart(product));
  }

  return (
    <Input>
      <InputTitle>Qtd:</InputTitle>
      <Controllers>
        <QtdButtonLeft data-testid="minus" onClick={removeProduct}>-</QtdButtonLeft>
        <ValueWrapper>{amount}</ValueWrapper>
        <QtdButtonRight data-testid="plus" onClick={addProduct}>+</QtdButtonRight>
      </Controllers>
    </Input>
  )
}

export default QtdInput;