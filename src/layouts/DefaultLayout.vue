<script setup lang="ts">
import SidebarComponent from '@/components/ui/sidebar/SidebarComponent.vue'
</script>

<template>
  <div class="flex">
    <SidebarComponent />
    <div class="container mx-auto">
      <RouterView />
    </div>
  </div>
</template>

<style scoped></style>
