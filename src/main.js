/*
入口
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueLazyload from 'vue-lazyload'
import {Button} from 'mint-ui'

import Split from './components/Split/Split.vue'

import loading from './common/images/loading.gif'
import './assets/css/reset.css'
import './mock/mockServer'
import './filters'

//全局标签组件
Vue.component('Split',Split);
Vue.component(Button.name,Button)
Vue.use(VueLazyload,{
  loading
})

new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
});
