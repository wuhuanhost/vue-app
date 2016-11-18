import Vue from 'vue'
import Vuex from 'vuex'
import todo from './modules/todo'
Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    todolist: [
        {todo: '写文档', isDel: true}, {todo: '编码', isDel: false}, {todo: '测试', isDel: false}
    ]
  },
  mutations: todo
})
