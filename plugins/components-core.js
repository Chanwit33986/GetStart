import Vue from 'vue'
import PostContent from '~/components/Posts/PostContent.vue'
import PostList from '~/components/Posts/PostList.vue'

const components = { PostContent, PostList }

Object.entries(components).forEach(([name, component]) => {
  Vue.component(name, component)
})
