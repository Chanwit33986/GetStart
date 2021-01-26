<template>
  <b-breadcrumb>
    <b-breadcrumb-item
      :to="item.href"
      v-for="item in routeItem"
      :key="item.text"
      :active="item.active"
    >
      {{ item.text }}
    </b-breadcrumb-item>
  </b-breadcrumb>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          text: 'Home',
          href: '/',
          active: false,
        },
      ],
    }
  },
  computed: {
    routeItem() {
      this.items = []
      if (this.$route.name == 'login') {
        this.items.push({
          text: this.$route.name,
          href: '/login',
          active: false,
        })
      } else {
        this.items.push(
          {
            text: 'Home',
            href: '/',
            active: false,
          },
          { text: this.$route.name, active: true }
        )
      }
      return this.items
    },
  },
}
</script>
