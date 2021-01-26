<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-navbar-brand to="/">GetStartApp</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <nuxt-link to="/" class="nav-item nav-link">Home</nuxt-link>
          <nuxt-link to="/about" class="nav-item nav-link">About</nuxt-link>
          <nuxt-link to="/posts" class="nav-item nav-link">Posts</nuxt-link>
        </b-navbar-nav>

        <b-navbar-nav class="ml-auto">
          <b-nav-item v-if="$store.state.authenticated" @click="logout"
            >Logout</b-nav-item
          >
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <div class="content mt-3">
      <b-container fluid>
        <LazyBreadcrumb />
      </b-container>
      <b-container>
        <Nuxt />
      </b-container>
    </div>
    <footer class="footer"></footer>
  </div>
</template>
<script>
export default {
  methods: {
    logout() {
      this.$store.commit('setAuth')
      this.$router.push('/login')
    },
  },
}
</script>
<style scoped>
.content {
  min-height: calc(100vh - 70px);
}
.footer {
  height: 50px;
  background-color: #e9ecef;
}
</style>
