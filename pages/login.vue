<template>
  <div>
    <h2>Login Page</h2>
    <button @click="login">login</button>
  </div>
</template>

<script>
export default {
  layout: 'default',
  methods: {
    login() {
      this.$store.commit('setAuth')
      this.$router.push('/about')
    },
  },
}
</script>

<style></style>
