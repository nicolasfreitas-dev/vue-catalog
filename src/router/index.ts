import { createRouter, createWebHistory } from 'vue-router'
import ProductList from '@/pages/ProductList.vue'
import ProductDetail from '@/pages/ProductDetails.vue'
import ProductFormPage from '@/pages/ProductFormPage.vue'

const routes = [
  { path: '/', redirect: '/produtos' },
  { path: '/produtos', component: ProductList },
  { path: '/produtos/novo', component: ProductFormPage },
  { path: '/produtos/:id', component: ProductDetail },
  { path: '/produtos/:id/editar', component: ProductFormPage },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
