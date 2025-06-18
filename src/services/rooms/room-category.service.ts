import type { ICategoriesRooms } from '@/interfaces'
import { api } from '@/lib/api/axios'

export class RoomCategoryService {
  public static async getRoomCategories(): Promise<ICategoriesRooms[]> {
    const { data } = await api.get<ICategoriesRooms[]>('/category-room')

    return data
  }
}
