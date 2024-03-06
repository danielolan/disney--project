import { Movies } from ".";


export interface Category {
  id: number;
  name: string;
  thumbnail: string;
  movies: Movies[]
}

