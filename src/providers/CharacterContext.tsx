import { createContext, useContext, useState, useCallback, ReactNode } from 'react';
import { fetchCharacters, fetchCharacterById, fetchComicsByCharacterId } from '../services/marvelApi';
import { Character } from '../interfaces/Character.interface';

interface MarvelContextType {
  characters: Character[];
  character: Character | null;
  comics: any[];
  loading: boolean;
  error: string | null;
  searchTerm: string;
  totalCharacters: number;
  showFavorites: boolean;
  favorites: Character[]; // Armazena os favoritos
  setSearchTerm: (term: string) => void;
  setShowFavorites: (show: boolean) => void;
  fetchCharacters: (searchTerm?: string) => void;
  fetchCharacterById: (id: string) => void;
  fetchComicsByCharacterId: (id: string) => void;
  addFavorite: (character: Character) => void;
  removeFavorite: (id: string) => void;
}

const MarvelContext = createContext<MarvelContextType | undefined>(undefined);

interface MarvelProviderProps {
  children: ReactNode;
}

export const MarvelProvider = ({ children }: MarvelProviderProps) => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [character, setCharacter] = useState<Character | null>(null);
  const [comics, setComics] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [totalCharacters, setTotalCharacters] = useState(0);
  const [showFavorites, setShowFavorites] = useState(false);
  const [favorites, setFavorites] = useState<Character[]>([]); // Armazena os favoritos

  const loadCharacters = useCallback(async (searchTerm?: string) => {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchCharacters(searchTerm ? { nameStartsWith: searchTerm } : {});
      setCharacters(data.data.results || []);
      setTotalCharacters(data.data.total || 0);
    } catch (err) {
      console.error('Error fetching characters:', err);
      setError('Failed to fetch characters');
    } finally {
      setLoading(false);
    }
  }, []);

  const loadCharacterById = useCallback(async (id: string) => {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchCharacterById(id);
      setCharacter(data);
    } catch (err) {
      console.error('Error fetching character:', err);
      setError('Failed to fetch character');
    } finally {
      setLoading(false);
    }
  }, []);

  const loadComicsByCharacterId = useCallback(async (id: string) => {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchComicsByCharacterId(id);
      setComics(data);
    } catch (err) {
      console.error('Error fetching comics:', err);
      setError('Failed to fetch comics');
    } finally {
      setLoading(false);
    }
  }, []);

  const addFavorite = (character: Character) => {
    setFavorites((prevFavorites) => {
      if (prevFavorites.length >= 5) {
        return prevFavorites; 
      }
      return [...prevFavorites, character];
    });
  };

  const removeFavorite = (id: string) => {
    setFavorites((prevFavorites) => prevFavorites.filter((fav) => fav.id !== id));
  };

  const filteredCharacters = showFavorites
    ? characters.filter((character) => favorites.some((fav) => fav.id === character.id))
    : characters;

  return (
    <MarvelContext.Provider
      value={{
        characters: filteredCharacters,
        character,
        comics,
        loading,
        error,
        searchTerm,
        totalCharacters,
        showFavorites,
        favorites,
        setSearchTerm,
        setShowFavorites,
        fetchCharacters: loadCharacters,
        fetchCharacterById: loadCharacterById,
        fetchComicsByCharacterId: loadComicsByCharacterId,
        addFavorite,
        removeFavorite,
      }}
    >
      {children}
    </MarvelContext.Provider>
  );
};

export const useMarvel = (): MarvelContextType => {
  const context = useContext(MarvelContext);
  if (context === undefined) {
    throw new Error('useMarvel must be used within a MarvelProvider');
  }
  return context;
};
