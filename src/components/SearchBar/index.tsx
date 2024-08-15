import { useState } from "react";
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
    onSearch(event.target.value);
  };

  return (
    <ConteinerSearch>
        <button>
            <img src={imglupa} alt="" />
        </button>
      <SearchBarStyled
        type="text"
        placeholder="Procure por heróis"
        value={searchQuery}
        onChange={handleChange}
      />
    </ConteinerSearch>
  );
};
