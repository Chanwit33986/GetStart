<template>
  <div>
    <LazyMyComponent :text="times" />
    <!-- <p v-if="$fetchState.pending">Loading....</p>
    <p v-else-if="$fetchState.error">Error while fetching mountains</p>
    <ul v-else>
      <li v-for="(mountain, index) in mountains" :key="index">
        {{ mountain.title }}
      </li>
    </ul> -->
    <button @click="showAlert">ShowAlert</button>
  </div>
</template>
<script>
export default {
  middleware: 'authenticated',
  layout: 'default',
  data() {
    return {
      mountains: [],
      count: 0,
      times: null,
    }
  },
  async fetch() {
    this.times = await this.$moment().format('MMMM Do YYYY, h:mm:ss a')
    // this.mountains = await fetch(
    //   'https://api.nuxtjs.dev/mountains'
    // ).then((res) => res.json())
  },
  async asyncData(context) {
    //console.log(context)
  },
  methods: {
    showAlert() {
      this.$swal.fire(this.times)
    },
  },
  async mounted() {
    setInterval(this.$fetch, 1000)
  },
}
</script>
