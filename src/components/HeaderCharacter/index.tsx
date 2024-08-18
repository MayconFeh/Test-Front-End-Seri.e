import { StyledHeaderCharacter } from "./Header.styles";
import { SearchBar } from "../SearchBar/index";
import imgL from "../../assets/img/logo/Group@4.png.png";
import { useNavigate } from "react-router-dom";

const logo = imgL;

export const HeaderCharacter = () => {
  const navigate = useNavigate();

  const handleSearch = (searchQuery?: string) => {
    if (searchQuery) {
      navigate(`/?nameStartsWith=${encodeURIComponent(searchQuery)}`);
    } else {
      navigate(`/`);
    }
  };

  const handleClick = () => {
    navigate(`/`);
  };

  return (
    <StyledHeaderCharacter>
      <img
        src={logo}
        alt="Logo"
        onClick={handleClick}
      />
      <SearchBar onSearch={handleSearch} />
    </StyledHeaderCharacter>
  );
};
