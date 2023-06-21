import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import 'default-passive-events'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'swiper/dist/css/swiper.css'
import axios from 'axios'
axios.defaults.baseURL = 'http://47.122.20.110'

Vue.prototype.$http = axios
Vue.use(ElementUI);
Vue.config.productionTip = false
new Vue({
  router,
  //挂载$bus
  beforeCreate(){
    Vue.prototype.$bus  = this  
  },
  store,
  render: h => h(App)
}).$mount('#app')
