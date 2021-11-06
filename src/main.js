import Vue from 'vue'
import App from './App.vue'
import router from './router'
import storeConfig from './store'
import VueX from 'vuex'

Vue.use(VueX)
Vue.config.productionTip = false

const store = new VueX.Store(storeConfig)

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
