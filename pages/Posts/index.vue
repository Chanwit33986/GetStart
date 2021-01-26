<template>
  <div>
    <b-container>
      <b-form-select
        v-model="select"
        :options="options"
        class="col-12 col-sm-1 mb-3"
        value-field="item"
        text-field="name"
        @change="refresh"
      ></b-form-select>

      <PostList :items="datas" :isShow="true" />
    </b-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      select: null,
      options: [
        { item: 3, name: '3' },
        { item: 6, name: '6' },
        { item: 9, name: '9' },
        { item: 12, name: '12' },
        { item: null, name: 'All' },
      ],
    }
  },
  async asyncData({ $axios, store }) {
    const datas = await $axios.$get(
      'https://picsum.photos/v2/list?limit=' + store.state.selected
    )
    return { datas }
  },
  created() {
    this.select = this.$store.state.selected
  },
  methods: {
    refresh() {
      this.$nuxt.$loading.start()
      setTimeout(this.loadPosts, 5000)
    },
    loadPosts() {
      this.$store.commit('setSelected', this.select)
      this.$nuxt.refresh()
      this.$nuxt.$loading.finish()
    },
  },
}
</script>

<style></style>
