<template>
  <div class="row">
    <div class="content-header">
      <h1>Contas bancárias <small>Gerenciamento de bancos</small></h1>
      <div class="grey-text">
        <small>
          <a href="#/">iFinance</a> >
          <span>Seus bancos</span>
        </small>
      </div>
    </div>

    <div class="card col s12">
      <div class="card-content">
        <table class="highlight">
          <thead>
            <tr>
              <th>bancos</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="bank in banks.data" :key="bank.code">
              <td class="valign-wrapper">{{ bank.title }} ({{ bank.code }})</td>
            </tr>
          </tbody>
        </table>
        <pagination totalPerPage='20' resource='banks'></pagination>
      </div>
    </div>
  </div>
</template>

<script>
import Pagination from './../SharedComponents/Pagination'

export default {
  name: 'banks',
  components: {
    pagination: Pagination
  },
  computed: {
    banks () {
      return this.$store.state.pagination.getList
    }
  }
}
</script>
