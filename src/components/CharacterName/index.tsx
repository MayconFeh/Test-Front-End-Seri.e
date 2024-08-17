import { StyledH1 } from "../../styles/typography";
import heartR from "../../assets/img/icones/heart/Path@1,5x.png";
import { CharacterNameStyled } from "./CharacterName.styles";

interface CharacterNameProps {
    name: string;
}

export const CharacterName = ({ name }: CharacterNameProps) => {
    return (
        <CharacterNameStyled>
            <StyledH1>{name}</StyledH1>
            <img src={heartR} alt="Favorite" />
        </CharacterNameStyled>
    );
};
