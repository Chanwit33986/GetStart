<template>
  <div class="col-12 col-sm-6 col-md-4 col-lg-4">
    <b-card
      :title="data.author"
      :img-src="data.download_url"
      :img-alt="data.id"
      img-top
      tag="article"
      style="max-width: 20rem"
      class="mb-2"
    >
      <b-card-text>
        {{ data.author }}
      </b-card-text>

      <b-button v-if="isShow" variant="primary" @click="GoWatch"
        >Watch</b-button
      >
      <b-button v-if="!isShow" variant="primary" @click="GoBack">Back</b-button>
    </b-card>
  </div>
</template>

<script>
export default {
  props: {
    data: Object,
    isShow: Boolean,
  },
  methods: {
    GoWatch() {
      this.$router.push('/posts/' + this.data.id)
    },
    GoBack() {
      this.$router.push('/posts/')
    },
  },
}
</script>

<style></style>
