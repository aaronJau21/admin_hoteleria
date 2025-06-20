<script setup lang="ts">
import { RoomCategoryService } from '@/services'
import { useMutation, useQuery, useQueryClient } from '@tanstack/vue-query'
import { Field, useForm } from 'vee-validate'
import { ref, watch } from 'vue'

interface Props {
  optionsModalUpdate: {
    show: boolean
    categoryId: number
  }
}
const props = defineProps<Props>()

const queryClient = useQueryClient()

const { data } = useQuery({
  queryKey: ['category', props.optionsModalUpdate.categoryId],
  queryFn: async () =>
    RoomCategoryService.getRoomCategoryById(String(props.optionsModalUpdate.categoryId)),
})
const emit = defineEmits(['close'])
const initialValues = ref({ name: '' })

const { handleSubmit, setValues } = useForm({
  initialValues: initialValues.value,
})

watch(data, (newData) => {
  if (newData) {
    setValues({ name: newData.name })
  }
})

const { mutate } = useMutation({
  mutationFn: (payload: { id: string; name: string }) =>
    RoomCategoryService.updateRoomCategory(payload),

  onSuccess: () => {
    queryClient.invalidateQueries({ queryKey: ['categories'] })
    emit('close')
  },
})

const onSubmit = handleSubmit(async (values) => {
  const id = String(props.optionsModalUpdate.categoryId)
  if (!id || id === 'undefined' || id === 'null') {
    console.error('ID de categoría no válido:', id)
    return
  }
  mutate({ id, name: values.name })
})
</script>

<template>
  <div class="absolute bg-black/50 h-screen w-screen top-0 left-0 flex items-center justify-center">
    <form class="bg-white/10 p-5 rounded-2xl w-96" @submit.prevent="onSubmit()">
      <h3 class="text-2xl text-center">Actualizar Categoria</h3>
      <div class="my-5">
        <Field type="text" name="name" placeholder="Type here" class="input w-full" />
      </div>

      <button class="btn btn-success" type="submit">Actualizar</button>
    </form>
  </div>
</template>

<style scoped></style>
