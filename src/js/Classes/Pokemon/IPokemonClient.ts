import type IPokemon from "@/js/Classes/Pokemon/IPokemon";

export default interface IPokemonClient {
  getPokemonById(id: number): Promise<IPokemon>;
  getPokemonByName(name: string): Promise<IPokemon>;
}
