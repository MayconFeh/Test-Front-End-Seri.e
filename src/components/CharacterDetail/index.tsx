import { useEffect, useState } from "react";
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

const formatBrazilianDate = (isoDate: string) => {
  const months = [
    "Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"
  ];

  const date = new Date(isoDate);
  const day = String(date.getDate()).padStart(2, "0");
  const month = months[date.getMonth()];
  const year = date.getFullYear();

  return `${day} ${month} ${year}`;
};

export const CharacterDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { character, fetchCharacterById } = useMarvel();
  const [comics, setComics] = useState<string[]>([]);
  const [latestComicDate, setLatestComicDate] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [rating, setRating] = useState<number>(0);

  const handleRatingChange = (newRating: number) => {
    setRating(newRating);
  };

  useEffect(() => {
    const loadCharacter = async () => {
      if (id) {
        setLoading(true);
        try {
          await fetchCharacterById(id);

          if (character) {
            const comicsList: string[] = character.comics.items
              .slice(0, 10)
              .map((comic) => comic.name);

            setComics(comicsList);

            const latestDate = character.comics.items.reduce((latest, comic) => {
              if (!comic.modified) {
                return latest;
              }

              const comicDate = new Date(comic.modified);
              if (isNaN(comicDate.getTime())) {
                return latest;
              }

              return comicDate > new Date(latest) ? comicDate.toISOString() : latest;
            }, new Date().toISOString());

            setLatestComicDate(formatBrazilianDate(latestDate));
          }
        } catch (error) {
          console.error("Failed to fetch character:", error);
        } finally {
          setLoading(false);
        }
      }
    };

    loadCharacter();
  }, [id, fetchCharacterById]);

  if (loading) {
    return (
      <CharacterDetailLoadingStyled>
        <div className="loadingContainer">
          <div className="loading"></div>
        </div>
      </CharacterDetailLoadingStyled>
    );
  }

  return (
    <>
      <CharacterDetailStyled>
        {character ? (
          <CharacterDetailInFoStyled>
            <CharacterName name={character.name} />
            <p>{character.description || "No description available"}</p>
            <CharacterSection
              availableComics={character.comics?.available || 0}
              availableMovies={character.series?.available || 0}
            />
            <RatingCharacter
              rating={rating}
              onRatingChange={handleRatingChange}
            />
            <YearComicCharacter date={latestComicDate} />
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
    </>
  );
};
