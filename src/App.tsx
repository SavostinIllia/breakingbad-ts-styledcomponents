import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import Header from "./ui/Header";
import CharacterGrid from "./characters/CharacterGrid";

import { ICharacterData } from "./interfaces";

const AppWrapper = styled.section``;

const CharacterGridWrapper = styled.section`
  max-width: 1240px;
  margin: 0 auto;
  .characterGrid {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin-left: -50px;
  }
`;

const App: React.FC = () => {
  const [items, setItems] = useState<ICharacterData[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(
        `https://www.breakingbadapi.com/api/characters`
      );
      setItems(result.data);
      setIsLoading(false);
    };
    fetchItems();
  }, []);
  console.log(items);
  console.log(isLoading);
  return (
    <AppWrapper>
      <Header />
      <CharacterGridWrapper>
        <div className="characterGrid">
          <CharacterGrid items={items} isLoading={isLoading} />
        </div>
      </CharacterGridWrapper>
    </AppWrapper>
  );
};

export default App;
