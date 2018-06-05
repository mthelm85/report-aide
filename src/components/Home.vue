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
                <input type="checkbox" class="form-check-input" id="covg-type-ent">
                <label class="form-check-label" for="covg-type-ent">Enterprise</label>
              </div>
              <div class="form-check">
                <input type="checkbox" class="form-check-input" id="covg-type-ind">
                <label class="form-check-label" for="covg-type-ind">Individual</label>
              </div>
              <div class="form-check">
                <input type="checkbox" class="form-check-input" id="covg-type-named">
                <label class="form-check-label" for="covg-type-named">Named</label>
              </div>
            </div>
            <h6 class="mt-3">Annual Dollar Volume:</h6>
            <div class="form-group">
              <label for="adv0">{{ year0 - 1 }}</label>
              <input v-model.lazy="adv0" v-money="money" class="form-control" id="adv0">
              <label for="adv1">{{ year0 - 2 }}</label>
              <input v-model.lazy="adv1" v-money="money" type="text" class="form-control" id="adv1">
              <label for="adv2">{{ year0 - 3 }}</label>
              <input v-model.lazy="adv2" v-money="money" type="text" class="form-control" id="adv1">
            </div>
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
      money: {
        decimal: '.',
        thousands: ',',
        prefix: '$ ',
        precision: 0,
        masked: false
      }
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

<style lang="css">
</style>
