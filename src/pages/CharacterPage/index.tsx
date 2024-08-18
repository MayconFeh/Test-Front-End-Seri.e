
import { CharacterDetail } from "../../components/CharacterDetail";
import { Footer } from "../../components/Footer";
import { HeaderCharacter } from "../../components/HeaderCharacter";
import { CharacterPageStyled } from "./CharacterPage.styles";

export const CharacterPage = () => {
    return (
        <CharacterPageStyled>
            <HeaderCharacter/>
            <CharacterDetail/>
            <Footer/>
        </CharacterPageStyled>
    )
}