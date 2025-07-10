import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { Product } from '@/types/Product'

export const useProductStore = defineStore('product', () => {
  const produtos = ref<Product[]>([])
  const filtroCategoria = ref('')
  const paginaAtual = ref(1)

  function setProdutos(novosProdutos: Product[]) {
    produtos.value = novosProdutos
  }

  return {
    produtos,
    filtroCategoria,
    paginaAtual,
    setProdutos,
  }
})
