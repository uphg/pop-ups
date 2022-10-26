import './styles/index.scss'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Code from './components/e-code.vue'
import Demo from './components/e-demo.vue'

Vue.component('e-code', Code)
Vue.component('e-demo', Demo)

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')

