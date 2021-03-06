import React from "react";
import styled from "styled-components";
import CharacterItem from "./CharacterItem";
import { ICharacterData } from "../interfaces";
import Spinner from "../ui/Spinner";
interface CharacterGridProps {
  isLoading: boolean;
  items: ICharacterData[];
}

const CharacterItemDiv = styled.div`
  flex-basis: calc(24.333% - 50px);
  height: 320px;
  margin-left: 50px;
  margin-bottom: 50px;
  position: relative;
  overflow: hidden;
  transition: 1s ease-in-out;
  @media (max-width: 1100px) {
    flex-basis: calc(32% - 50px);
  }
  @media (max-width: 830px) {
    flex-basis: calc(45% - 50px);
    max-width: 291px;
  }
  @media (max-width: 600px) {
    flex-basis: calc(80% - 50px);
    max-width: 277px;
  }

  :hover {
    cursor: pointer;
    > img {
      transform: translateY(-100%);
    }
    > div {
      opacity: 1;
      transition: 0.5s 0.3s ease-in-out;
    }
  }
`;

const CharacterGrid: React.FC<CharacterGridProps> = ({ items, isLoading }) => {
  return isLoading ? (
    <Spinner />
  ) : (
    <>
      {items.map((item) => {
        return (
          <CharacterItemDiv key={item.char_id}>
            <CharacterItem charData={item} />
          </CharacterItemDiv>
        );
      })}
    </>
  );
};

export default CharacterGrid;
