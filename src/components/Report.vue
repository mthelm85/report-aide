<template lang="html">
<div class="container">
  <div class="row">
    <div class="col text-justify">
      <div class="row mt-3">
        <div class="col float-left">
          <div>
            {{ legalName }}
            <br>
            {{ street }}
            <br>
            {{ city }}, {{ state }} {{ zip }}
          </div>
        </div>
        <div class="col float-right text-right">
          <div>
            {{ caseId }}
            <br>
            {{ ein }}
          </div>
        </div>
      </div>
      <h3 class="text-center mt-5">FLSA Narrative Report</h3>
      <p class="mt-5">The legal name of the subject employer is {{ legalName }} and the trade name is {{ tradeName }}.
      </p>
      <p>The subject employer meets the definition of <i>enterprise engaged in commerce or in the production of goods
        for commerce</i>, per Section 203(s)(1)(A) of the Act, as its annual dollar volume of business done was
        ${{ adv0 }} in {{ year0 }}, ${{ adv1 }} in {{ year0 - 1 }}, and ${{ adv2 }} in
        {{ year0 - 2 }}.
      </p>
    </div>
  </div>
</div>
</template>

<script>
export default {
  data () {
    return {

    }
  },

  computed: {
    caseId () {
      return this.$store.state.caseInfo.caseId
    },
    city () {
      return this.$store.state.caseInfo.city
    },
    ein () {
      return this.$store.state.caseInfo.ein
    },
    state () {
      return this.$store.state.caseInfo.state
    },
    street () {
      return this.$store.state.caseInfo.street
    },
    legalName () {
      return this.$store.state.caseInfo.legalName
    },
    year0 () {
      return new Date().getFullYear()
    },
    zip () {
      return this.$store.state.caseInfo.zip
    }
  }
}
</script>

<style scoped lang="css">
</style>
