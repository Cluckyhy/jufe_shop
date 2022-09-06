import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    accountList: JSON.parse(localStorage.getItem('accountList')) ? JSON.parse(localStorage.getItem('accountList')) : [
      {
        isLogin: false,
        username: '',
        password: '',
        goodsList: []
      }
    ],
    accountIndex: 0,
  },
  getters: {
    Len(state) {
      return state.accountList[state.accountIndex].goodsList.length
    }
  },
  mutations: {
    saveAccount(state, payload) {
      localStorage.setItem('accountList', JSON.stringify(payload))
    },
    logOut(state, index) {
      state.accountList[index].isLogin = false
    },
    addGoods(state, goods) {
      state.accountList[state.accountIndex].goodsList = goods
      localStorage.setItem('accountList', JSON.stringify(state.accountList))
    },
    removeGoods(state, index) {
      state.accountList[state.accountIndex].goodsList.splice(index, 1)
      localStorage.setItem('accountList', JSON.stringify(state.accountList))
    },
    emptyCart(state) {
      state.accountList[state.accountIndex].goodsList.splice(0, state.accountList[state.accountIndex].goodsList.length)
      localStorage.setItem('accountList', JSON.stringify(state.accountList))
    },
    subCart(state, payload) {
      payload.forEach((item) => {
        state.accountList[state.accountIndex].goodsList.splice(state.accountList[state.accountIndex].goodsList.indexOf(item), 1)
      })
      localStorage.setItem('accountList', JSON.stringify(state.accountList))
    },
    incrementCount(state, payload) {
      state.accountList[state.accountIndex].goodsList[payload.idx].num = payload.num
      state.accountList[state.accountIndex].goodsList[payload.idx].sumprice = payload.sumprice
      localStorage.setItem('accountList', JSON.stringify(state.accountList))
    },
    decrementCount(state, payload) {
      state.accountList[state.accountIndex].goodsList[payload.idx].num = payload.num
      state.accountList[state.accountIndex].goodsList[payload.idx].sumprice = payload.sumprice
      localStorage.setItem('accountList', JSON.stringify(state.accountList))
    },
    updateAccount(state, index) {
      state.accountIndex = index
      state.accountList[index].isLogin = true
    },
    updateCartCount(state, index) {
      state.accountIndex = index
    }
  },
  actions: {
    LogInAction(context, account) {
      context.commit('saveAccount', account)
    },
    logOutAction(context, index) {
      context.commit('logOut', index)
    },
    addGoodsAction(context, goods) {
      context.commit('addGoods', goods)
    },
    removeGoodsAction(context, index) {
      context.commit('removeGoods', index)
    },
    emptyCartAction(context) {
      context.commit('emptyCart')
    },
    subCartAction(context, payload) {
      context.commit('subCart', payload)
    },
    incrementCountAction(context, payload) {
      context.commit('incrementCount', payload)
    },
    decrementCountAction(context, payload) {
      context.commit('decrementCount', payload)
    },
    updateAccountAction(context, index) {
      context.commit('updateAccount', index)
    },
    updateCartCountAction(context, index) {
      context.commit('updateCartCount', index)
    }
  },
  modules: {}
})
