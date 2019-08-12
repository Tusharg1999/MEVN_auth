import Vue from 'vue'
import App from './App.vue'
import router from '../router/routes'
import Navbar from './components/navbar'

Vue.config.productionTip = false
Vue.component('navbar',Navbar)
new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
