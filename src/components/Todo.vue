<template>
<div class="todo">
  <hr/>
  <input placeholder="输入你的清单内容" v-model="todo" class="input"/>
  <button @click="add">添加</button>
  <div class="todolist">
    <div class="item" v-for="(item,key) in todolist">
    <input type="checkbox" @click="del" v-bind:value="key"/>
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
      var item = {}
      item.todo = this.todo
      item.isDel = false
      item.index = this.index
      this.index++
      this.todolist.push(item)
      this.todo = ''
    },
    del: function (event) {
      var key = event.target.value
      var ischecked = event.target.checked
      if (ischecked) {
        this.todolist[key].isDel = true
      } else {
        this.todolist[key].isDel = false
      }
    }
  }
}
</script>

<style>
.todo{
  width:600px;
  margin:0 auto;
}

.todo .input{
  width:360px;
  height:40px;
  border:1px solid #999999;
  border-radius:9px;
}

.todo button{
  height:44px;
  width:100px;
  border-radius:9px;
  border:1px solid #999999;
}

.todolist{
  width:468px;
  margin:0 auto;
  margin-top:20px;
  text-align:left;
}

.item{
 padding:0;
 margin:10px;
}

span{
  display:inline-block;
}

.del{
  text-decoration:line-through
}

</style>