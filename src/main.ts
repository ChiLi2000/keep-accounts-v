import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import Icon from "@/components/Icon.vue";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

Vue.use(ElementUI);
Vue.config.productionTip = false
Vue.component("Icon",Icon)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
