import type IHttpClient from "@/js/Classes/Contracts/IHttpClient";
import type IPokemon from "@/js/Classes/Pokemon/IPokemon";
import PokemonDTO from "@/js/Classes/Pokemon/PokemonDTO";
import type IPokemonRepository from "./IPokemonRepository";

export default class PokemonRepository implements IPokemonRepository {
  constructor(private client: IHttpClient) {
    //
  }

  async findById(id: number): Promise<PokemonDTO> {
    const response = await this.client.get<IPokemon>(`pokemon/${id}`);

    return PokemonDTO.fromResponse(response);
  }

  async findByName(name: string): Promise<PokemonDTO> {
    const response = await this.client.get<IPokemon>(`pokemon/${name}`);

    return PokemonDTO.fromResponse(response);
  }
}
