<template>
    <div class="todo">
      <h2 class="error" v-if="this.$store.state.error">清单内容不能为空</h2>
        <hr/>
        <input placeholder="输入你的清单内容" v-model="todo" class="input" />
        <button @click="add">添加</button>
        <div class="todolist">
            <div class="item" v-for="(item,key) in this.$store.state.todolist">
                <input type="checkbox" @click="del" v-bind:value="key" v-bind:checked="item.isDel"/>
                <span v-bind:class="{del:item.isDel}">{{ item.todo }}</span>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  name: 'todo',
  data () {
    return {
      index: 0,
      todo: '',
      todolist: []
    }
  },
  methods: {
    add: function (event) {
      console.log(this.todo)
      if (this.todo === '') {
        this.$store.commit('errmsg')
      } else {
        var item = {}
        item.todo = this.todo
        item.isDel = false
        this.todo = ''
        this.$store.commit('add', item)
      }
    },
    del: function (event) {
      var key = event.target.value
      var ischecked = event.target.checked
      if (ischecked) {
        this.$store.state.todolist[key].isDel = true
      } else {
        this.$store.state.todolist[key].isDel = false
      }
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
    }
    
    .item {
        padding: 0;
        margin: 10px;
    }
    
    span {
        display: inline-block;
        width: calc(100% - 40px)
    }
    
    .del {
        text-decoration: line-through
    }

    .error{
      color:red;
      
    }

</style>
