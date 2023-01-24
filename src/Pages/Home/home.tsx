import { useAppDispatch, useAppSelector } from "Hooks/hooks";
import { useEffect } from "react";
import { getProductsThunk } from "Store/Modules/Products/thunk";
import styled from "styled-components";
import StoreItem from "./Components/StoreItem/store_item";

const Store = styled.section`
  min-height: calc(100vh - 20px - 100px);
  display: inline-flex;
  justify-content: center;
`;

function Home() {

  const dispatch = useAppDispatch();
  const products = useAppSelector(state => state.products);

  useEffect(() => {
    getProductsThunk(dispatch, 1);
  }, [])

  return (
    <Store>
      {products.map(product => <StoreItem product={product} />)}
    </Store>
  )
}

export default Home;