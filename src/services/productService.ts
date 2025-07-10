import axios from '@/services/api'
import type { Product } from '@/types/Product'

export const getProducts = async (): Promise<Product[]> => {
  const response = await axios.get<Product[]>('/products')

  return response.data
}
