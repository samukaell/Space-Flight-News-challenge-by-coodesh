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
  BoxBuuton,
  BoxInput,
} from "../../styles/modules/home";
import api from "../../services/api";

export default function Home() {
  const [cardList, setCardList] = useState([]);
  const [order, setOrder] = useState(true); //Ordem correta = true
  const [enablePage, setEnablePage] = useState(true);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(0);
  //Fuction
  //FIXME: Alterar lista
  async function getApi(page) {
    const response = await api.getBlogs(page);
    if(order === false){
      setCardList(response.reverse());
    }else{
      setCardList(response)
    }
    console.log("Ordem esta->",order);
  }
  //FIXME: Alterar lista
  async function searchCard() {
    if (search !== "") {
      const response = await api.titleContains(search);
      if (response.length === 0) {
        alert("infelizmente a busca não retornou nenhum resultado.");
      } else {
        setCardList(response);
        setEnablePage(false);
      }
      setSearch("");
    }
  }
  //FIXME: Crir função de reverter a lista
  function reverseOrder() {
    setCardList([...cardList.reverse()])
    setOrder(!order);
  }

  function sortNew() {
    //order = false
    console.log("Ordem esta->",order);
    if (order === false) {
      reverseOrder();
    }
  }

  function sortOld() {
    //order = true
    console.log("Ordem esta->",order);
    if (order === true) {
      reverseOrder();
    }
  }

  function nextPage() {
    if (enablePage) {
      setPage(page + 1);
    } else {
      console.log("DEVE IR PARA PAGINA 0");
      setEnablePage(true);
      setPage(0);
    }
  }
  //Load Date
  useEffect(() => {
    getApi(page);
    console.log("Pagina ->", page);
  }, [page]);

  //App
  return (
    <ContainerHome>
      <BoxHeader>
        <BoxInput>
          <input
            className="input-name"
            type="text"
            placeholder="Search"
            required
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <IoSearchSharp className="icon" onClick={searchCard} />
        </BoxInput>
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
              onClick={sortOld}
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
              onClick={sortNew}
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
              key={card.id + index}
            />,
          ])
        )}
      </Main>
      {enablePage ? (
        <BoxBuuton>
          <button onClick={nextPage}>Carregar mais</button>
        </BoxBuuton>
      ) : (
        <BoxBuuton>
          <button onClick={nextPage}>Página Principal</button>
        </BoxBuuton>
      )}
    </ContainerHome>
  );
}
