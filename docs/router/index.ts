import Vue, { computed, getCurrentInstance } from 'vue'
import VueRouter, { RouteConfig } from 'vue-router';
import Layout from 'docs/layout/index.vue'
Vue.use(VueRouter)

const routes: RouteConfig[] = [
  {
    path: '/',
    component: Layout,
    redirect: '/test',
    children: [
      {
        path: 'test',
        name: 'Test',
        component: () => import('docs/pages/test/index.vue')
      },
      {
        path: 'button',
        name: 'ComponentsButton',
        component: () => import('docs/pages/button.md')
      }
    ]
  }
]

const router = new VueRouter({
  base: import.meta.env.BASE_URL,
  routes
})

export const useRoute = () => computed(() => getCurrentInstance()?.proxy.$route)

export default router