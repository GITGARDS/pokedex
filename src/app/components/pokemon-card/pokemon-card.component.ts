import { Component, Input } from "@angular/core";
import {
  Pokemon,
  getPokemonImage,
  getPokemonNumber,
} from "src/_models/pokemon.models";

@Component({
  selector: "app-pokemon-card",
  templateUrl: "./pokemon-card.component.html",
  styleUrls: ["./pokemon-card.component.sass"],
})
export class PokemonCardComponent {
  @Input() pokemon!: Pokemon;

  public getPokemonImage = getPokemonImage;
  public getPokemonNumber = getPokemonNumber;
}
