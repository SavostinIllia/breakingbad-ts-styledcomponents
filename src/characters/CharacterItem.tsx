import React from "react";
import styled from "styled-components";
import { ICharacterData } from "../interfaces";

interface CharacterItemProps {
  charData: ICharacterData;
}

const CharImg = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  transition: 0.5s ease-in-out;
  transform: translateY(0px);
`;

const CharacterItemDescription = styled.div`
  opacity: 0;
  transition: 0.3s ease-in-out;
  background: #2f3640;
  height: 100%;
  padding: 20px;
`;

const CharTitle = styled.h1`
  font-size: 30px;
  margin-bottom: 10px;
`;

const CharDescr = styled.p<{ charStatus?: string }>`
  font-size: 18px;
  padding-bottom: 15px;
  color: ${({ charStatus }) => handleColorType(charStatus)};
  &:first-of-type {
    padding-top: 10px;
  }
  &:last-of-type {
    padding-bottom: 0;
  }
`;

const StrongCharDecsr = styled.strong`
  font-weight: bold;
`;

const handleColorType = (charStatus?: string) => {
  switch (charStatus) {
    case "Alive":
      return "#00b894";
    case "Deceased":
      return "#ff7675";
    case "Presumed dead":
      return "#0984e3";
    case "?":
      return "#636e72";
  }
};

const CharacterItem: React.FC<CharacterItemProps> = ({ charData }) => {
  return (
    <>
      <CharImg src={charData.img} alt="" />
      <CharacterItemDescription>
        <CharTitle>{charData.name}</CharTitle>
        <hr />
        <CharDescr>
          <StrongCharDecsr>Name : </StrongCharDecsr>
          {charData.portrayed}
        </CharDescr>
        <CharDescr>
          <StrongCharDecsr>Nickname :</StrongCharDecsr> {charData.nickname}
        </CharDescr>
        <CharDescr>
          <StrongCharDecsr>Birthday :</StrongCharDecsr> {charData.birthday}
        </CharDescr>
        <CharDescr charStatus={charData.status}>
          <StrongCharDecsr>Status : </StrongCharDecsr> {charData.status}
        </CharDescr>
      </CharacterItemDescription>
    </>
  );
};
export default CharacterItem;
