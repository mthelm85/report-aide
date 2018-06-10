<template lang="html">
<div class="container">
  <div class="row">
    <div class="col text-justify">
      <div class="row mt-3">
        <div class="col float-left">
          <div>
            {{ caseInfo.legalName }}
            <br>
            {{ caseInfo.street}}
            <br>
            {{ caseInfo.city }}, {{ caseInfo.state }} {{ caseInfo.zip }}
          </div>
        </div>
        <div class="col float-right text-right">
          <div>
            {{ caseInfo.caseId }}
            <br>
            {{ caseInfo.ein}}
          </div>
        </div>
      </div>
      <h3 class="text-center mt-5">FLSA Narrative Report</h3>
      <p class="mt-5">The legal name of the subject employer is {{ caseInfo.legalName }} and the trade name is {{ caseInfo.tradeName }}.
      </p>
      <p v-if="coverage.enterprise.checked">The subject employer meets the definition of <i>enterprise engaged in commerce or in the production of goods
        for commerce</i>, per Section 203(s)(1)(A) of the Act, as its annual dollar volume of business done was
        ${{ coverage.enterprise.adv0 }} in {{ year0}}, ${{ coverage.enterprise.adv1 }} in {{ year0 - 1 }}, and ${{ coverage.enterprise.adv2 }} in
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
      caseInfo: {
        caseId: '1234567',
        ein: '75-123456',
        tradeName: 'Johnny\'s Car Wash',
        legalName: 'Johnny IV, Inc.',
        street: '123 Perkins',
        zip: '90210',
        city: 'Yakima',
        state: 'WA'
      },
      coverage: {
        enterprise: {
          adv0: 500000,
          adv1: 500000,
          adv2: 500000,
          checked: true,
          products: 'Dell brand laptops and Ford trucks.'
        },
        individual: {
          basis: '',
          checked: false
        },
        named: {
          basis: '',
          checked: false
        }
      }
    }
  },

  computed: {
    year0 () {
      return new Date().getFullYear()
    }
  }
}
</script>

<style scoped lang="css">
</style>
