import { Character } from "../interfaces/Character.interface";
import { api } from "./api";

interface ApiResponse {

  data: {
    results: Character[];
    total: number;
  };
}

export const fetchCharacters = async (params?: { nameStartsWith?: string }): Promise<ApiResponse> => {
  const response = await api.get<ApiResponse>('characters', {
    params,
  });
  return response.data;
};

export const fetchCharacterById = async (id: string): Promise<Character> => {
  const response = await api.get<{ data: { results: Character[] } }>(`characters/${id}`);
  return response.data.data.results[0];
};

export const fetchComicsByCharacterId = async (id: string): Promise<any[]> => {
  const response = await api.get<{ data: { results: any[] } }>(`characters/${id}/comics`);
  return response.data.data.results;
};
