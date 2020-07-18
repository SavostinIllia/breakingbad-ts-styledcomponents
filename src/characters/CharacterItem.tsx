import React from "react";
import styled from "styled-components";

interface CharacterItemProps {
  charName: string;
  charPortrayed: string;
  charNickname: string;
  charBirthday: string | number;
  charStatus: string;
  charImg: string;
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

const CharDescr = styled.p`
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

/**
 *
 * @param: color
 * @case : 'Alive'
 * @case : 'Deceased'
 * @case : 'Presumed dead'
 * @case : '?'
 */

const handleColorType = (charStatus: string) => {
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

const CharacterItem: React.FC<CharacterItemProps> = ({
  charName,
  charNickname,
  charBirthday,
  charPortrayed,
  charStatus,
  charImg,
}) => {
  return (
    <>
      <CharImg src={charImg} alt="" />
      <CharacterItemDescription>
        <CharTitle>{charName}</CharTitle>
        <hr />
        <CharDescr>
          <strong>Name : </strong>
          {charPortrayed}
        </CharDescr>
        <CharDescr>
          <strong>Nickname :</strong> {charNickname}
        </CharDescr>
        <CharDescr>
          <strong>Birthday :</strong> {charBirthday}
        </CharDescr>
        <CharDescr charStatus={charStatus}>
          <strong>Status : </strong> {charStatus}
        </CharDescr>
      </CharacterItemDescription>
    </>
  );
};
export default CharacterItem;
