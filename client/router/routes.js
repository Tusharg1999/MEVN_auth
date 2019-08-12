import Vue from 'vue'
import Router from 'vue-router'
import home from '../src/view/home'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'*',
      redirect:{
          path:'/'
      }
    },
    {
        path:'/',
        name:'home',
        component:home
    }
  ]
})