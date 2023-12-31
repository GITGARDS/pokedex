import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { PokemonCardComponent } from "./components/pokemon-card/pokemon-card.component";
import { PokemonListComponent } from "./components/pokemon-list/pokemon-list.component";

import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [AppComponent, PokemonListComponent, PokemonCardComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
