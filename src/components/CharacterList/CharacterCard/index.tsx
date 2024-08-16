import { useState } from "react";
import { StyledH3 } from "../../../styles/typography";
import {
  CardCharacterInfoStyled,
  CardCharacterStyled,
} from "./CharacterCard.styles";
import heartBorder from "../../../assets/img/icones/heart/Path Copy 2.png"
import heartRed from "../../../assets/img/icones/heart/Path Copy 7@1,5x.png"

interface CardCharacterProps {
  imageSrc: string;
  name: string;
}

const imgNotFav = heartBorder
const imgFav = heartRed

export const CardCharacter = ({ imageSrc, name }: CardCharacterProps) => {
  const [isFavorited, setIsFavorited] = useState(false);

  const toggleFavorite = () => {
    setIsFavorited((prev) => !prev);
  };


  return (
    <CardCharacterStyled>
      <img src={imageSrc} alt={`Imagem do ${name}`} />
      <CardCharacterInfoStyled>
        <StyledH3>{name}</StyledH3>
        <button onClick={toggleFavorite}>
          <img src={isFavorited ? imgFav: imgNotFav} alt="" />
        </button>
      </CardCharacterInfoStyled>
    </CardCharacterStyled>
  );
};
