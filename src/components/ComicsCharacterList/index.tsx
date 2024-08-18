import { StyledH3 } from "../../styles/typography";
import { ComicsCharacterCard } from "./ComicsCharacterCard/index";
import { ComicsCharacterListStyled } from "./ComicsCharacterList.styles";
import { Comic } from "../../interfaces/Comic.interface";

interface ComicsCharacterListProps {
  comics: Comic[];
}

export const ComicsCharacterList = ({ comics }: ComicsCharacterListProps) => {
  return (
    <ComicsCharacterListStyled>
      {comics.length > 0 ? (
        comics.map((comic) => (
          <ComicsCharacterCard
            key={comic.id}
            title={comic.title}
            thumbnail={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
          />
        ))
      ) : (
        <li><StyledH3>No comics available</StyledH3></li>
      )}
    </ComicsCharacterListStyled>
  );
};
