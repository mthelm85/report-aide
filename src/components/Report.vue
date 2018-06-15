<template lang="html">
<div class="container">
  <div class="row">
    <div class="col text-justify">
      <div class="row mt-3">
        <div class="col float-left">
          <div>
            {{ caseInfo.legalName }}
            <br>
            {{ caseInfo.street }}
            <br>
            {{ caseInfo.cityStateZip }}
          </div>
        </div>
        <div class="col float-right text-right">
          <div>
            {{ caseInfo.caseId }}
            <br>
            {{ caseInfo.ein }}
          </div>
        </div>
      </div>
      <h3 class="text-center mt-4">FLSA Narrative Report</h3>
      <p class="mt-4">The legal name of the subject employer is {{ caseInfo.legalName }} and the trade name is {{ caseInfo.tradeName }}.
        {{ coverage.nature }} {{ caseInfo.legalName }} is a(n) {{ entityType }}.
      </p>
      <p v-if="coverage.basis.enterprise.checked">The subject employer meets the definition of <i>enterprise engaged in commerce or in the production of goods
        for commerce</i>, per Section 203(s)(1)(A) of the Act, as its annual dollar volume of business done was
        {{ coverage.basis.enterprise.adv0 }} in {{ year0 }}, {{ coverage.basis.enterprise.adv1 }} in {{ year0 - 1 }}, and {{ coverage.basis.enterprise.adv2 }} in
        {{ year0 - 2 }}.
      </p>
      <p v-if="coverage.basis.individual.checked">{{ coverage.basis.individual.basis }}</p>
      <p v-if="coverage.basis.named.checked">The subject employer is covered under the FLSA as it meets the definition of
      a(n) <i>{{ namedType }}</i>.</p>
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

  computed: {
    ...mapGetters({
      caseInfo: 'getCaseInfo',
      coverage: 'getCoverage'
    }),
    entityType () {
      let type = this.$store.state.coverage.type
      for (const i in type) {
        if (type[i] === true) {
          if (i === 'llc') {
            return 'Limited Liability Company'
          } else {
            return i
          }
        }
      }
    },
    namedType () {
      switch (this.coverage.basis.named.basis) {
        case 'hospital':
          return 'hospital'
        case 'health':
          return 'institution primarily engaged in the care of the sick, the aged, the mentally ill or defective who reside on the premises of the institution'
        case 'school':
          return 'school for mentally or physically handicapped or gifted children, a preschool, elementary or secondary school, or an institution of higher education'
        case 'rail':
          return 'employer involved in the operation of a street, suburban or interurban electric railway, or local trolley or motorbus carrier and the rates and services of the railway or carrier are subject to regulation by a statesor local agency'
        case 'govt':
          return 'public agency'
      }
    }
  }
}
</script>

<style scoped lang="css">
</style>
