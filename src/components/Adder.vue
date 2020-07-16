<template>
  <form @submit.prevent="add" action="#">
      <input type="text" ref="name">
      <button >add</button>
  </form>
</template>

<script>
export default {
    methods:{
        add(){
            let name=this.$refs.name.value
            this.$store.dispatch("add",{name:name})
        }
    }
}
</script>

<style>

</style>