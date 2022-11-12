import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/portfolio',
    name: 'portfolio',
    component: () =>
      import(/* webpackChunkName: "portfolio" */ '../views/PortfolioView.vue'),
  },
  {
    path: '/stocks',
    name: 'stocks',
    component: () =>
      import(/* webpackChunkName: "stocks" */ '../views/StocksView.vue'),
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
