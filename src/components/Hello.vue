<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <input v-model="msg"/>
    <hr/>
    <mt-search></mt-search>
    <mt-field label="username" placeholder="Input username"></mt-field>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      value: '搜索',
      name: 'adasd'
    }
  }
}
</script>
