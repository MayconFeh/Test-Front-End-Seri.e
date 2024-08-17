import { StyledH3 } from "../../styles/typography";
import { ComicsCharacterCard } from "./ComicsCharacterCard/index";
import { ComicsCharacterListStyled } from "./ComicsCharacterList.styles";

interface ComicsCharacterListProps {
  comics: string[];
}

export const ComicsCharacterList = ({ comics }: ComicsCharacterListProps) => {
  return (
    <ComicsCharacterListStyled>
      {comics.length > 0 ? (
        comics.map((comic, index) => (
          <ComicsCharacterCard key={index} comicName={comic} />
        ))
      ) : (
        <li><StyledH3>No comics available</StyledH3></li>
      )}
    </ComicsCharacterListStyled>
  );
};
