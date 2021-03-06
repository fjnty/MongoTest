import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Page from '../pages/page'
import Form from '../pages/form'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }, {
      path: '/page',
      name: 'Page',
      component: Page
    }, {
      path: '/form',
      name: 'Form',
      component: Form
    }
  ]
})
