import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map, mergeMap, from, Observable } from "rxjs";
import { Pokemon } from "src/_models/pokemon.models";

@Injectable({
  providedIn: "root",
})
export class PokemonService {
  public pokemons: Pokemon[] = [];

  constructor(private httpClient: HttpClient) {}

  findAll(): Observable<any> {
    const urlBase = "https://pokeapi.co/api/v2/pokemon?limit=1008";

    return this.httpClient.get<any>(urlBase).pipe(
      map((v1) => {
        return v1.results;
      }),

      map((v2: any) => {
        // console.log("v2", v2);
        return from(v2).pipe(
          mergeMap((mg1: any) => {
            return this.httpClient.get(mg1.url);
          })
        );
      }),

      mergeMap((mg2) => {
        return mg2;
      })
    );
  }
}
