<script setup lang="ts">
import TitleComponent from '@/components/ui/title/TitleComponent.vue'
import { RoomCategoryService } from '@/services'
import { useQuery } from '@tanstack/vue-query'

const { data } = useQuery({
  queryKey: ['categories'],
  queryFn: async () => await RoomCategoryService.getRoomCategories(),
})

console.log(data.value)
</script>

<template>
  <section>
    <TitleComponent title="Categorías" />

    <div class="overflow-x-auto">
      <table class="table table-zebra">
        <!-- head -->
        <thead>
          <tr>
            <th class="text-center">id</th>
            <th class="text-center">Nombre</th>
            <th class="text-center">Estado</th>
            <th class="text-center">Opciones</th>
          </tr>
        </thead>
        <tbody>
          <!-- row 1 -->
          <tr v-for="category in data" :key="category.id">
            <th class="text-center">{{ category.id }}</th>
            <td class="text-center">{{ category.name }}</td>
            <td class="text-center">{{ category.status }}</td>
            <td class="flex justify-center gap-x-2">
              <button class="btn btn-warning">Actualizar</button>
              <button class="btn btn-error">Eliminar</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>

<style scoped></style>
