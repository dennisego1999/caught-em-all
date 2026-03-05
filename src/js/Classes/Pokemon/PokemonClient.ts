import HttpClient from "@/js/Classes/Clients/HttpClient";

export default class PokemonClient extends HttpClient {
  constructor() {
    super("https://pokeapi.co/api/v2/");
  }
}
