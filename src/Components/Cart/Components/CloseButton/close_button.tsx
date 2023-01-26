import styled from "styled-components";

const Button = styled.button`
  background-color: black;
  width: 30px;
  height: 30px;
  border-radius: 15px;
  color: white;
  cursor: pointer;
`;

interface ICloseButton {
    onClick: Function
}
function CloseButton({ onClick }: ICloseButton) {

    function click() {
        onClick();
    }

    return <Button data-testid="close_button" onClick={click}>X</Button>
}

export default CloseButton;