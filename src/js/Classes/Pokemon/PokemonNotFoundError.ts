export default class PokemonNotFoundError extends Error {
  constructor(identifier: string) {
    super(`Pokémon "${identifier}" not found`);

    this.name = "PokemonNotFoundError";
  }
}
