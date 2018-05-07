import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from '@/router'
Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
      appTitle: 'SmackTalkApp3',
      user: null,
      error: null,
      loading:false
  },
  mutations: {
      setUser (state,payload){
          state.user = payload
      },
      setError(state,payload){
          state.error = payload
      },
      setLoading(state,payload){
          state.loading = payload
      }
  },
  actions: {
      userSignUp({commit},payload){
          commit('setLoading', true)
          axios
            .post('http://localhost:8000/api/registerAPI',{
                email: payload.email,
                username: payload.username,
                password:payload.password
            }).then((response)=>{
                commit('setUser', {username: response.data.username})
                commit('setLoading', false)
                commit('setError', null)
                router.push('/home')
            }).catch((error)=>{
                commit('setError', error.message)
                commit('setLoading', false)
            })
      },
      userSignIn({commit},payload){
          commit('setLoading', true)
          axios
            .post('http://localhost:8000/api/loginAPI',{
                username:payload.username,
                password:payload.password
            }).then((response)=>{
                console.log(response)
            })
      }
  },
  getters: {}
})