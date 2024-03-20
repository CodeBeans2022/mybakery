import { createStore } from 'vuex'
import axios from 'axios'
const eccoURL= 'https://bakers-bean.onrender.com/'


export default createStore({
  state: {
    users: null,
    products: null,
    message: null
  },
  getters: {
  },
  mutations: {
    setProducts(state, value) {
      state.products = value
    },
    setMessage(state, value) {
      state.message = value
    }
  },
  actions: {
  async fetchProducts(context) {
    const res = await axios.get(`${eccoURL}products`)
    const {results, err} = res.data;

    if(results) {
      context.commit('setProducts', results)
    }else {
      context.commit('setMessage', err)
    }
  }    
  },
  modules: {
  }
})

