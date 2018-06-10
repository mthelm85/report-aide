<template lang="html">
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-center">
        <h1 class="text-center">Coverage</h1>
        <div class="card m-3 shadow" style="min-width: 400px">
          <form class="p-3">
            <div class="form-group form-group-lg">
              <h6 class="mt-3">Headquarters Address:</h6>
              <div class="form-check">
                <input type="checkbox" id="sameAddress" class="form-check-input">
                <label for="sameAddress">Same as establishment address</label>
              </div>
              <label for="street">Street</label>
              <input class="form-control" type="text" id="street" placeholder="345 Frances St.">
              <label for="zip" class="mt-2">Zip Code</label>
              <input class="form-control" type="number" id="zip" placeholder="10465">
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
                  <input type="text" id="principals" class="form-control" placeholder="John A. Doe (25%) and Jane B. Doe (75%)">
                  <label for="officers" class="mt-2">Company Officers</label>
                  <input type="text" id="officers" class="form-control" placeholder="Jack C. Smith (President) and Jackie D. Smith (Treasurer)">
                </div>
              </transition>
              <transition name="fade" mode="out-in">
                <div v-if="type.proprietorship" class="form-group form-group-lg">
                  <label for="proprietorName" class="mt-2">Name of Sole Proprietor</label>
                  <input type="text" id="proprietorName" class="form-control" placeholder="John A. Doe">
                </div>
              </transition>
            </div>
            <div class="form-group form-group-lg">
              <h6>Basis for coverage:</h6>
              <div class="form-check">
                <input v-model="coverage.enterprise.checked" type="checkbox" class="form-check-input" id="covg-type-ent">
                <label class="form-check-label" for="covg-type-ent">Enterprise</label>
              </div>
              <div class="form-check">
                <input v-model="coverage.individual.checked" type="checkbox" class="form-check-input" id="covg-type-ind">
                <label class="form-check-label" for="covg-type-ind">Individual</label>
              </div>
              <div class="form-check">
                <input v-model="coverage.named.checked" type="checkbox" class="form-check-input" id="covg-type-named">
                <label class="form-check-label" for="covg-type-named">Named</label>
              </div>
            </div>
            <transition name="fade" mode="out-in">
              <div v-if="coverage.enterprise.checked" class="form-group">
                <h6 class="mt-3">Annual Dollar Volume:</h6>
                <label for="adv0">{{ year0 - 1 }}</label>
                <input v-model.lazy="coverage.enterprise.adv0" v-money="money" class="form-control" id="adv0">
                <label for="adv1">{{ year0 - 2 }}</label>
                <input v-model.lazy="coverage.enterprise.adv1" v-money="money" type="text" class="form-control" id="adv1">
                <label for="adv2">{{ year0 - 3 }}</label>
                <input v-model.lazy="coverage.enterprise.adv2" v-money="money" type="text" class="form-control" id="adv2">
                <h6 class="mt-3">Products handled by employees that have moved in commerce:</h6>
                <input
                  v-model.lazy="coverage.enterprise.products"
                  type="text"
                  class="form-control"
                  placeholder="Dell laptops and Ford trucks."
                />
              </div>
            </transition>
            <transition name="fade" mode="out-in">
              <div v-if="coverage.individual.checked" class="form-group">
                <h6 class="mt-3">Describe the basis for individual coverage:</h6>
                <textarea
                  v-model.lazy="coverage.individual.basis"
                  class="form-control"
                  id="adv0"
                  placeholder="The employees in this case assembled bird houses that were shipped to 12 states...">
                </textarea>
              </div>
            </transition>
            <transition name="fade" mode="out-in">
              <div v-if="coverage.named.checked" class="form-group">
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
                v-if="coverage.enterprise.checked || coverage.individual.checked || coverage.named.checked"
                class="text-center"
              >
                <router-link to="Report" class="btn btn-primary float-middle">Generate Report</router-link>
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
      coverage: {
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
      principals: ''
    }
  },

  directives: {
    money: VMoney
  },

  computed: {
    year0 () {
      return new Date().getFullYear()
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
