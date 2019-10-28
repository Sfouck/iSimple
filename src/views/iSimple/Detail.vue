<template>
  <div class="page__detail detail">
    <i-cover class="detail__cover" :background-url="cover_background">
    </i-cover>
    <component
      class="detail__post"
      :is="post_component"
      :post="post_data"
    ></component>
  </div>
</template>

<script>
import posts from '@/assets/js/details_data.js'
export default {
  name: 'IDetail',
  data() {
    return {
      cover_background: 'cover-home.jpg',
      post_data: {},
      post_component: null,
    }
  },
  created() {
    this.fetchPostData()
    this.post_component = () => ({
      // The component to load (should be a Promise)
      component: import(`@/components/iSimple/Details/${
        this.post_data.post_name
      }.vue`),
      delay: 200,
      timeout: 3000,
    })
    this.cover_background = this.post_data.cover_img
  },
  methods: {
    fetchPostData() {
      let params = this.$route.params
      let target_post = posts.find(function(post) {
        return post.id == params.id
      })
      if (target_post) {
        this.post_data = target_post
      }
    },
  },
}
</script>

<style lang="scss">
.detail {
  &__post {
    width: 80%;
    margin: 0 auto;
  }
}
</style>
