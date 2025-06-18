import type { ICategoriesRooms } from '@/interfaces'
import { api } from '@/lib/api/axios'

export class RoomCategoryService {
  public static async getRoomCategories(): Promise<ICategoriesRooms[]> {
    const { data } = await api.get<ICategoriesRooms[]>('/category-room')

    return data
  }

  public static async creteRoomCategory(name: string): Promise<ICategoriesRooms> {
    const { data } = await api.post<ICategoriesRooms>('/category-room', {
      name,
    })

    return data
  }

  public static async updateStatusRoomCategory(id: string): Promise<ICategoriesRooms> {
    const { data } = await api.patch<ICategoriesRooms>(`/category-room/status/${id}`)

    return data
  }
}
