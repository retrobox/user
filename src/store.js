import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isMobile: false,
    alert: {
      enabled: false,
      text: '',
      color: ''
    },
    isLoading: false,
    loadingType: 'normal'
  },
  mutations: {
    'SET_IS_MOBILE': function (state, value) {
      state.isMobile = value
    },
    'ADD_ALERT': function (state, alert) {
      state.alert = {
        enabled: true,
        location: alert.location === undefined ? 'global' : alert.location,
        text: alert.text,
        color: alert.color
      }
    },
    'HIDE_ALERT': function (state) {
      state.alert.enabled = false
    }
  }
})
