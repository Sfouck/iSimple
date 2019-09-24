// import '@babel/polyfill'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import Swiper from './components/Swiper'
import iSimple from './components/iSimple'

// Vue.use(Swiper)
window.history.scrollRestoration = 'manual'
Vue.use(iSimple)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
