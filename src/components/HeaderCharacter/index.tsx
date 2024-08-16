import { StyledHeaderCharacter } from "./Header.styles";
import { SearchBar } from "../SearchBar/index";
import imgL from "../../assets/img/logo/Group@4.png.png"

const logo = imgL

export const HeaderCharacter = () => {
  return (
    <StyledHeaderCharacter>
      <img src={logo} alt="" />
      <SearchBar/>
    </StyledHeaderCharacter>
  );
};
