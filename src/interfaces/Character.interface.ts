export interface Character {
  id: string;
  name: string;
  description: string;
  thumbnail: {
    path: string;
    extension: string;
  };
  modified: string
  comics: {
    available: number;
    items: {
      name : string
    }
  };
  series?: {
    available: number;
  };

}
