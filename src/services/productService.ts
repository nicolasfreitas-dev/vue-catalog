import type { Product } from '@/types/Product'

export const getProdutos = async (): Promise<Product[]> => {
  const response = await fetch('https://dummyjson.com/products?limit=20')
  const data = await response.json()

  return data.products.map((p: any) => ({
    id: p.id,
    nome: p.title,
    descricao: p.description,
    preco: p.price,
    categoria: p.category,
    estoque: 10,
    imagemUrl: p.thumbnail,
  }))
}
