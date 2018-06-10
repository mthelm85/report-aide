<template lang="html">
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-center">
        <h1 class="text-center">Case Information</h1>
        <div class="card m-3 shadow" style="min-width: 400px">
          <form class="p-3">
            <div class="form-group form-group-lg">
              <h6 class="mt-3">Case ID:</h6>
              <input class="form-control" type="number" placeholder="1235467">
              <h6 class="mt-3">EIN or SSN:</h6>
              <input class="form-control" type="number" placeholder="12-3456789">
              <h6 class="mt-3">Employer Name:</h6>
              <label for="legalName">Legal Name</label>
              <input class="form-control" type="text" placeholder="Johnny III, Inc.">
              <label for="tradeName" class="mt-2">Trade Name</label>
              <input class="form-control" type="text" placeholder="Johnny's Car Wash">
              <h6 class="mt-3">Establishment Address:</h6>
              <label for="street">Street</label>
              <input class="form-control" type="text" id="street" placeholder="123 Perkins Way">
              <label for="zip" class="mt-2">Zip Code</label>
              <input class="form-control" type="number" id="zip" placeholder="90210">
            </div>
            <div class="text-center">
              <router-link to="Coverage" class="btn btn-primary float-middle">Coverage</router-link>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      caseId: '',
      tradeName: '',
      legalName: '',
      street: '',
      zip: ''
    }
  }
}
</script>

<style scoped lang="css">
form {
  width: 80vw;
}
</style>
