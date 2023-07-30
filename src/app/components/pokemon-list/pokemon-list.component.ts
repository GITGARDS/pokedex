import { Observable } from "rxjs";
import { PokemonService } from "./../../_services/pokemon.service";
import { Component } from "@angular/core";
import { Pokemon } from "src/_models/pokemon.models";

@Component({
  selector: "app-pokemon-list",
  templateUrl: "./pokemon-list.component.html",
  styleUrls: ["./pokemon-list.component.sass"],
})
export class PokemonListComponent {
  $pokemons!: Observable<any>;
  pokemons: Pokemon[] = [];

  constructor(public pokemonService: PokemonService) {
    this.pokemonServicesFindAll();
  }

  // SERVICES

  pokemonServicesFindAll() {
    this.$pokemons = this.pokemonService.findAll();
    this.$pokemons.subscribe({
      next: (res) => {
        console.log(res);

        const pokemon: Pokemon = {
          number: res.id,
          name: res.name,
          image: res.sprites.back_default,
          types: res.types.map((t: any) => t.type.name),
        };
        this.pokemons[res.id] = pokemon;
      },
    });
  }
}
