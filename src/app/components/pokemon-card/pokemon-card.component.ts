import { Component, Input } from "@angular/core";
import { Pokemon } from "src/_models/pokemon.models";

@Component({
  selector: "app-pokemon-card",
  templateUrl: "./pokemon-card.component.html",
  styleUrls: ["./pokemon-card.component.sass"],
})
export class PokemonCardComponent {
  @Input() pokemon!: Pokemon;

  leadingZero(str: string | number, size: number = 3): string {
    let s = String(str);
    while (s.length < (size || 2)) {
      s = "0" + s;
    }
    return s;
  }
}
