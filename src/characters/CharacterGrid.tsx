import React from "react";
import styled from "styled-components";
import CharacterItem from "./CharacterItem";
import { ICharacterData } from "../interfaces";

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
    <h1>Loading...</h1>
  ) : (
    <>
      {items.map((item) => {
        return (
          <CharacterItemDiv key={item.char_id}>
            <CharacterItem
              charName={item.name}
              charPortrayed={item.portrayed}
              charNickname={item.nickname}
              charBirthday={item.birthday}
              charStatus={item.status}
              charImg={item.img}
            />
          </CharacterItemDiv>
        );
      })}
    </>
  );
};

export default CharacterGrid;
