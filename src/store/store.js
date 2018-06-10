import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    caseInfo: {
      caseId: '',
      ein: '',
      tradeName: '',
      legalName: '',
      street: '',
      city: '',
      state: '',
      zip: ''
    }
  }
})
