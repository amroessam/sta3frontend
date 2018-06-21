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
        loading: false,
        message: null,
        chats: [],
        currentTeamId: null,
        teamList: [],
        jwt: localStorage.getItem('token')
    },
    mutations: {
        setUser(state, payload) {
            state.user = payload
        },
        setError(state, payload) {
            state.error = payload
        },
        setLoading(state, payload) {
            state.loading = payload
        },
        setChats(state, payload) {
            state.chats = payload
        },
        updateToken(state, newToken) {
            localStorage.setItem('token', newToken)
            state.jwt = newToken
        },
        removeToken(state) {
            localStorage.removeItem('token')
            state.jwt = null
        }
    },
    actions: {
        userSignUp({ commit }, payload) {
            commit('setLoading', true)
            axios
                .post('http://localhost:8081/api/v2/user/register', {
                    email: payload.email,
                    username: payload.username,
                    password: payload.password
                }).then((response) => {
                    console.log(response)
                    commit('setUser', response.data.user)
                    commit('setLoading', false)
                    commit('setError', null)
                    commit('updateToken', response.data.token)
                    router.push('/home')
                }).catch((error) => {
                    commit('setError', error.response.data.message)
                    commit('setLoading', false)

                })
        },
        userSignIn({ commit }, payload) {
            commit('setLoading', true)
            axios
                .post('http://localhost:8081/api/v2/user/login', {
                    username: payload.username,
                    password: payload.password
                }).then((response) => {
                    console.log()
                    commit('setUser', response.data.user)
                    commit('setLoading', false)
                    commit('setError', null)
                    commit('updateToken', response.data.token)
                    router.push('/home')
                }).catch(error => {
                    commit('setError', error.response.data.message)
                    commit('setLoading', false)
                    commit('removeToken')
                })
        },
        checkAuth({ commit }) {
            axios.defaults.headers.common['Authorization'] = this.state.jwt
            axios
                .get('http://localhost:8081/api/v2/user/auth').then((response) => {
                    if (response.data.auth) {
                        commit('setUser', response.data.user)
                        commit('setLoading', false)
                        commit('setError', null)
                        router.push('/home')
                    }
                })
        },
        logoutUser({ commit }) {
            commit('setUser', null)
            commit('removeToken')
            router.push('/')
        },
        loadChats({ commit }) {
            let currentTeamId = this.state.currentTeamId
            axios.defaults.headers.common['Authorization'] = this.state.jwt
            axios
                .get('http://localhost:8081/api/v2/team/' + currentTeamId + '/messages').then((response) => {
                    console.log(response)
                })
        },
        loadTeams({ commit }) {
            axios.defaults.headers.commit['Authorization'] = this.state.jwt
            axios
                .get('http://localhost:8081/api/v2/team').then((response) => {
                    console.log(response)
                })
        },
        createNewTeam({ commit }, payload) {
            commit('setLoading', true)
            console.log(payload)
            let newTeamName = payload.newTeamName
            let newTeamDescription = payload.newTeamDescription
            axios.defaults.headers.common['Authorization'] = this.state.jwt
            axios
                .post('http://localhost:8081/api/v2/team/newTeam', {
                    teamName: newTeamName,
                    teamDescription: newTeamDescription
                }).then((response) => {
                    console.log('worked')
                    console.log(response)
                    commit('setLoading', false)
                }).catch((response)=>{
                    console.log('did not worked')
                    console.log(response)
                })
        }
    },
    getters: {
    }
})