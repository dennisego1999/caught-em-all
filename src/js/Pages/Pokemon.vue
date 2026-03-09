<script setup lang="ts">
import { onMounted, ref, type Ref } from "vue";
import { useRoute } from "vue-router";
import type PokemonDTO from "@/js/Classes/Pokemon/PokemonDTO";
import PokemonService from "@/js/Classes/Pokemon/PokemonService";
import Heading from "@/js/Components/Atoms/Heading/Heading.vue";
import Section from "@/js/Components/Fundaments/Section/Section.vue";
import Visual from "@/js/Components/Molecules/Visual/Visual.vue";

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
  <Section
    v-if="pokemon"
    theme="dark"
    gutter="both"
    padding="both"
    padding-size="tiny"
    :background="true"
  >
    <Heading :capitalize="true">{{ pokemon.name }}</Heading>

    <Visual
      v-if="pokemon.frontSprite"
      fit="contain"
      :src="pokemon.frontSprite"
      :alt="pokemon.name"
    />
  </Section>
</template>
