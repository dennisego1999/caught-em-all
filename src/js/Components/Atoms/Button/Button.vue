<script setup lang="ts">
import { RouterLink } from "vue-router";

interface Props {
  disabled?: boolean;
  method?: string;
  href?: string | null;
  external?: boolean;
}

withDefaults(defineProps<Props>(), {
  disabled: false,
  method: "get",
  href: null,
  external: false,
});

const emit = defineEmits<{
  (e: "click"): void;
}>();
</script>

<template>
  <a
    v-if="href && external"
    class="button"
    :class="{ 'button--disabled': disabled }"
    :href="href"
    @click="emit('click')"
  >
    <slot />
  </a>

  <RouterLink
    v-else-if="href"
    class="button"
    :class="{ 'button--disabled': disabled }"
    :to="href"
    @click="emit('click')"
  >
    <slot />
  </RouterLink>

  <button v-else class="button" :disabled="disabled" @click="emit('click')">
    <slot />
  </button>
</template>
