<template>
  <div class="row">
    <PostContent
      v-for="item in items"
      :key="item.id"
      :data="item"
      :isShow="isShow"
    />
  </div>
</template>

<script>
export default {
  props: ['items', 'isShow'],
}
</script>

<style></style>
