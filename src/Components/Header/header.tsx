import Cart from "Components/Cart/cart";
import styled from "styled-components";

const SHeader = styled.header`
	background-color: #0F52BA;
  padding: 0px;
  color: white;
  display: flex;
  justify-content: space-between;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  padding: 0px;
  margin-left: 50px;
`;

const SH1 = styled.h1`
  margin-right: 5px;
`;

const SSpan = styled.span`
  font-weight: 100;
`;

const CartWrapper = styled.div`
  height: 100px;
  display: flex;
  align-items: center;
  margin-right: 50px;
`;

function Header() {
  return (
    <SHeader>
      <Logo>
        <SH1>MKS</SH1>
        <SSpan>Sistemas</SSpan>
      </Logo>
      <CartWrapper>
        <Cart />
      </CartWrapper>
    </SHeader>
  )
}

export default Header;