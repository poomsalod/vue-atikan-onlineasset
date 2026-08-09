import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AddView from '../views/AddView.vue'
import DetailView from '../views/DetailView.vue'
import FormNode from '../views/test_cs_form_creat_node/form_node.vue'
import OrgChartSale from '@/views/cs/orgsale/OrgChartSale.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/add',
      name: 'add',
      component: AddView
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: DetailView
    },
    {
      path: '/cs/node/create',
      name: 'detail',
      component: FormNode
    },
    {
      path: '/cs/orgsale/chart',
      name: 'orgsale',
      component: OrgChartSale
    },
  ]
})

export default router
