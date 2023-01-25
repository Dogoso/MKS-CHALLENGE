import styled, { keyframes } from "styled-components";

const shimmerBaseColor = "#CCCCCC";
const shimmerFadeColor = "#BBBBBB";

const fadeAnimation = keyframes`
  0% { background-color: ${shimmerBaseColor}; }
  33% { background-color: ${shimmerFadeColor}; }
  66% { background-color: ${shimmerBaseColor}; }
  100% { background-color: ${shimmerFadeColor}; }
`;

const Item = styled.div`
  box-shadow: 0px 0px 8px #00000030;
  width: 250px;
  min-width: 250px;
  max-width: 250px;
  height: 400px;
  min-height: 400px;
  max-height: 400px;
  border-radius: 20px;
  display: inline-flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 20px;
`;

const ShimmerImage = styled.div`
  height: 200px;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  object-fit: cover;
  animation-name: ${fadeAnimation};
  animation-duration: 2s;
  animation-iteration-count: infinite;
`;

const ShimmerDescription = styled.div`
  animation-name: ${fadeAnimation};
  animation-duration: 2s;
  animation-iteration-count: infinite;
  height: 20px;
  border-radius: 20px;
  margin-right: 10px;
  margin: 0px 20px;
`;

const ShimmerButton = styled.div`
  border: none;
  animation-name: ${fadeAnimation};
  animation-duration: 2s;
  animation-iteration-count: infinite;
  color: white;
  text-transform: uppercase;
  font-size: 16px;
  height: 40px;
  border-bottom-right-radius: 20px;
  border-bottom-left-radius: 20px;
`;

const ShimmerMainInfo = styled.div`
  display: flex;
  align-items: center;
  padding: 0px 10px;
`;

const ShimmerTitle = styled.div`
  animation-name: ${fadeAnimation};
  animation-duration: 2s;
  animation-iteration-count: infinite;
  width: 180px;
  height: 20px;
  border-radius: 10px;
  margin-right: 10px;
`;

const ShimmerPrice = styled.div`
  animation-name: ${fadeAnimation};
  animation-duration: 2s;
  animation-iteration-count: infinite;
  width: 100px;
  height: 30px;
  border-radius: 5px;
`;

export function ShimmerItem() {
  return (
    <Item>
      <ShimmerImage></ShimmerImage>
      <ShimmerMainInfo>
        <ShimmerTitle></ShimmerTitle>
        <ShimmerPrice></ShimmerPrice>
      </ShimmerMainInfo>
      <ShimmerDescription></ShimmerDescription>
      <ShimmerDescription></ShimmerDescription>
      <ShimmerButton></ShimmerButton>
    </Item>
  )
}

export default ShimmerItem;