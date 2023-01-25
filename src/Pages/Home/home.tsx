import { useAppDispatch, useAppSelector } from "Hooks/hooks";
import { useEffect } from "react";
import { getProductsThunk } from "Store/Modules/Products/thunk";
import styled from "styled-components";
import StoreItem from "./Components/StoreItem/store_item";

const Store = styled.section`
  min-height: calc(100vh - 20px - 100px);
  display: flex;
  justify-content: center;
`;

const Products = styled.div`
  width: 1200px;
  max-width: 1200px;
  display: inline;
`;

function Home() {

  const dispatch = useAppDispatch();
  const products = useAppSelector(state => state.products);

  useEffect(() => {
    getProductsThunk(dispatch, 1);
  }, [])

  return (
    <Store>
      <Products>
        {products.map((product, index) => <StoreItem product={product} />)}
      </Products>
    </Store>
  )
}

export default Home;