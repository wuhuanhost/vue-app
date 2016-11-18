import Vue from 'vue'
import Vuex from 'vuex'
import todo from './modules/todo'
Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    error: false,
    todolist: [
        {id: 0, todo: '写文档', done: true}, {id: 1, todo: '编码', done: false}, {id: 2, todo: '测试', done: false}
    ]
  },
  mutations: todo,
  getters: {
    doneTodo: state => {
      return state.todolist.filter(item => item.done)
    },
    activeTodo: state => {
      return state.todolist.filter(item => !item.done)
    },
    allTodo: state => {
      return state.todolist
    }
  }
})
