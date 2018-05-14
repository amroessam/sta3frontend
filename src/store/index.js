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
      loading:false,
      token: null
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
      },
      setToken(state,payload){
          state.token = payload
      }
  },
  actions: {
      userSignUp({commit},payload){
          commit('setLoading', true)
          axios
            .post('http://localhost:8081/api/v2/user/register',{
                email: payload.email,
                username: payload.username,
                password:payload.password
            }).then((response)=>{
                console.log(response)
                commit('setUser', response.data.user)
                commit('setLoading', false)
                commit('setError', null)
                router.push('/home')
            }).catch((error)=>{
                commit('setError', error.response.data.message)
                commit('setLoading', false)
            })
      },
      userSignIn({commit},payload){
          commit('setLoading', true)
          axios
            .post('http://localhost:8081/api/v2/user/login',{
                username:payload.username,
                password:payload.password
            }).then((response)=>{
                console.log()
                commit('setUser', response.data.user)
                commit('setLoading', false)
                commit('setError', null)
                commit('setToken', response.data.token)
                router.push('/home')
            }).catch(error =>{
                commit('setError', error.response.data.message)
                commit('setLoading', false)
            })
      }
  },
  getters: {}
})