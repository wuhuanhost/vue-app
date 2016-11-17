import Vue from 'vue'
import App from './App'
import { Search, Field } from 'mint-ui'
Vue.component(Search.name, Search)
Vue.component(Field.name, Field)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
