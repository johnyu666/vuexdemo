import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    customers:[]
  },
  mutations: {
      load(state,customers){
        state.customers.push(...customers)
      },
      add(state,customer){
          state.customers.push(customer)
      },
      del(state,id){
          let index=state.customers.findIndex(item=>item.id===id)
          state.customers.splice(index,1)
      },
      update(state,customer){
        let index=state.customers.findIndex(item=>item.id===customer.id)
        state.splice(index,1,customer)
      }
  },
  actions: {
    load(context){
      fetch("http://localhost:3000/customers",{method:"GET"})
      .then(resp=>resp.json())
      .then(customers=>context.commit("load",customers))
    },
    add(context,customer){
      fetch("http://localhost:3000/customers",
      {method:"POST",headers:{"Content-Type":"application/json"},
        body:JSON.stringify(customer)})
        .then(resp=>resp.json())
        .then(c=>context.commit('add',c))
    },
    del(context,id){
      fetch("http://localhost:3000/customers/"+id,{method:"DELETE"})
      .then(()=>this.commit("del",id))
    },
    update(context,c){
      fetch("http://localhost:3000/customers/"+c.id,
      {
        method:"PUT",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(c)
      }).then(resp=>resp.json())
      .then(customer=>context.commit("update",customer))
    }
  },
  modules: {
  }
})
