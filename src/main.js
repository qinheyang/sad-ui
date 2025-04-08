import Vue from 'vue'
import ElementUI from 'element-ui'
import '@/assets/style/theme/index.css'
import App from '@/App.vue'
import '@/assets/style/globe.css'
import globeValue from '@/utils/glole'
import router from './router'

import './router/permission'
import store from './store'
Vue.use(ElementUI, { size: 'Extra large' });
Vue.config.productionTip = false
Vue.prototype.$globeValue = globeValue;
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
