export default class InvalidPokemonError extends Error {
  constructor() {
    super("Invalid Pokemon response");

    this.name = "InvalidPokemonError";
  }
}
