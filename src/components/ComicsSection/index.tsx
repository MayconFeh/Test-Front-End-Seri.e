import { StyledH3 } from "../../styles/typography";
import comics from "../../assets/img/icones/book/Group.png";
import { ComicSectionStyled } from "./ComicsSection";

interface ComicSectionProps {
  availableComics: number;
}

export const ComicSection = ({ availableComics }: ComicSectionProps) => {
  return (
    <ComicSectionStyled>
      <StyledH3>Quadrinhos</StyledH3>
      <div>
        <img src={comics} alt="Comics" />
        <StyledH3>{availableComics || 0}</StyledH3>
      </div>
    </ComicSectionStyled>
  );
};
