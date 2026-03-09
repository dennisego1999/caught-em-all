import type IPokemon from "@/js/Classes/Pokemon/IPokemon";
import PokemonDTO from "@/js/Classes/Pokemon/PokemonDTO";
import type IPokemonRepository from "./IPokemonRepository";
import type IPokemonClient from "./IPokemonClient";

export default class PokemonRepository implements IPokemonRepository {
  constructor(private client: IPokemonClient) {
    //
  }

  async findById(id: number): Promise<PokemonDTO> {
    const response = await this.client.getPokemonById(id);
    return PokemonDTO.fromResponse(response);
  }

  async findByName(name: string): Promise<PokemonDTO> {
    const response = await this.client.getPokemonByName(name);
    return PokemonDTO.fromResponse(response);
  }
}
