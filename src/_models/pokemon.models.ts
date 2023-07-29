export interface Pokemon {
  image: string;
  number: number;
  name: string;
  types: Type[];
}

export enum Type {
  Grass = "Grass",
  Poison = "Poison",
  Fire = "Fire",
}
