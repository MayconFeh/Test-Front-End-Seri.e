
import { ComicsCharacterCardStyled } from "./ComicsCharacterCard.styles";
import comicIMG from "../../../assets/img/comic/comic.jpg";
import { StyledH3 } from "../../../styles/typography";

interface ComicsCharacterCardProps {
  comicName: string;
}

export const ComicsCharacterCard = ({ comicName }: ComicsCharacterCardProps) => {
    return (
      <ComicsCharacterCardStyled>
        <img src={comicIMG} alt={comicName} />
        <StyledH3>{comicName}</StyledH3>
      </ComicsCharacterCardStyled>
    );
  };
