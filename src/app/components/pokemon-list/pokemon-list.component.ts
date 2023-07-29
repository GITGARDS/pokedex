import { Component } from "@angular/core";
import { Pokemon, Type } from "src/_models/pokemon.models";

@Component({
  selector: "app-pokemon-list",
  templateUrl: "./pokemon-list.component.html",
  styleUrls: ["./pokemon-list.component.sass"],
})
export class PokemonListComponent {
  pokemons: Pokemon[] = [
    {
      image:
        "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png",
      number: 1,
      name: "Bulbasaur",
      types: [Type.Grass, Type.Poison],
    },
    {
      image:
        "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/004.png",
      number: 4,
      name: "Charmander",
      types: [Type.Fire],
    },
  ];
}
