<script setup lang="ts">
import type PokemonDTO from "@/js/Classes/Pokemon/PokemonDTO";
import Text from "../../Atoms/Text/Text.vue";
import Visual from "../Visual/Visual.vue";
import Heading from "../../Atoms/Heading/Heading.vue";
import Link from "../../Atoms/Link/Link.vue";
import PokemonIdentifier from "../../Atoms/PokemonIdentifier/PokemonIdentifier.vue";

defineProps<{
  pokemon: PokemonDTO;
}>();
</script>

<template>
  <Link class="pokemon-card" :href="`/pokemon/${pokemon.name}`">
    <article>
      <header class="pokemon-card__header">
        <PokemonIdentifier font-size="4" :id="pokemon.id" />

        <Text class="pokemon-card__type" font-size="4">
          <strong>POKéMON</strong>
        </Text>
      </header>

      <div class="pokemon-card__sprite-wrap">
        <div class="pokemon-card__sprite-glow" />

        <Visual
          v-if="pokemon.frontSprite"
          class="pokemon-card__sprite"
          fit="contain"
          :src="pokemon.frontSprite"
          :alt="pokemon.name"
        />

        <Heading v-else class="pokemon-card__sprite-placeholder">?</Heading>
      </div>

      <footer class="pokemon-card__body">
        <Heading class="pokemon-card__name" font-size="6">{{ pokemon.name }}</Heading>

        <div class="pokemon-card__stats">
          <div class="pokemon-card__stat">
            <Text class="pokemon-card__stat-label" font-size="5">HT</Text>

            <Text class="pokemon-card__stat-value" font-size="3">
              {{ (pokemon.height / 10).toFixed(1) }}m
            </Text>
          </div>

          <div class="pokemon-card__divider" />

          <div class="pokemon-card__stat">
            <Text class="pokemon-card__stat-label" font-size="5">WT</Text>

            <Text class="pokemon-card__stat-value" font-size="3">
              {{ (pokemon.weight / 10).toFixed(1) }}kg
            </Text>
          </div>
        </div>
      </footer>
    </article>
  </Link>
</template>
