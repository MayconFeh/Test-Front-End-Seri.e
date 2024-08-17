import { useEffect, useState } from "react";
import { useMarvel } from "../../../providers/CharacterContext";
import { StyledH3 } from "../../../styles/typography";
import {
  CardCharacterInfoStyled,
  CardCharacterStyled,
} from "./CharacterCard.styles";
import heartBorder from "../../../assets/img/icones/heart/Path Copy 2.png";
import heartRed from "../../../assets/img/icones/heart/Path Copy 7@1,5x.png";

interface CardCharacterProps {
  imageSrc: string;
  name: string;
  id: string;
  description: string;
  thumbnail: {
    path: string;
    extension: string;
  };
  modified: string;
  comics: {
    available: number;
    items: {
      name: string;
    };
  };
  series?: {
    available: number;
  };
}

const imgNotFav = heartBorder;
const imgFav = heartRed;

export const CardCharacter = ({
  imageSrc,
  name,
  id,
  description,
  thumbnail,
  comics,
  series,
  modified,
}: CardCharacterProps) => {
  const { favorites, addFavorite, removeFavorite } = useMarvel();
  const [isFavorited, setIsFavorited] = useState<boolean>(false);

  useEffect(() => {
    setIsFavorited(favorites.some((fav) => fav.id === id));
  }, [favorites, id]);

  const handleFavoriteToggle = () => {
    if (isFavorited) {
      removeFavorite(id);
    } else {
      addFavorite({
        id,
        name,
        description,
        thumbnail,
        comics,
        series,
        modified,
      });
    }
  };

  return (
    <CardCharacterStyled>
      <img src={imageSrc} alt={`Imagem do ${name}`} />
      <CardCharacterInfoStyled>
        <StyledH3>{name}</StyledH3>
        <button onClick={handleFavoriteToggle}>
          <img src={isFavorited ? imgFav : imgNotFav} alt="Favoritar" />
        </button>
      </CardCharacterInfoStyled>
    </CardCharacterStyled>
  );
};
