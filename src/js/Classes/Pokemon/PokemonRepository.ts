import type IPokemonClient from "@/js/Classes/Pokemon/IPokemonClient";
import PokemonDTO from "@/js/Classes/Pokemon/PokemonDTO";
import type IPokemonRepository from "@/js/Classes/Pokemon/IPokemonRepository";
import HttpError from "@/js/Classes/Errors/HttpError";
import PokemonNotFoundError from "@/js/Classes/Pokemon/PokemonNotFoundError";

export default class PokemonRepository implements IPokemonRepository {
  constructor(private client: IPokemonClient) {
    //
  }

  async findById(id: number): Promise<PokemonDTO> {
    try {
      const response = await this.client.getPokemonById(id);
      return PokemonDTO.fromResponse(response);
    } catch (e) {
      if (e instanceof HttpError && e.status === 404) {
        throw new PokemonNotFoundError(String(id));
      }

      throw e;
    }
  }

  async findByName(name: string): Promise<PokemonDTO> {
    try {
      const response = await this.client.getPokemonByName(name);
      return PokemonDTO.fromResponse(response);
    } catch (e) {
      if (e instanceof HttpError && e.status === 404) {
        throw new PokemonNotFoundError(name);
      }

      throw e;
    }
  }

  async findAll(
    offset: number,
    limit: number,
  ): Promise<{ pokemons: PokemonDTO[]; hasNext: boolean }> {
    const list = await this.client.getPokemonList(offset, limit);

    /**
     * PokéAPI's list endpoint only returns { name, url } per Pokémon — there is no
     * bulk endpoint that returns full Pokémon data. We therefore fetch each Pokémon
     * individually by name.
     */
    const pokemons = await Promise.all(list.results.map((p) => this.findByName(p.name)));

    return { pokemons, hasNext: list.next !== null };
  }
}
