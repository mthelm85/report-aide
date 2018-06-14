<template lang="html">
<div class="container">
  <div class="row">
    <div class="col text-justify">
      <div class="row mt-3">
        <div class="col float-left">
          <div>
            {{ getCaseInfo.legalName }}
            <br>
            {{ getCaseInfo.street }}
            <br>
            {{ getCaseInfo.cityStateZip }}
          </div>
        </div>
        <div class="col float-right text-right">
          <div>
            {{ getCaseInfo.caseId }}
            <br>
            {{ getCaseInfo.ein }}
          </div>
        </div>
      </div>
      <h3 class="text-center mt-4">FLSA Narrative Report</h3>
      <p class="mt-4">The legal name of the subject employer is {{ getCaseInfo.legalName }} and the trade name is {{ getCaseInfo.tradeName }}.
      </p>
      <p>The subject employer meets the definition of <i>enterprise engaged in commerce or in the production of goods
        for commerce</i>, per Section 203(s)(1)(A) of the Act, as its annual dollar volume of business done was
        {{ getCoverage.basis.enterprise.adv0 }} in {{ year0 }}, {{ getCoverage.basis.enterprise.adv1 }} in {{ year0 - 1 }}, and {{ getCoverage.basis.enterprise.adv2 }} in
        {{ year0 - 2 }}.
      </p>
    </div>
  </div>
</div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      year0: new Date().getFullYear()
    }
  },

  computed: mapGetters([
    'getCaseInfo',
    'getCoverage'
  ])
}
</script>

<style scoped lang="css">
</style>
