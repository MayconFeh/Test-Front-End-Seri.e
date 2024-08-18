import { StyledH1 } from "../../styles/typography";
import heartR from "../../assets/img/icones/heart/Path Copy 7@1,5x.png";
import heartE from "../../assets/img/icones/heart/Path Copy 2.png";
import { CharacterNameStyled } from "./CharacterName.styles";
import { useMarvel } from "../../providers/CharacterContext";
import { useState } from "react";

interface CharacterNameProps {
  name: string;
  id: string;
  isFavorite: boolean;
  comics: {
    available: number;
  };
  description: string;
  thumbnail: {
    path: string;
    extension: string;
  };
  series?: {
    available: number;
  };
}

export const CharacterName = ({
  name,
  id,
  isFavorite,
  comics,
  description,
  series,
  thumbnail,
}: CharacterNameProps) => {
  const { addFavorite, removeFavorite } = useMarvel();
  const [isFav, setIsFav] = useState(isFavorite);

  const handleFavoriteToggle = () => {
    if (isFav) {
      removeFavorite(id);
    } else {
      addFavorite({ id, name, comics, description, thumbnail, series });
    }
    setIsFav(!isFav);
  };

  return (
    <CharacterNameStyled>
      <StyledH1>{name}</StyledH1>
      <img src={isFav ? heartR : heartE} alt="Favorite" onClick={handleFavoriteToggle} />
    </CharacterNameStyled>
  );
};
