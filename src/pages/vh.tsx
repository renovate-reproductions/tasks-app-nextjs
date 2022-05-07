import styled from 'styled-components';

const Vh = () => <StyledRoot>vh</StyledRoot>;

const StyledRoot = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 18px;
  background-color: cornflowerblue;
`;

export default Vh;
