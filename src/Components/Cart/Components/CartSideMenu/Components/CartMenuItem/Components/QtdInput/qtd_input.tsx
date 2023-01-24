import styled from "styled-components";

const Input = styled.div`
  display: flex;
  flex-direction: column;
`;

const InputTitle = styled.small`
  color: black;
  font-size: 10px;
`;

const ValueWrapper = styled.span`
  color: black;
  border-top: 1px solid #00000020;
  border-bottom: 1px solid #00000020;
  font-size: 14px;
  padding: 0px 5px;
`;

const QtdButtonLeft = styled.button`
  border: 1px solid #00000020;
  background-color: white;
  cursor: pointer;
  border-bottom-left-radius: 5px;
  border-top-left-radius: 5px;
`;

const QtdButtonRight = styled.button`
  border: 1px solid #00000020;
  background-color: white;
  cursor: pointer;
  border-bottom-right-radius: 5px;
  border-top-right-radius: 5px;
`;

const Controllers = styled.div`
  width: 80px;
  min-width: 80px;
  max-width: 80px;
`;

interface IQtdInput {
  value: number,
  onChange: React.Dispatch<React.SetStateAction<number>>
}
function QtdInput({ value, onChange }: IQtdInput) {
  return (
    <Input>
      <InputTitle>Qtd:</InputTitle>
      <Controllers>
        <QtdButtonLeft onClick={() => value > 1 ? onChange(value-1) : undefined}>-</QtdButtonLeft>
        <ValueWrapper>{value}</ValueWrapper>
        <QtdButtonRight onClick={() => onChange(value+1)}>+</QtdButtonRight>
      </Controllers>
    </Input>
  )
}

export default QtdInput;