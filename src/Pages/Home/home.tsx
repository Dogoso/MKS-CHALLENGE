import { useAppDispatch, useAppSelector } from "Hooks/hooks";
import { useEffect } from "react";
import { getProductsThunk } from "Store/Modules/Products/thunk";
import styled from "styled-components";
import ShimmerSkeleton from "./Components/ShimmerSkeleton/shimmer_skeleton";
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
  padding: 50px 0px;
`;

function Home() {

  const dispatch = useAppDispatch();
  const products: Array<any> = []//useAppSelector(state => state.products);

  useEffect(() => {
    getProductsThunk(dispatch, 1);
  }, [])

  return (
    <Store>
      {products.length !== 0 ? <Products>
        {products.map(product => <StoreItem product={product} />)}
      </Products> : <ShimmerSkeleton />}
    </Store>
  )
}

export default Home;