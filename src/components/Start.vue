<template lang="html">
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-center">
        <h1 class="text-center mt-3">Case Information</h1>
        <div class="card m-3 shadow" style="min-width: 400px">
          <form class="p-3">
            <div class="form-group form-group-lg">
              <h6 class="mt-3">Case ID:</h6>
              <input v-model="caseId" class="form-control" type="number" placeholder="1235467">
              <h6 class="mt-3">EIN or SSN:</h6>
              <input v-model="ein" class="form-control" type="text" placeholder="12-3456789">
              <h6 class="mt-3">Employer Name:</h6>
              <label for="legalName">Legal Name</label>
              <input v-model="legalName" class="form-control" type="text" placeholder="Johnny III, Inc.">
              <label for="tradeName" class="mt-2">Trade Name</label>
              <input v-model="tradeName" class="form-control" type="text" placeholder="Johnny's Car Wash">
              <h6 class="mt-3">Establishment Address:</h6>
              <label for="street">Street</label>
              <input v-model="street" class="form-control" type="text" id="street" placeholder="123 Perkins Way">
              <label for="zip" class="mt-2">Zip Code</label>
              <input v-model="zip" class="form-control" type="number" id="zip" placeholder="90210">
            </div>
            <div class="text-center">
              <button class="btn btn-primary float-middle" @click.prevent="next">Coverage</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Axios from 'axios'
export default {
  data () {
    return {
      caseId: '',
      ein: '',
      tradeName: '',
      legalName: '',
      street: '',
      zip: ''
    }
  },

  methods: {
    async next () {
      try {
        let cityState = await Axios.post(`https://maps.googleapis.com/maps/api/geocode/json?&address=${this.zip}`)
        console.log(cityState.data.results)
        this.$store.state.caseInfo.cityStateZip = cityState.data.results[0].formatted_address.slice(0, -5)
      } catch (err) {
        console.log(err)
      }
      this.$store.state.caseInfo.caseId = this.caseId
      this.$store.state.caseInfo.ein = this.ein
      this.$store.state.caseInfo.legalName = this.legalName
      this.$store.state.caseInfo.tradeName = this.tradeName
      this.$store.state.caseInfo.street = this.street
      this.$store.state.caseInfo.zip = this.zip
      this.$router.push('/coverage')
    }
  }
}
</script>

<style scoped lang="css">
form {
  width: 80vw;
}
</style>
