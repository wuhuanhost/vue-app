export default{
  add (state, todo) {
    state.todolist.push(todo)
  },
  errmsg (state) {
    state.error = true
  }
}
