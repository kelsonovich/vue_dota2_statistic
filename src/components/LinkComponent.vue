<script setup lang="ts">
defineProps<{
  to: string;
  linkClass: string;
  title: string;
}>();
</script>

<template>
  <a href="{{ to }}" class="{{ linkClass }}">{{ title }}</a>
</template>

