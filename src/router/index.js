import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from "../views/Layout";
import Home from '../views/Home.vue'
import View from '../views/pages/View'
import Edit from '../views/pages/Edit'

Vue.use(VueRouter)

const routes = [
  {
    path     : '',
    component: Layout,
    children : [
      {
        path     : '/',
        name     : 'home',
        component: Home,
        meta:{
          title:'Home page'
        }
      },
      {
        path     : '/view/:id',
        name     : 'view',
        component: View,
        meta:{
          title:'user view'
        }
      },
      {
        path     : '/create',
        name     : 'create',
        component: Edit,
        meta:{
          title:'user create'
        }
      },
      {
        path     : '/edit/:id',
        name     : 'edit',
        component: Edit,
        meta:{
          title:'user edit'
        }
      },
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
router.afterEach((to, from) => {
  Vue.nextTick(() => {
    document.title = to.meta.title
  })
})
export default router
