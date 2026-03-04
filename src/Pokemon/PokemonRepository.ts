import type IHttpClient from "@/Contracts/IHttpClient";
import type IPokemon from "@/Pokemon/IPokemon";
import type IRepository from "@/Contracts/IRepository";
import PokemonDTO from "@/Pokemon/PokemonDTO";

export default class PokemonRepository implements IRepository<PokemonDTO> {
  constructor(private client: IHttpClient) {
    //
  }

  async findById(id: number): Promise<PokemonDTO> {
    const response = await this.client.get<IPokemon>(`/pokemon/${id}`);

    return PokemonDTO.fromResponse(response);
  }
}
