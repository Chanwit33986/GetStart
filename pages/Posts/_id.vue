<template>
  <div>
    <div class="row">
      <PostContent :data="items" />
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $axios, params }) {
    const items = await $axios.$get(
      `https://picsum.photos/id/${params.id}/info`
    )
    return { items }
  },
}
</script>

<style></style>
