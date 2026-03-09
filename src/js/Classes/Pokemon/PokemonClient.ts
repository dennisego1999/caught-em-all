import HttpClient from "@/js/Classes/Clients/HttpClient";
import type IPokemonClient from "@/js/Classes/Pokemon/IPokemonClient";
import type IPokemon from "./IPokemon";

export default class PokemonClient extends HttpClient implements IPokemonClient {
  constructor() {
    super("https://pokeapi.co/api/v2/");
  }

  getPokemonById(id: number): Promise<IPokemon> {
    return this.get<IPokemon>(`pokemon/${id}`);
  }

  getPokemonByName(name: string): Promise<IPokemon> {
    return this.get<IPokemon>(`pokemon/${name}`);
  }
}
