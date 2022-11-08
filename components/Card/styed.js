import styled from "styled-components";

const ContainerCard = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 40%;
  height: 400px;
  max-width: 40%;
  margin-top: 20px;
  border-style: solid;
  border-width: 2px;
  border-color: #666666;

`;

const ContainerInfo = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 90%;

  img {
    height: 60%;
    margin-right: 5%;
    margin-left: 20px;
    max-width: 200px;
  }
`;

const BoxDescription = styled.main`
  height: 70%;
  display: flex;
  flex-direction: column;
`;

const Title = styled.p`
  font-size: 22px;
  font-family: "Roboto Condensed", sans-serif;
  font-weight: 700;
  color: #666666;
  margin-top: 2px;
  margin-bottom: 5px;
`;

const Description = styled.p`
  width: 70%;
  max-height: 40px;
  font-size: 18px;
  margin-top: 2px;
  margin-bottom: 5px;
  font-family: "Roboto Condensed", sans-serif;
  color: #666666;
  font-weight: 400;
`;

const Date = styled.p`
  font-size: 12px;
  margin-top: 2px;
  margin-bottom: 5px;
  font-family: "Roboto Condensed", sans-serif;
  color: #666666;
  font-weight: 400;
`;

const BoxBuuton = styled.div`
  button{
    background-color: #a9a9a9;
    border: none;
    border-radius: 5px;
    width: 150px;
    height: 40px;
    color: white;
    margin-bottom: 5px;
  }
`;

export { ContainerCard, ContainerInfo, BoxDescription, Title, Description, Date, BoxBuuton };
