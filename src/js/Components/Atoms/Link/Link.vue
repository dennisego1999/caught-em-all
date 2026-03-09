<script setup lang="ts">
import Text from "@/js/Components/Atoms/Text/Text.vue";

defineProps<{
  href: string;
}>();
</script>

<template>
  <RouterLink class="link" :to="href">
    <slot />
  </RouterLink>
</template>
