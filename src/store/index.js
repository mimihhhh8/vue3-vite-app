
import { createStore } from 'vuex'

// 创建一个新的 store 实例 用来管理数据（z）
const store = createStore({
  state () {
    return {
      count: 0,
      isFullScreen: false,
    }
  },
  // 改变数据的方法
  mutations: {
    increment (state,payload) {
      state.count +=payload
    },
     // 设置全屏的方法(store.commit('setFullScreen',false)触发此方法)
     setFullScreen(state,payload){
      state.isFullScreen = payload
  }
  },

  // 计算属性
  getters:{
    totalPrice(state){
      // 乘以价格
      return state.count * 10
    },
  },

  // 后端异步ajax请求
  actions:{
    asyncAdd(store,payload){
      // 异步请求
      setTimeout(()=>{
        // 两个参数：方法名和参数，通过函数名字知道要修改哪个数据
        store.commit('increment',payload)
      },1000)
    }

    }
})

export default store

