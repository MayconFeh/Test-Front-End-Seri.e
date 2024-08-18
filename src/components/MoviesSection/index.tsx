import { StyledH3 } from "../../styles/typography";
import movies from "../../assets/img/icones/video/Shape.png";
import { SectionMovieStyled } from "./MoviesSection.styles";

interface SectionMovieProps {
  availableMovies: number;
}

export const SectionMovie = ({ availableMovies }: SectionMovieProps) => {
  return (
    <SectionMovieStyled>
      <StyledH3>Filmes</StyledH3>
      <div>
        <img src={movies} alt="Movies" />
        <StyledH3>{availableMovies || 0}</StyledH3>
      </div>
    </SectionMovieStyled>
  );
};
