<script setup lang="ts">
import { onMounted, ref, type Ref } from "vue";
import { useRoute, type RouteParamsGeneric } from "vue-router";
import type PokemonDTO from "../Classes/Pokemon/PokemonDTO";
import PokemonService from "../Classes/Pokemon/PokemonService";

const rawName = useRoute().params.name;
const pokemonName: string | undefined = Array.isArray(rawName) ? rawName[0] : rawName;
const pokemon: Ref<PokemonDTO | null> = ref(null);

onMounted(async () => {
  if (!pokemonName) {
    return;
  }

  pokemon.value = await PokemonService.instance.search(pokemonName);
});
</script>

<template>
  <pre v-if="pokemon">{{ pokemon }}</pre>
</template>
