import { useState, FormEvent } from "react";
import { ConteinerSearch, SearchBarStyled } from "./SearchBar.styles";
import img from "../../assets/img/busca/Lupa/Shape@2x.png";

interface SearchBarProps {
  onSearch: (searchQuery: string) => void;
}

const imglupa = img;

export const SearchBar = ({ onSearch }: SearchBarProps) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    onSearch(searchQuery);
  };

  return (
    <ConteinerSearch>
      <form onSubmit={handleSubmit} style={{ width: "100%" }}>
        <button type="submit">
          <img src={imglupa} alt="Buscar" />
        </button>
        <SearchBarStyled
          type="text"
          placeholder="Procure por heróis"
          value={searchQuery}
          onChange={handleChange}
        />
      </form>
    </ConteinerSearch>
  );
};
