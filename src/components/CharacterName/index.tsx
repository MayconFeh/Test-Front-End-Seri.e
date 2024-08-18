import { StyledH1 } from "../../styles/typography";
import heartR from "../../assets/img/icones/heart/Path.png"; 
import heartE from "../../assets/img/icones/heart/Path Copy 2.png"; 
import { CharacterNameStyled } from "./CharacterName.styles";
import { useMarvel } from "../../providers/CharacterContext";

interface CharacterNameProps {
  name: string;
  id: string;
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
  comics,
  description,
  series,
  thumbnail,
}: CharacterNameProps) => {
  const { favorites, addFavorite, removeFavorite } = useMarvel();
  const isFavorite = favorites.some(fav => fav.id === id);

  const handleFavoriteToggle = () => {
    if (isFavorite) {
      removeFavorite(id);
    } else {
      addFavorite({ id, name, comics, description, thumbnail, series });
    }
  };

  return (
    <CharacterNameStyled>
      <StyledH1>{name}</StyledH1>
      <img
        src={isFavorite ? heartR : heartE}
        alt="Favorite"
        onClick={handleFavoriteToggle}
      />
    </CharacterNameStyled>
  );
};
