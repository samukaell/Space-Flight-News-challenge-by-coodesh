import styled from "styled-components";

const ContainerHome = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 20px;
`;
const BoxHeader = styled.div`
  display: flex;
  width: 90%;
  justify-content: flex-end;
`;
const Main = styled.main`
  width: 100%;
  height: 600px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const BorderIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 400px;
  height: 400px;
  border-style: solid;
  border-width: 5px;
  border-color: #1e2022;;
  border-radius: 400px;
`;

const Title = styled.h1`
    color: #666666;
    font-size: 40px;
    font-family: 'Roboto Condensed', sans-serif;
`

export { ContainerHome, BoxHeader, Main, BorderIcon, Title };
