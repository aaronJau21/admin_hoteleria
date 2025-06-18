<script setup lang="ts">
import { RoomCategoryService } from '@/services'
import { useMutation, useQueryClient } from '@tanstack/vue-query'
import { Field, useForm } from 'vee-validate'
import { ref } from 'vue'

const { handleSubmit } = useForm<{ name: string }>()
const query = useQueryClient()
const errorResponse = ref<string | null>(null)

const { mutate, isError } = useMutation({
  mutationFn: RoomCategoryService.creteRoomCategory,
  onSuccess: () => {
    query.invalidateQueries({
      queryKey: ['categories'],
    })
    // Cerrar el modal después de crear la categoría
    const modal = document.getElementById('modal_create_category') as HTMLDialogElement | null
    if (modal) modal.close()
  },
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onError: (error: any) => {
    errorResponse.value = error.response.data.message
  },
})
const onSubmit = handleSubmit(async (values) => mutate(values.name))
</script>
<template>
  <dialog id="modal_create_category" class="modal">
    <div class="modal-box">
      <div class="flex justify-between items-center">
        <h3 class="text-lg font-bold">Crear evento</h3>
        <form method="dialog">
          <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
        </form>
      </div>

      <form @submit.prevent="onSubmit()" class="mt-5">
        <div class="mb-3">
          <Field name="name" type="text" placeholder="Type here" class="input w-full" />
          <div v-if="isError">
            <p class="text-red-500">{{ errorResponse }}</p>
          </div>
        </div>

        <button class="btn btn-info">Crear</button>
      </form>
    </div>

    <form method="dialog" class="modal-backdrop">
      <button>close</button>
    </form>
  </dialog>
</template>

<style scoped></style>
