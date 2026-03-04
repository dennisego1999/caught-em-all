import type PokemonDTO from "@/Pokemon/PokemonDTO";
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

  public async isHeavierThan(nameA: string, nameB: string): Promise<string> {
    const [a, b] = await Promise.all([this.repo.findByName(nameA), this.repo.findByName(nameB)]);

    return a.weight > b.weight
      ? `${a.name} is heavier than ${b.name}`
      : `${b.name} is heavier than ${a.name}`;
  }
}
