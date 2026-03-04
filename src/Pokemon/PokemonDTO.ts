import type IPokemon from "@/Pokemon/IPokemon";

export default class PokemonDTO {
  constructor(
    public readonly id: number,
    public readonly name: string,
    public readonly height: number,
    public readonly weight: number,
  ) {
    //
  }

  static fromResponse(data: IPokemon): PokemonDTO {
    if (!PokemonDTO.isValid(data)) {
      throw new Error("Invalid Pokemon response");
    }

    return new PokemonDTO(data.id, data.name, data.height, data.weight);
  }

  private static isValid(data: unknown): data is IPokemon {
    return (
      typeof data === "object" &&
      data !== null &&
      typeof (data as IPokemon).id === "number" &&
      typeof (data as IPokemon).name === "string" &&
      typeof (data as IPokemon).height === "number" &&
      typeof (data as IPokemon).weight === "number"
    );
  }
}
