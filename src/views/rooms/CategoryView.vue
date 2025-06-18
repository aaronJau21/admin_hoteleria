<script setup lang="ts">
import ModalCategory from '@/components/category/modal/ModalCategory.vue'
import TitleComponent from '@/components/ui/title/TitleComponent.vue'
import { RoomCategoryService } from '@/services'
import { useMutation, useQuery } from '@tanstack/vue-query'

const { data, isLoading } = useQuery({
  queryKey: ['categories'],
  queryFn: async () => await RoomCategoryService.getRoomCategories(),
})

const { mutate } = useMutation({
  mutationFn: RoomCategoryService.updateStatusRoomCategory,
  onSuccess: console.log,
})

const toggleStatus = (categoryId: string) => {
  mutate(categoryId)
}
</script>

<template>
  <section>
    <TitleComponent title="Categorías">
      <button class="btn btn-success" onclick="modal_create_category?.showModal()">Crear</button>
    </TitleComponent>

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
          <tr v-if="isLoading">
            <td colspan="4" class="text-center">
              <span class="loading loading-spinner loading-xl text-secondary"></span>
            </td>
          </tr>
          <tr v-else v-for="category in data" :key="category.id">
            <th class="text-center">{{ category.id }}</th>
            <td class="text-center">{{ category.name }}</td>
            <td class="text-center">
              <input
                @click="toggleStatus(String(category.id))"
                type="checkbox"
                :checked="category.status"
                class="toggle toggle-success"
              />
            </td>
            <td class="flex justify-center gap-x-2">
              <button class="btn btn-warning">Actualizar</button>
              <button class="btn btn-error">Eliminar</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <ModalCategory />
  </section>
</template>

<style scoped></style>
