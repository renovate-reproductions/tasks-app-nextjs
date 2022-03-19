import styled from 'styled-components';

const Svh = () => <StyledRoot>svh</StyledRoot>;

const StyledRoot = styled.div`
  width: 100vw;
  width: 100svw;
  height: 100vh;
  height: 100svh;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 18px;
  background-color: cornflowerblue;
`;

export default Svh;
