import { useState } from "react";
import { ConteinerSearch, SearchBarStyled } from "./SearchBar.styles";
import img from "../../assets/img/busca/Lupa/Shape@2x.png";

interface SearchBarProps {
  onSearch: (searchQuery?: string) => void;
}

const imglupa = img;

export const SearchBar = ({ onSearch }: SearchBarProps) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSearch(searchQuery || undefined); // Pass undefined if searchQuery is empty
  };

  return (
    <ConteinerSearch>
      <form onSubmit={handleSubmit}>
        <button type="submit">
          <img src={imglupa} alt="Search" />
        </button>
        <SearchBarStyled
          type="text"
          placeholder="Procure por heróis"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </form>
    </ConteinerSearch>
  );
};
