<template lang="html">
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-center">
        <h1 class="text-center">Coverage</h1>
        <div class="card m-3" style="min-width: 400px">
          <form class="p-3">
            <div class="form-group form-group-lg">
              <h6>Basis for coverage:</h6>
              <div class="form-check">
                <input v-model="coverage.enterprise" type="checkbox" class="form-check-input" id="covg-type-ent">
                <label class="form-check-label" for="covg-type-ent">Enterprise</label>
              </div>
              <div class="form-check">
                <input v-model="coverage.individual" type="checkbox" class="form-check-input" id="covg-type-ind">
                <label class="form-check-label" for="covg-type-ind">Individual</label>
              </div>
              <div class="form-check">
                <input v-model="coverage.named" type="checkbox" class="form-check-input" id="covg-type-named">
                <label class="form-check-label" for="covg-type-named">Named</label>
              </div>
            </div>
            <transition name="fade" mode="out-in">
              <div v-if="coverage.enterprise" class="form-group">
                <h6 class="mt-3">Annual Dollar Volume:</h6>
                <label for="adv0">{{ year0 - 1 }}</label>
                <input v-model.lazy="adv0" v-money="money" class="form-control" id="adv0">
                <label for="adv1">{{ year0 - 2 }}</label>
                <input v-model.lazy="adv1" v-money="money" type="text" class="form-control" id="adv1">
                <label for="adv2">{{ year0 - 3 }}</label>
                <input v-model.lazy="adv2" v-money="money" type="text" class="form-control" id="adv1">
              </div>
            </transition>
            <transition name="fade" mode="out-in">
              <div v-if="coverage.individual" class="form-group">
                <h6 class="mt-3">Describe the basis for individual coverage:</h6>
                <textarea
                  v-model.lazy="coverage.basisIndividual"
                  class="form-control"
                  id="adv0"
                  placeholder="The employees in this case assembled bird houses that were shipped to 12 states...">
                </textarea>
              </div>
            </transition>
            <transition name="fade" mode="out-in">
              <div v-if="coverage.named" class="form-group">
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
      adv0: null,
      adv1: null,
      adv2: null,
      coverage: {
        enterprise: false,
        individual: false,
        named: false,
        basisIndividual: '',
        basisNamed: ''
      },
      money: {
        decimal: '.',
        thousands: ',',
        prefix: '$ ',
        precision: 0,
        masked: false
      },
      named: ''
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
