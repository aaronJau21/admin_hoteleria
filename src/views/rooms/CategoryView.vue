<script setup lang="ts">
import ModalCategory from '@/components/category/modal/ModalCategory.vue'
import ModalCategoryUpdate from '@/components/category/modal/ModalCategoryUpdate.vue'
import TitleComponent from '@/components/ui/title/TitleComponent.vue'
import { RoomCategoryService } from '@/services'
import { useMutation, useQuery, useQueryClient } from '@tanstack/vue-query'
import { reactive } from 'vue'
import { useToast } from 'vue-toastification'

const queryClient = useQueryClient()
const toast = useToast()

const optionsModalUpdate = reactive<{
  show: boolean
  categoryId: number
}>({
  show: false,
  categoryId: 0,
})

function openModalUpdate(categoryId: number) {
  optionsModalUpdate.show = true
  optionsModalUpdate.categoryId = +categoryId
}

const { data, isLoading } = useQuery({
  queryKey: ['categories'],
  queryFn: async () => await RoomCategoryService.getRoomCategories(),
  staleTime: 1000 * 60 * 15, // 15 minutes
})

const { mutate: updateStatus } = useMutation({
  mutationFn: RoomCategoryService.updateStatusRoomCategory,
  onSuccess: () => {
    queryClient.invalidateQueries({
      queryKey: ['categories'],
    })

    toast.success('Estado actualizado correctamente')
  },
})

const toggleStatus = (categoryId: string) => {
  updateStatus(categoryId)
}

const { mutate: deleteCategoryMutation } = useMutation({
  mutationFn: RoomCategoryService.deleteRoomCategory,
  onSuccess: () => {
    queryClient.invalidateQueries({
      queryKey: ['categories'],
    })

    toast.success('Categoría eliminada correctamente')
  },
})

function deleteCategory(id: number) {
  deleteCategoryMutation(id)
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
              <button class="btn btn-warning" @click="openModalUpdate(category.id)">
                Actualizar
              </button>
              <button @click="deleteCategory(category.id)" class="btn btn-error">Eliminar</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Modals -->
    <ModalCategory />
    <div v-if="optionsModalUpdate.show">
      <ModalCategoryUpdate
        :optionsModalUpdate="optionsModalUpdate"
        @close="optionsModalUpdate.show = false"
      />
    </div>
  </section>
</template>

<style scoped></style>
