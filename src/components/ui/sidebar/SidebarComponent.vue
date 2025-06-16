<script setup lang="ts">
interface INavtigation {
  title: string
  name: string
}

const navigation: INavtigation[] = [{ title: 'Inicio', name: 'home' }]
const navigationRooms: INavtigation[] = [{ title: 'Categorias', name: 'category-room' }]
</script>
<template>
  <div class="w-64 p-5 border-r border-white h-screen">
    <h2 class="text-center text-2xl text-secondary">Hotel</h2>

    <nav>
      <ul>
        <li v-for="item in navigation" :key="item.name">
          <RouterLink :to="{ name: item.name }">{{ item.title }}</RouterLink>
        </li>
        <li class="mt-5">
          <h3 class="text-lg text-secondary italic">Habitaciones</h3>
          <ul class="ml-5">
            <li v-for="item in navigationRooms" :key="item.name">
              <RouterLink :to="{ name: item.name }">{{ item.title }}</RouterLink>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  </div>
</template>

<style scoped>
.router-link-active {
  color: var(--color-secondary);
  font-weight: bold;
}
</style>
