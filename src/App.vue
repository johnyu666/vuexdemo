<template>
  <div>
    <ul>
      <li v-for="c in $store.state.customers" :key="c.id">
          {{c.id}}
          <input type="text" v-model="c.name">
          ,<button @click="del(c)">删除</button>,
          <button @click="update(c)">更新</button>
      </li>
    </ul>
    <hr>
    <Adder></Adder>
  </div>
</template>

<script>
import Adder from './components/Adder'
export default {
  data:function(){
    return {}
  },
  created(){
    this.$store.dispatch("load")
  },
  methods:{
    del(c){
      this.$store.dispatch("del",c.id)
    },
    update(c){
      this.$store.dispatch("update",c)
    }
  },
  components:{Adder}
}
</script>

<style>

</style>