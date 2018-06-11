<template lang="html">
  <b-navbar type="dark" variant="primary" class="shadow" toggleable>
  <b-navbar-toggle target="nav_dropdown_collapse"></b-navbar-toggle>
  <b-navbar-brand href="#">SARG Prototype</b-navbar-brand>
  <b-collapse is-nav id="nav_dropdown_collapse">
    <b-navbar-nav>
      <b-nav-item-dropdown text="FLSA" right>
      <b-dropdown-item><router-link to="/">Case Info</router-link></b-dropdown-item>
      <b-dropdown-item><router-link to="/coverage">Coverage</router-link></b-dropdown-item>
      <b-dropdown-item><router-link to="/report">Report</router-link></b-dropdown-item>
    </b-nav-item-dropdown>
    </b-navbar-nav>
  </b-collapse>
  </b-navbar>
</template>

<script>
export default {}
</script>

<style lang="css">
</style>
