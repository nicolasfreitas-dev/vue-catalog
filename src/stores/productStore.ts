import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { Product } from '@/types/Product'
import { getProdutos } from '@/services/productService'

export const useProductStore = defineStore('product', () => {
  const produtos = ref<Product[]>([])
  const filtroCategoria = ref('')
  const paginaAtual = ref(1)

  function setProdutos(novosProdutos: Product[]) {
    produtos.value = novosProdutos
  }

  async function carregarProdutos() {
    produtos.value = await getProdutos()
  }

  return {
    produtos,
    filtroCategoria,
    paginaAtual,
    setProdutos,
    carregarProdutos,
  }
})
