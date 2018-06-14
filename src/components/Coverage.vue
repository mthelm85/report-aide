<template lang="html">
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-center">
        <h1 class="text-center mt-3">Coverage</h1>
        <div class="card m-3 shadow" style="min-width: 400px">
          <form class="p-3">
            <div class="form-group form-group-lg">
              <h6 class="mt-3">Period of Investigation:</h6>
              <label for="invStart" class="mt-2">Start</label>
              <input v-model="invPeriod.start" type="date" id="invStart" class="form-control">
              <label for="invEnd" class="mt-2">End</label>
              <input v-model="invPeriod.end" type="date" id="invEnd" class="form-control">
              <h6 class="mt-3">Headquarters Address:</h6>
              <div class="form-check">
                <input @change="sameAddress" type="checkbox" id="sameAddress" class="form-check-input">
                <label for="sameAddress">Same as establishment address</label>
              </div>
              <label for="street">Street</label>
              <input v-model="hqAddress.street" class="form-control" type="text" id="street" placeholder="456 Frances St.">
              <label for="zip" class="mt-2">Zip Code</label>
              <input v-model="hqAddress.zip" class="form-control" type="number" id="zip" placeholder="10001">
              <h6 class="mt-3">Nature of the business:</h6>
              <textarea class="form-control mt-3" placeholder="The subject employer specializes in the production of luxury dog houses that are sold to large pet supply retailers across the U.S."></textarea>
              <h6 class="mt-3">Company Structure:</h6>
              <div class="form-check">
                <input v-model="type.corporation" type="checkbox" class="form-check-input" id="comp-type-corp">
                <label class="form-check-label" for="comp-type-corp">Corporation</label>
              </div>
              <div class="form-check">
                <input v-model="type.llc" type="checkbox" class="form-check-input" id="comp-type-llc">
                <label class="form-check-label" for="comp-type-llc">Limited Liability Company</label>
              </div>
              <div class="form-check">
                <input v-model="type.partnership" type="checkbox" class="form-check-input" id="comp-type-partner">
                <label class="form-check-label" for="comp-type-partner">Partnership</label>
              </div>
              <div class="form-check">
                <input v-model="type.proprietorship" type="checkbox" class="form-check-input" id="comp-type-sole">
                <label class="form-check-label" for="comp-type-sole">Sole Proprietorship</label>
              </div>
              <transition name="fade" mode="out-in">
                <div v-if="type.corporation || type.llc || type.partnership" class="form-group form-group-lg">
                  <label for="principals" class="mt-2">Partners/Principals</label>
                  <input v-model="principals" type="text" id="principals" class="form-control" placeholder="John A. Doe (25%) and Jane B. Doe (75%)">
                  <label for="officers" class="mt-2">Company Officers</label>
                  <input v-model="officers" type="text" id="officers" class="form-control" placeholder="Jack C. Smith (President) and Jackie D. Smith (Treasurer)">
                </div>
              </transition>
              <transition name="fade" mode="out-in">
                <div v-if="type.proprietorship" class="form-group form-group-lg">
                  <label for="proprietorName" class="mt-2">Name of Sole Proprietor</label>
                  <input v-model="proprietor" type="text" id="proprietorName" class="form-control" placeholder="John A. Doe">
                </div>
              </transition>
            </div>
            <div class="form-group form-group-lg">
              <h6>Basis for coverage:</h6>
              <div class="form-check">
                <input v-model="basis.enterprise.checked" type="checkbox" class="form-check-input" id="covg-type-ent">
                <label class="form-check-label" for="covg-type-ent">Enterprise</label>
              </div>
              <div class="form-check">
                <input v-model="basis.individual.checked" type="checkbox" class="form-check-input" id="covg-type-ind">
                <label class="form-check-label" for="covg-type-ind">Individual</label>
              </div>
              <div class="form-check">
                <input v-model="basis.named.checked" type="checkbox" class="form-check-input" id="covg-type-named">
                <label class="form-check-label" for="covg-type-named">Named</label>
              </div>
            </div>
            <transition name="fade" mode="out-in">
              <div v-if="basis.enterprise.checked" class="form-group">
                <h6 class="mt-3">Annual Dollar Volume:</h6>
                <label for="adv0">{{ year0 - 1 }}</label>
                <input v-model.lazy="basis.enterprise.adv0" v-money="money" class="form-control" id="adv0">
                <label for="adv1">{{ year0 - 2 }}</label>
                <input v-model.lazy="basis.enterprise.adv1" v-money="money" type="text" class="form-control" id="adv1">
                <label for="adv2">{{ year0 - 3 }}</label>
                <input v-model.lazy="basis.enterprise.adv2" v-money="money" type="text" class="form-control" id="adv2">
                <h6 class="mt-3">Products handled by employees that have moved in commerce:</h6>
                <input
                  v-model.lazy="basis.enterprise.products"
                  type="text"
                  class="form-control"
                  placeholder="Dell laptops and Ford trucks."
                />
              </div>
            </transition>
            <transition name="fade" mode="out-in">
              <div v-if="basis.individual.checked" class="form-group">
                <h6 class="mt-3">Describe the basis for individual coverage:</h6>
                <textarea
                  v-model.lazy="basis.individual.basis"
                  class="form-control"
                  id="adv0"
                  placeholder="The employees in this case assembled bird houses that were shipped to 12 states...">
                </textarea>
              </div>
            </transition>
            <transition name="fade" mode="out-in">
              <div v-if="basis.named.checked" class="form-group">
                <h6 class="mt-3">The subject employer is a(n):</h6>
                <div class="form-check">
                  <input  v-model="named" class="form-check-input" type="radio" id="hospital" value="hospital">
                  <label class="form-check-label" for="hospital">
                    Hospital
                  </label>
                </div>
                <div class="form-check">
                  <input v-model="named" class="form-check-input" type="radio" id="health" value="health">
                  <label class="form-check-label" for="health">
                    Institution primarily engaged in the care of the sick, the aged, the mentally ill or defective who reside
                    on the premises of the institution
                  </label>
                </div>
                <div class="form-check">
                  <input v-model="named" class="form-check-input" type="radio" id="school" value="school">
                  <label class="form-check-label" for="school">
                    School for mentally or physically handicapped or gifted children, a preschool, elementary or secondary school,
                    or an institution of higher education
                  </label>
                </div>
                <div class="form-check">
                  <input v-model="named" class="form-check-input" type="radio" id="rail" value="rail">
                  <label class="form-check-label" for="rail">
                    Employer involved in the operation of a street, suburban or interurban electric railway, or local trolley
                    or motorbus carrier and the rates and services of the railway or carrier are subject to regulation by a statesor local agency
                  </label>
                </div>
                <div class="form-check">
                  <input v-model="named" class="form-check-input" type="radio" id="public" value="public">
                  <label class="form-check-label" for="public">
                    Public agency
                  </label>
                </div>
              </div>
            </transition>
            <transition name="fade" mode="out-in">
              <div
                v-if="basis.enterprise.checked || basis.individual.checked || basis.named.checked"
                class="text-center"
              >
                <button class="btn btn-primary float-middle" @click.prevent="next">Generate Report</button>
              </div>
            </transition>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { VMoney } from 'v-money'
export default {

  data () {
    return {
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
      hqAddress: {
        street: '',
        zip: ''
      },
      invPeriod: {
        start: '',
        end: ''
      },
      money: {
        decimal: '.',
        thousands: ',',
        prefix: '$ ',
        precision: 0,
        masked: false
      },
      officers: '',
      type: {
        corporation: false,
        llc: false,
        partnership: false,
        proprietorship: false
      },
      principals: '',
      proprietor: ''
    }
  },

  directives: {
    money: VMoney
  },

  computed: {
    year0 () {
      return new Date().getFullYear()
    }
  },

  methods: {
    next () {
      this.$store.state.coverage.basis.enterprise.adv0 = this.basis.enterprise.adv0
      this.$store.state.coverage.basis.enterprise.adv1 = this.basis.enterprise.adv1
      this.$store.state.coverage.basis.enterprise.adv2 = this.basis.enterprise.adv2
      this.$store.state.coverage.basis.enterprise.checked = this.basis.enterprise.checked
      this.$store.state.coverage.basis.enterprise.products = this.basis.enterprise.Products
      this.$store.state.coverage.basis.individual.basis = this.basis.individual.basis
      this.$store.state.coverage.basis.individual.checked = this.basis.individual.checked
      this.$store.state.coverage.basis.named.basis = this.basis.named.basis
      this.$store.state.coverage.basis.named.checked = this.basis.named.checked
      this.$store.state.coverage.invPeriod.start = this.invPeriod.start
      this.$store.state.coverage.invPeriod.end = this.invPeriod.end
      this.$store.state.coverage.officers = this.officers
      this.$store.state.coverage.type.corporation = this.type.corporation
      this.$router.push('/report')
    },
    sameAddress () {
      if (this.hqAddress.street === '') {
        this.hqAddress.street = this.$store.state.caseInfo.street
        this.hqAddress.zip = this.$store.state.caseInfo.zip
      } else {
        this.hqAddress.street = ''
        this.hqAddress.zip = ''
      }
    }
  }

}
</script>

<style scoped lang="css">
form {
  transition: all 1s ease;
  width: 80vw;
}
</style>
