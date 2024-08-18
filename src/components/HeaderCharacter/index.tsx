import { StyledHeaderCharacter } from "./Header.styles";
import { SearchBar } from "../SearchBar/index";
import imgL from "../../assets/img/logo/Group@4.png.png"
import { useNavigate } from "react-router-dom";

const logo = imgL

export const HeaderCharacter = () => {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/`); 
  };

  return (
    <StyledHeaderCharacter>
      <img src={logo} alt="" onClick={handleClick}/>
      <SearchBar/>
    </StyledHeaderCharacter>
  );
};
