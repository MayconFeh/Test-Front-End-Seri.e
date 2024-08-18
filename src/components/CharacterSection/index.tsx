import { ComicSection } from "../ComicsSection";
import { SectionMovie } from "../MoviesSection";
import { CharacterSectionStyled } from "./CharacterSection.styles";

interface CharacterSectionProps {
  availableComics: number;
  availableMovies: number;
}

export const CharacterSection = ({ availableComics, availableMovies }: CharacterSectionProps) => {
  return (
    <CharacterSectionStyled>
      <ComicSection availableComics={availableComics} />
      <SectionMovie availableMovies={availableMovies} />
    </CharacterSectionStyled>
  );
};
