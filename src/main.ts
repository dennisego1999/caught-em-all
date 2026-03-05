import { createApp } from "vue";
import "./styles/app.scss";
import App from "./js/Layouts/AppLayout.vue";
import router from "./js/Router";
import PokemonClient from "./js/Classes/Pokemon/PokemonClient";
import PokemonRepository from "./js/Classes/Pokemon/PokemonRepository";
import PokemonService from "./js/Classes/Pokemon/PokemonService";

const app = createApp(App);

app.use(router);

app.config.errorHandler = (error, instance, info) => {
  console.error("Unhandled error:", error);
};

const pokeClient = new PokemonClient();
const pokemonRepo = new PokemonRepository(pokeClient);
PokemonService.init(pokemonRepo);

app.mount("#app");
