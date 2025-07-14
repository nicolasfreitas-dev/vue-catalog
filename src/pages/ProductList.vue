<script lang="ts">
import { useProductStore } from '@/stores/productStore'
import { computed, defineComponent, onMounted } from 'vue'

export default defineComponent({
  name: 'ProcutList',

  setup() {
    const store = useProductStore()

    onMounted(() => {
      store.carregarProdutos()
    })

    const produtos = computed(() => store.produtos)

    return {
      produtos,
    }
  },

  methods: {
    formatarPreco(preco: number) {
      return `R$ ${preco.toFixed(2).replace('.', ',')}`
    },
  },
})
</script>

<template>
  <h2>Todos os produtos</h2>
  <div>
    <ul id="products-list">
      <li v-for="produto in produtos" :key="produto.id" id="product">
        <img :src="produto.imagemUrl" :alt="produto.nome" class="product-img" />
        <h3 id="product-name">{{ produto.nome }}</h3>
        <p id="product-description">{{ produto.descricao }}</p>
        <span id="product-price">{{ formatarPreco(produto.preco) }}</span>
      </li>
    </ul>
  </div>
</template>

<style>
h2 {
  font-size: 3rem;
  font-weight: bold;
  padding: 2rem 0 0 2rem;
}

#products-list {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;

  padding: 2rem;
}

#product {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  border: 1px solid #ccc;
  border-radius: 0.8rem;
  padding: 1rem;
  margin-bottom: 1rem;
}

.product-img {
  width: 100%;
  height: auto;
  max-width: 20rem;
  max-height: 20rem;
}

#product-name,
#product-price {
  align-self: flex-start;
}

#product-description {
  text-align: justify;
}

#product-price {
  align-self: flex-start;

  font-size: 2rem;
  font-weight: bold;

  color: #333;
}

@media screen and (max-width: 1024px) {
  h2 {
    font-size: 2.5rem;
  }

  #products-list {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media screen and (max-width: 500px) {
  h2 {
    font-size: 2.5rem;
  }

  #products-list {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>
