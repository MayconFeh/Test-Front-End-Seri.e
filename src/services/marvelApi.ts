import { api } from './api';

export interface Character {
  id: number;
  name: string;
  description: string;
  thumbnail: {
    path: string;
    extension: string;
  };
}

export const fetchCharacters = async (params?: Record<string, any>) => {
  const response = await api.get<{ data: { results: Character[] } }>('characters', {
    params,
  });
  return response.data.data.results;
};

export const fetchCharacterById = async (id: string) => {
  const response = await api.get<{ data: { results: Character[] } }>(`characters/${id}`);
  return response.data.data.results[0];
};

export const fetchComicsByCharacterId = async (id: string) => {
  const response = await api.get<{ data: { results: any[] } }>(`characters/${id}/comics`);
  return response.data.data.results;
};
