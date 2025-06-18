<script setup lang="ts">
import SidebarComponent from '@/components/ui/sidebar/SidebarComponent.vue'
</script>

<template>
  <div class="flex">
    <SidebarComponent />
    <div class="flex-1 container mx-auto mt-5">
      <RouterView />
    </div>
  </div>
</template>

<style scoped></style>
