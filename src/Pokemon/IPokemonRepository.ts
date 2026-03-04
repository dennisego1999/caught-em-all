import type IRepository from "@/Contracts/IRepository";
import type PokemonDTO from "@/Pokemon/PokemonDTO";

export default interface IPokemonRepository extends IRepository<PokemonDTO> {
  findByName(name: string): Promise<PokemonDTO>;
}
