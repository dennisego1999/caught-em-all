import type IRepository from "@/Contracts/IRepository";
import type PokemonDTO from "@/Pokemon/PokemonDTO";

export default class PokemonService {
  private static _instance: PokemonService;

  private constructor(private repo: IRepository<PokemonDTO>) {
    //
  }

  public static get instance(): PokemonService {
    if (!this._instance) {
      throw new Error("PokemonService has not been initialized. Call init() first.");
    }

    return this._instance;
  }

  public static init(repo: IRepository<PokemonDTO>): PokemonService {
    if (!this._instance) {
      this._instance = new PokemonService(repo);
    }

    return this._instance;
  }

  public async findRandom(): Promise<PokemonDTO> {
    const id = Math.floor(Math.random() * 1025) + 1;

    return this.repo.findById(id);
  }
}
