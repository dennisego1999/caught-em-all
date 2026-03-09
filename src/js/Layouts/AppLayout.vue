<script setup lang="ts">
import Navigation from "../Components/Organisms/Navigation/Navigation.vue";
</script>

<template>
  <Navigation />

  <RouterView v-slot="{ Component }">
    <main>
      <Component :is="Component" />
    </main>
  </RouterView>
</template>
