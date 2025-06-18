import type { ICategoriesRooms } from '@/interfaces'
import { api } from '@/lib/api/axios'

export class RoomCategoryService {
  public static async getRoomCategories(): Promise<ICategoriesRooms[]> {
    // Espera 3 segundos antes de hacer la petición
    await new Promise((resolve) => setTimeout(resolve, 3000))
    const { data } = await api.get<ICategoriesRooms[]>('/category-room')

    return data
  }
}
