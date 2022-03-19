import styled from 'styled-components';

const Dvh = () => <StyledRoot>dvh</StyledRoot>;

const StyledRoot = styled.div`
  width: 100vw;
  width: 100dvw;
  height: 100vh;
  height: 100dvh;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 18px;
  background-color: cornflowerblue;
`;

export default Dvh;
