import type PokemonDTO from "@/js/Classes/Pokemon/PokemonDTO";

export default interface IPokemonPage {
  pokemons: PokemonDTO[];
  hasNext: boolean;
}
