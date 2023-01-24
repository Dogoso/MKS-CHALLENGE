import styled from "styled-components";
import StoreItem from "./Components/StoreItem/store_item";

const Store = styled.section`
  min-height: calc(100vh - 20px - 100px);
  display: flex;
  justify-content: center;
  align-items: center;
`;

function Home() {
  return (
    <Store>
      <StoreItem 
        titulo="Apple Watch Series 4 GPS" 
        descricao="Redesigned from scratch and completely revised" 
        preco={399} 
        imagem="imagem" 
      />
    </Store>
  )
}

export default Home;