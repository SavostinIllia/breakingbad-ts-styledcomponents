import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import Header from "./ui/Header";
import CharacterGrid from "./characters/CharacterGrid";

import { ICharacterData } from "./interfaces";
import Search from "./ui/Search";

const AppWrapper = styled.section``;

const CharacterGridWrapper = styled.section`
  max-width: 1240px;
  margin: 0 auto;
`;

const CharacterDiv = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-left: -50px;
`;

const App: React.FC = () => {
  const [items, setItems] = useState<ICharacterData[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [query, setQuery] = useState<string>("");
  useEffect(() => {
    const url: string = `https://www.breakingbadapi.com/api/characters`;

    const fetchItems = async () => {
      const result = await axios(`${url}?name=${query}`);
      setItems(result.data);
      setIsLoading(false);
    };
    fetchItems();
  }, [query]);

  return (
    <AppWrapper>
      <Header />
      <Search getQuery={(q) => setQuery(q)} />
      <CharacterGridWrapper>
        <CharacterDiv>
          <CharacterGrid items={items} isLoading={isLoading} />
        </CharacterDiv>
      </CharacterGridWrapper>
    </AppWrapper>
  );
};

export default App;
