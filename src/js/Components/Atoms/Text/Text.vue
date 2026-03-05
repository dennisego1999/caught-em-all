<script setup lang="ts">
import { useAttrs } from "vue";

const props = defineProps({
  tag: { type: String, default: "div" },
  fontSize: { type: String, default: "inherit" },
  textAlign: { type: String, default: null },
  forceAlign: { type: String, default: null },
  cap: { default: null },
  clamp: { default: null },
  flow: { type: String, default: null },
  variant: { type: String, default: null },
  wrap: { type: String, default: null },
});

const attrs = useAttrs();
const { class: _, ...filteredAttrs } = attrs as Record<string, unknown>;
</script>

<template>
  <component
    :is="props.tag"
    class="text"
    v-bind="{
      ...filteredAttrs,
      'data-font-size': props.fontSize,
      'data-text-align': props.textAlign,
      'data-force-align': props.forceAlign,
      'data-cap': props.cap,
      'data-clamp': props.clamp,
      'data-flow': props.flow,
      'data-variant': props.variant,
      'data-wrap': props.wrap,
    }"
    ><slot
  /></component>
</template>
