import { StyledH2 } from "../../styles/typography";
import { YearComicCharacterStyled } from "./YearComicCharacter.styles";

interface YearComicCharacterProps {
    date: string | null;
}

export const YearComicCharacter = ({date}: YearComicCharacterProps) => {
    return (
        <YearComicCharacterStyled>
            <StyledH2>Último quadrinho:</StyledH2>
            <p>{date}</p>
        </YearComicCharacterStyled>
    )
}