import { StyledH3 } from "../../../styles/typography";
import { ComicsCharacterCardStyled } from "./ComicsCharacterCard.styles";

interface ComicsCharacterCardProps {
  title: string;
  thumbnail: string
}

export const ComicsCharacterCard = ({ title,thumbnail }: ComicsCharacterCardProps) => {
    
    const comicIMG = thumbnail
    return (
    <ComicsCharacterCardStyled>
      <img src={comicIMG} alt={title} />
      <StyledH3>{title}</StyledH3>
    </ComicsCharacterCardStyled>
  );
};
