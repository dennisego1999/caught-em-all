<script setup lang="ts">
import { useAttrs } from "vue";

interface Props {
  tag?: string;
  fontSize?: string;
  textAlign?: string | null;
  forceAlign?: string | null;
  cap?: string | null;
  clamp?: string | null;
  variant?: string | null;
}

const props = withDefaults(defineProps<Props>(), {
  tag: "h2",
  fontSize: "2",
  textAlign: null,
  forceAlign: null,
  cap: null,
  clamp: null,
  variant: null,
});

const { class: _, ...filteredAttrs } = useAttrs() as Record<string, unknown>;
</script>

<template>
  <component
    :is="props.tag"
    class="heading"
    v-bind="{
      ...filteredAttrs,
      'data-heading-size': props.fontSize,
      'data-text-align': props.textAlign,
      'data-force-align': props.forceAlign,
      'data-cap': props.cap,
      'data-clamp': props.clamp,
      'data-variant': props.variant,
    }"
    ><slot
  /></component>
</template>
