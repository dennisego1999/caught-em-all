<script setup lang="ts">
import { onMounted, ref, type Ref } from "vue";
import type PokemonDTO from "./Pokemon/PokemonDTO";
import PokemonService from "./Pokemon/PokemonService";

const pokemonA: Ref<PokemonDTO | null> = ref(null);
const pokemonB: Ref<PokemonDTO | null> = ref(null);
const weightComparison: Ref<string | null> = ref(null);

onMounted(async () => {
  pokemonA.value = await PokemonService.instance.findRandom();
  pokemonB.value = await PokemonService.instance.findRandom();

  weightComparison.value = await PokemonService.instance.isHeavierThan(
    pokemonA.value.name,
    pokemonB.value.name,
  );
});
</script>

<template>
  <section>
    <h1>Weight Battle</h1>

    <div v-if="pokemonA && pokemonB">
      <p>{{ pokemonA.name }} ({{ pokemonA.weight }}kg)</p>
      <p>{{ pokemonB.name }} ({{ pokemonB.weight }}kg)</p>

      <p v-if="weightComparison">
        <strong>{{ weightComparison }}</strong>
      </p>
    </div>
  </section>
</template>
