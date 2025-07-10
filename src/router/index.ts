import { createRouter, createWebHistory } from 'vue-router'
import ProductList from '@/pages/ProductList.vue'
import ProductDetail from '@/pages/ProductDetails.vue'
import ProductFormPage from '@/pages/ProductFormPage.vue'

const routes = [
  { path: '/', redirect: '/products' },
  { path: '/products', component: ProductList },
  { path: '/products/novo', component: ProductFormPage },
  { path: '/products/:id', component: ProductDetail },
  { path: '/products/:id/editar', component: ProductFormPage },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
