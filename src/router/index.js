import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Search from '@/components/Search'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
Vue.use(Router)
Vue.use(ElementUI)
export default new Router({
  routes: [
    {
      path: '/index',
      name: 'index',
      component: Index
    },
    {
      path: '/search',
      name: 'search',
      component: Search
    },
  ]
})
