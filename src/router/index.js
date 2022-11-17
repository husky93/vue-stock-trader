import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    redirect: { name: 'home' },
  },
  {
    path: '/portfolio',
    redirect: { name: 'portfolio' },
  },
  {
    path: '/stocks',
    redirect: { name: 'stocks' },
  },
  {
    path: '/vue-stock-trader/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/vue-stock-trader/portfolio',
    name: 'portfolio',
    component: () =>
      import(/* webpackChunkName: "portfolio" */ '../views/PortfolioView.vue'),
  },
  {
    path: '/vue-stock-trader/stocks',
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
