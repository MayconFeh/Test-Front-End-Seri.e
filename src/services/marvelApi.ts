import { Character } from "../interfaces/Character.interface";
import { api } from "./api";

interface ApiResponse {
  data: {
    results: Character[];
    total: number;
  };
}

export const fetchCharacters = async (
  nameStartsWith?: string
): Promise<ApiResponse> => {
  const params: Record<string, any> = {
    limit: 20,
    offset: 1,
  };

  if (nameStartsWith) {
    params.nameStartsWith = nameStartsWith;
  }

  const { data } = await api.get<ApiResponse>("characters", { params });
  return data;
};

export const fetchCharacterById = async (id: string): Promise<Character> => {
  const { data } = await api.get<{ data: { results: Character[] } }>(
    `characters/${id}`
  );
  return data.data.results[0];
};

export const fetchComicsByCharacterId = async (id: string): Promise<any[]> => {
  const { data } = await api.get<{ data: { results: any[] } }>(
    `characters/${id}/comics`,
    {
      params: {
        limit: 10,
        orderBy: "-onsaleDate",
        offset: 1,
      },
    }
  );
  return data.data.results;
};
