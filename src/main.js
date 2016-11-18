import Vue from 'vue'
import App from './App'
import store from './store'
import {
  Search,
  Field,
  Radio
} from 'mint-ui'
Vue.component(Search.name, Search)
Vue.component(Field.name, Field)
Vue.component(Radio.name, Radio)
  /* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  template: '<App/>',
  components: {
    App
  }
})
