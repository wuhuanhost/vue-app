<template>
  <div class="todo">
    <h2 class="error" v-if="this.$store.state.error">清单内容不能为空</h2>
    <hr/>
    <input placeholder="输入你的清单内容" v-model="todo" class="input" />
    <button @click="add">添加</button>
    <div class="todolist">
      <div class="item" v-for="item in this.todolist">
        <input type="checkbox" @click="del" v-bind:value="item.id" v-bind:checked="item.done" />
        <span v-bind:class="{del:item.done}">{{ item.todo }}</span>
      </div>
    </div>
    <div class="operate">
      <div @click="all">全部</div>
      <div @click="done">已完成</div>
      <div @click="active">未完成</div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'todo',
  data () {
    return {
      todolist: this.$store.state.todolist
    }
  },
  methods: {
    add: function (event) {
      if (this.todo === '') {
        this.$store.commit('errmsg')
      } else {
        var item = {}
        item.todo = this.todo
        item.done = false
        item.id = this.$store.state.todolist.length
        this.$store.commit('add', item)
      }
    },
    del: function (event) {
      var key = event.target.value
      var ischecked = event.target.checked
      if (ischecked) {
        this.$store.state.todolist[key].done = true
      } else {
        this.$store.state.todolist[key].done = false
      }
    },
    all: function (event) {
      this.todolist = this.$store.getters.allTodo
    },
    done: function (event) {
      this.todolist = this.$store.getters.doneTodo
    },
    active: function (event) {
      this.todolist = this.$store.getters.activeTodo
    }
  }
}
</script>
<style>
  .todo {
    width: 600px;
    margin: 0 auto;
  }
  
  .todo .input {
    width: 360px;
    height: 40px;
    border: 1px solid #999999;
    border-radius: 9px;
  }
  
  .todo button {
    height: 44px;
    width: 100px;
    border-radius: 9px;
    border: 1px solid #999999;
  }
  
  .todolist {
    width: 468px;
    margin: 0 auto;
    margin-top: 20px;
    text-align: left;
    height: 400px;
    overflow-y: auto;
  }
  
  .item {
    padding: 0;
    margin: 10px;
  }
  
  .operate {
    width: 468px;
    margin: 0 auto;
    height: 40px;
    border: 1px solid #999999;
    display: flex;
    flex-direction: row;
  }
  
  .operate div {
    height:40px;
    line-height:40px;
    width: 33.33%;
    cursor:pointer;
  }
  
  span {
    display: inline-block;
    width: calc(100% - 40px)
  }
  
  .del {
    text-decoration: line-through
  }
  
  .error {
    color: red;
  }

</style>
