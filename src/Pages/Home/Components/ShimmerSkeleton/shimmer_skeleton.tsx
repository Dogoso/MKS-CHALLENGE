import styled from "styled-components";
import ShimmerItem from "./ShimmerItem/shimmer_item";

const ShimmerStore = styled.div`
  width: 1200px;
  max-width: 1200px;
  display: inline;
  padding: 50px 0px;
`;

function ShimmerSkeleton() {
  return (
    <ShimmerStore>
      <ShimmerItem />
      <ShimmerItem />
      <ShimmerItem />
      <ShimmerItem />
      <ShimmerItem />
      <ShimmerItem />
      <ShimmerItem />
      <ShimmerItem />
    </ShimmerStore>
  )
}

export default ShimmerSkeleton;