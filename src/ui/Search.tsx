import React, { useState } from "react";
import styled from "styled-components";

interface SearchProps {
  getQuery: (q: string) => void;
}

const Search: React.FC<SearchProps> = ({ getQuery }) => {
  const [text, setText] = useState<string>("");

  const onChange = (q: string) => {
    setText(q);
    getQuery(q);
  };

  const SearchSection = styled.section`
    width: 100%;
    margin: 0 auto 30px;
    display: flex;
    justify-content: center;
  `;

  const SearchForm = styled.form`
    width: 100%;
    display: flex;
    justify-content: center;
    max-width: 700px;
    @media (max-width: 830px) {
      max-width: 571px;
    }
    @media (max-width: 600px) {
      max-width: 300px;
    }
  `;
  const SearchInput = styled.input`
    width: 100%;
    padding: 8px;
  `;

  return (
    <SearchSection>
      <SearchForm>
        <SearchInput
          type="text"
          placeholder="Enter the name of character"
          autoFocus
          value={text}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            onChange(e.target.value)
          }
        />
      </SearchForm>
    </SearchSection>
  );
};
export default Search;
