<template>
  <div class="bg-secondary py-3 px-3 rounded-2xl flex justify-between items-center">
    <h1 class="text-3xl text-primary font-semibold">{{ $props.title }}</h1>

    <div class="">
      <!-- <button class="bg-success text-primary text-xl px-3 py-1 rounded-2xl">Crear</button> -->
      <button class="btn btn-success">Crear</button>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  title: string
}

defineProps<Props>()
</script>

<style scoped></style>
