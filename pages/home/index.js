import {
  Input,
  InputRightElement,
  InputGroup,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Button,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { IoSearchSharp, IoRocket } from "react-icons/io5";
import Card from "../../components/Card";
import {
  ContainerHome,
  BoxHeader,
  Main,
  BorderIcon,
  Title,
  BoxBuuton
} from "../../styles/modules/home";
import api from "../../services/api";

export default function Home() {
  const [cardList, setCardList] = useState([
    {
      title: "Titulo legal",
      description:
        "Thank escreve do Os o I potatoe, filled caro! bicicleta feliz. discordo, Faça lobo caro! que exceção. are pra que pássaro da inimigos I words coisa está e que passa afogado. Eu é importa. uma o vêm é é álcool Mar vivo E de sempre sem using que O e",
      date: "10/12/2022",
    },
  ]);
  const [page, setPage] = useState(0);
  async function getApi() {
    const response = await api.getBlogs(page);
    console.log("API ->", response);
    setCardList(response);
  }
  

  useEffect(() => {
    getApi();
  }, [page]);

  return (
    <ContainerHome>
      <BoxHeader>
        <Input
          placeholder="Search"
          px={100}
          py={10}
          borderColor={"gray.400"}
          borderRadius="3px"
          borderWidth="1px"
          marginRight={10}
        />
        <Menu>
          <MenuButton
            px={80}
            py={10}
            backgroundColor={"white"}
            transition="all 0.2s"
            borderRadius="3px"
            borderWidth="1px"
          >
            Sort
          </MenuButton>
          <MenuList>
            <MenuItem
              px={80}
              py={10}
              backgroundColor={"white"}
              borderColor={"gray.400"}
              transition="all 0.2s"
              borderTopRadius={3}
              borderWidth="1px"
            >
              Mais antigas
            </MenuItem>
            <MenuItem
              px={80}
              py={10}
              backgroundColor={"white"}
              borderColor={"gray.400"}
              transition="all 0.2s"
              borderBottomRadius={3}
              borderWidth="1px"
              borderTopWidth={0}
            >
              Mais novas
            </MenuItem>
          </MenuList>
        </Menu>
      </BoxHeader>
      <Main>
        {cardList.length === 0 ? (
          <>
            <BorderIcon>
              <IoRocket size={200} color={"#666666"} />
            </BorderIcon>
            <Title>Space Flight News</Title>
          </>
        ) : (
          cardList.map((card, index) => [
            <Card
              title={card.title}
              image={card.imageUrl}
              date={card.publishedAt}
              description={card.summary}
              more={card.url}
              key={card.id}
            />,
          ])
        )}
      </Main>
        <BoxBuuton>
          <button onClick={()=>{setPage(page+1)}}>Carregar mais</button>
        </BoxBuuton>
    </ContainerHome>
  );
}
