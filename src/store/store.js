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
      cityStateZip: '',
      zip: ''
    },
    coverage: {
      basis: {
        enterprise: {
          adv0: null,
          adv1: null,
          adv2: null,
          checked: false,
          products: ''
        },
        individual: {
          basis: '',
          checked: false
        },
        named: {
          basis: '',
          checked: false
        }
      },
      bizState: '',
      estabDate: '',
      hqAddress: {
        street: '',
        zip: ''
      },
      invPeriod: {
        start: '',
        end: ''
      },
      nature: '',
      officers: '',
      type: {
        corporation: false,
        llc: false,
        partnership: false,
        proprietorship: false
      },
      principals: ''
    }
  },
  getters: {
    getCaseInfo: state => {
      return state.caseInfo
    },
    getCoverage: state => {
      return state.coverage
    }
  }
})
