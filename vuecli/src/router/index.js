import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
// import Page from '@/components/pages/page'
// import Child1 from '@/components/pages/child1'
// import Child2 from '@/components/pages/child2'
// import Child3 from '@/components/pages/child3'
// import Menu from '@/components/pages/menu'
import Login from '@/components/pages/login'
import Dashboard from '@/components/Dashboard'
import Products from '@/components/pages/Products'
Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: '首頁',
    //   component: HelloWorld,
    //   meta: { requiresAuth: true }
    // },
    {
      path: '/login',
      name: '登入',
      component: Login,
    },
    {
      path: '/admin',
      name: 'dashboard',
      component: Dashboard,
      children:[
        {
          path: 'products',
          name: 'Products',
          component: Products ,
          meta: { requiresAuth: true },
        }
      ]
    },
  ]
})
