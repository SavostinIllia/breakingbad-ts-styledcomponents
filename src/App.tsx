import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

import Header from "./ui/Header";

import CharacterGrid from "./characters/CharacterGrid";

const AppWrapper = styled.section``;

const CharacterGridWrapper = styled.section`
  max-width: 1240px;
  margin: 0 auto;
  .characterGrid {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    width: auto;
    margin-left: -50px;
  }
`;

const App: React.FC = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setisLoading] = useState(true);

  const davidBranch: boolean = true;

  useEffect(() => {
    const fetcItems = async () => {
      const result = await axios(
        `https://www.breakingbadapi.com/api/characters`
      );
      setItems(result.data);
      setisLoading(false);
    };
    fetcItems();
  }, []);

  return (
    console.log("DAVID BRANcH ON: " + davidBranch),
    (
      <AppWrapper>
        <Header />
        <CharacterGridWrapper>
          <div className="characterGrid">
            <CharacterGrid isLoading={isLoading} items={items} />
          </div>
        </CharacterGridWrapper>
      </AppWrapper>
    )
  );
};

export default App;
