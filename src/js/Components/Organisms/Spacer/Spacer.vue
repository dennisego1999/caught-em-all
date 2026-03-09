<script setup lang="ts">
interface Props {
  size?: number;
}

withDefaults(defineProps<Props>(), {
  size: 1,
});
</script>

<template>
  <div class="spacer" :data-size="size"></div>
</template>
