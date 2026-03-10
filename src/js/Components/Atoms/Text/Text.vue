<script setup lang="ts">
import { useAttrs } from "vue";

interface Props {
  tag?: string;
  fontSize?: string;
  textAlign?: string | null;
  forceAlign?: string | null;
  cap?: string | null;
  clamp?: string | null;
  flow?: string | null;
  variant?: string | null;
  wrap?: string | null;
}

const props = withDefaults(defineProps<Props>(), {
  tag: "div",
  fontSize: "inherit",
  textAlign: null,
  forceAlign: null,
  cap: null,
  clamp: null,
  flow: null,
  variant: null,
  wrap: null,
});

const { class: _, ...filteredAttrs } = useAttrs() as Record<string, unknown>;
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
