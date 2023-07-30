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

export const getPokemonImage = (pokemon: Pokemon): string => {
  return `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${getPokemonNumber(
    pokemon
  )}.png`;
};

export const getPokemonNumber = (
  pokemon: Pokemon,
  size: number = 3
): string => {
  return leadingZero(pokemon.number, size);
};

const leadingZero = (str: string | number, size: number): string => {
  let s = String(str);
  while (s.length < (size || 2)) {
    s = "0" + s;
  }
  return s;
};
