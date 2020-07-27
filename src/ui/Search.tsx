import React, { useState } from "react";

interface SearchProps {
  getQuery: (q: string) => void;
}

const Search: React.FC<SearchProps> = ({ getQuery }) => {
  const [text, setText] = useState<string>("");

  const onChange = (q: string) => {
    setText(q);
    getQuery(q);
  };

  return (
    <section>
      <form>
        <input
          type="text"
          placeholder="Enter the name of character"
          autoFocus
          value={text}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            onChange(e.target.value)
          }
        />
      </form>
    </section>
  );
};
export default Search;
