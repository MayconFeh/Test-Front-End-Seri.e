import { useEffect, useState, useCallback } from "react";
import { useParams } from "react-router-dom";
import { useMarvel } from "../../providers/CharacterContext";
import {
  CharacterDetailInFoStyled,
  CharacterDetailLoadingStyled,
  CharacterDetailStyled,
} from "./CharacterDetail.styles";
import { CharacterName } from "../CharacterName";
import { CharacterSection } from "../CharacterSection";
import { ComicsCharacterList } from "../ComicsCharacterList";
import { StyledH2 } from "../../styles/typography";
import { RatingCharacter } from "../RatingCharacter";
import { YearComicCharacter } from "../YearComicCharacter";

export const CharacterDetail = () => {
  const { id } = useParams<{ id: string }>();
  const {
    character,
    comics,
    fetchCharacterById,
    fetchComicsByCharacterId,
    loading,
  } = useMarvel();
  const [rating, setRating] = useState<number>(0);

  const handleRatingChange = (newRating: number) => {
    setRating(newRating);
  };

  const loadCharacterData = useCallback(async () => {
    if (id) {
      try {
        await fetchCharacterById(id);
        await fetchComicsByCharacterId(id);
      } catch (error) {
        console.error("Failed to fetch data:", error);
      }
    }
  }, [id, fetchCharacterById, fetchComicsByCharacterId]);

  useEffect(() => {
    loadCharacterData();
  }, [loadCharacterData]);

  if (loading) {
    return (
      <CharacterDetailLoadingStyled>
        <div className="loadingContainer">
          <div className="loading"></div>
        </div>
      </CharacterDetailLoadingStyled>
    );
  }

  const firstComic = comics.length > 0 ? comics[0] : null;

  return (
    <div>
      <CharacterDetailStyled>
        {character ? (
          <CharacterDetailInFoStyled>
            <CharacterName
              name={character.name}
              comics={character.comics}
              description={character.description}
              id={character.id}
              series={character.series}
              thumbnail={character.thumbnail}
              isFavorite
            />
            <p>{character.description || "No description available"}</p>
            <CharacterSection
              availableComics={character.comics?.available || 0}
              availableMovies={character.series?.available || 0}
            />
            <div className="info-comics">
              <RatingCharacter
                rating={rating}
                onRatingChange={handleRatingChange}
              />
              <YearComicCharacter comic={firstComic} />
            </div>
          </CharacterDetailInFoStyled>
        ) : (
          <p>Character not found</p>
        )}
        {character?.thumbnail && (
          <img
            src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
            alt={character.name}
          />
        )}
      </CharacterDetailStyled>
      <div className="comics">
        <StyledH2>Últimos lançamentos</StyledH2>
        <ComicsCharacterList comics={comics} />
      </div>
    </div>
  );
};
