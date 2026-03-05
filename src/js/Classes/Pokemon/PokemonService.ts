import type PokemonDTO from "@/js/Classes/Pokemon/PokemonDTO";
import type IPokemonRepository from "./IPokemonRepository";

export default class PokemonService {
  private static _instance: PokemonService;

  private constructor(private repo: IPokemonRepository) {
    //
  }

  public static get instance(): PokemonService {
    if (!this._instance) {
      throw new Error("PokemonService has not been initialized. Call init() first.");
    }

    return this._instance;
  }

  public static init(repo: IPokemonRepository): PokemonService {
    if (!this._instance) {
      this._instance = new PokemonService(repo);
    }

    return this._instance;
  }

  public async findRandom(): Promise<PokemonDTO> {
    const id = Math.floor(Math.random() * 1025) + 1;

    return this.repo.findById(id);
  }

  public compareWeight(a: PokemonDTO, b: PokemonDTO): string {
    return a.weight > b.weight
      ? `${a.name} is heavier than ${b.name}`
      : `${b.name} is heavier than ${a.name}`;
  }
}
