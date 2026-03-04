<script setup lang="ts">
import { onMounted, ref, type Ref } from "vue";
import type PokemonDTO from "./Pokemon/PokemonDTO";
import PokemonService from "./Pokemon/PokemonService";

const pokemon: Ref<PokemonDTO | null> = ref(null);

onMounted(async () => {
  pokemon.value = await PokemonService.instance.findRandom();
});
</script>

<template>
  <h1>Random Pokémon</h1>

  <span v-if="pokemon">
    {{ pokemon }}
  </span>
</template>
