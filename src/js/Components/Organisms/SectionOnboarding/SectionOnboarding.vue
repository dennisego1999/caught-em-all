<script setup lang="ts">
import Heading from "@/js/Components/Atoms/Heading/Heading.vue";
import Text from "@/js/Components/Atoms/Text/Text.vue";
import Section from "@/js/Components/Fundaments/Section/Section.vue";
</script>

<template>
  <Section
    class="section-onboarding"
    theme="dark"
    padding="both"
    gutter="both"
    gap="tiny"
    :background="true"
  >
    <Heading> Gotta fetch 'em all. </Heading>

    <Text>
      Welcome to the most scientifically questionable Pokémon experience on the internet. We're
      tapping straight into the PokéAPI to bring you live Pokédex data, settle debates you never
      knew you needed settled, and find out once and for all which Pokémon would absolutely destroy
      your bathroom scale.
    </Text>
  </Section>
</template>
