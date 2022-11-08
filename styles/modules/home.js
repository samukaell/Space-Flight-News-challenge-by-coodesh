import styled from "styled-components";

const ContainerHome = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
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
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 80px;
`;

const BorderIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 400px;
  height: 400px;
  border-style: solid;
  border-width: 5px;
  border-color: #1e2022;
  border-radius: 400px;
`;

const BoxBuuton = styled.div`
  margin-top: 30px;
  margin-bottom: 30px;
  button {
    background-color: white;
    border-style: solid;
    border-width: 1px;
    border-color: #302e53;
    border-radius: 5px;
    width: 150px;
    height: 40px;
    color: #302e53;
  }
`;

const Title = styled.h1`
  color: #666666;
  font-size: 40px;
  font-family: "Roboto Condensed", sans-serif;
`;

const BoxInput = styled.div`
  margin-right: 10px;
  width: 300px;
  height: 40px;
  position: relative;
  input{
    width: 100%;
    height: 100%;
  }
  .icon{
    position: absolute;
    right:5px;
    bottom: 5px;
    background-color: #a9a9a9;
    color: white;
    height: 30px;
    width: 30px;
    border-radius: 3px;
  }
`;

export { ContainerHome, BoxHeader, Main, BorderIcon, Title, BoxBuuton, BoxInput };
