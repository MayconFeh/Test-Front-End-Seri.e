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
  setSearchTerm: (term: string) => void;
  fetchCharacters: (searchTerm?: string) => void;
  fetchCharacterById: (id: string) => void;
  fetchComicsByCharacterId: (id: string) => void;
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

  const loadCharacters = useCallback(async (searchTerm?: string) => {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchCharacters(searchTerm ? { nameStartsWith: searchTerm } : {});
      setCharacters(data || []); 
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

  return (
    <MarvelContext.Provider
      value={{
        characters,
        character,
        comics,
        loading,
        error,
        searchTerm,
        setSearchTerm,
        fetchCharacters: loadCharacters,
        fetchCharacterById: loadCharacterById,
        fetchComicsByCharacterId: loadComicsByCharacterId,
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
