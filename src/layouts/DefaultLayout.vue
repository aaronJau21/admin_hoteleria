<script setup lang="ts">
import SidebarComponent from '@/components/ui/sidebar/SidebarComponent.vue'
</script>

<template>
  <div class="flex">
    <SidebarComponent />
    <RouterView />
  </div>
</template>

<style scoped></style>
