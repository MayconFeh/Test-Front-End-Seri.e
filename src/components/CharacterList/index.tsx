import { useEffect } from 'react';
import { useMarvel } from '../../providers/CharacterContext';
import { CardCharacter } from './CharacterCard/index';
import { ListCharacterStyled } from './CharacterList.styles';
import { FilterBar } from '../FilterBar';

export const ListCharacter = () => {
  const { characters, loading, searchTerm, fetchCharacters, showFavorites, favorites } = useMarvel();

  useEffect(() => {
    fetchCharacters(searchTerm || '');
  }, [searchTerm, fetchCharacters]);

  const displayedCharacters = showFavorites
    ? favorites
    : characters;

  return (
    <main>
      <FilterBar />
      {loading ? (
        <div className="loadingContainer">
          <div className="loading"></div>
        </div>
      ) : (
        <ListCharacterStyled>
          {displayedCharacters.map((character) => (
            <CardCharacter
              key={character.id}
              imageSrc={`${character.thumbnail.path}.${character.thumbnail.extension}`}
              name={character.name}
              id={character.id}
              description={character.description}
              thumbnail={character.thumbnail}
              comics={character.comics}
              series={character.series}
            />
          ))}
        </ListCharacterStyled>
      )}
    </main>
  );
};
