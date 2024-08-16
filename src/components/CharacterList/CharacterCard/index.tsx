import { StyledH3 } from "../../../styles/typography";
import { CardCharacterStyled } from "./CharacterCard.styles"

interface CardCharacterProps {
    imageSrc: string;
    name: string;
  }

export const CardCharacter = ({imageSrc, name}: CardCharacterProps) => {
    return (
        <CardCharacterStyled>
            <img src={imageSrc} alt={`Imagem do ${name}`} />
            <StyledH3>{name}</StyledH3>
        </CardCharacterStyled>
    )
}