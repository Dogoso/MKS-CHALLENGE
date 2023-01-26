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
  const products = useAppSelector(state => state.products);

  useEffect(() => {
    getProductsThunk(dispatch, 1);
  }, [])

  return (
    <Store>
      {products.length !== 0 ? <Products data-testid="products">
        {products.map(product => <StoreItem key={product.id} product={product} />)}
      </Products> : <div data-testid="shimmer">
        <ShimmerSkeleton />
      </div>}
    </Store>
  )
}

export default Home;