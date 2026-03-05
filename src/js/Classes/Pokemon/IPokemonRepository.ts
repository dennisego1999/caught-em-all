import type IRepository from "@/js/Contracts/IRepository";
import type PokemonDTO from "@/js/Pokemon/PokemonDTO";

export default interface IPokemonRepository extends IRepository<PokemonDTO> {
  findByName(name: string): Promise<PokemonDTO>;
}
