<template>
  <div class="page__detail detail">
    <i-cover class="detail__cover" :background-url="cover_background">
    </i-cover>
    <!-- ibreadcrumb -->
    <!-- <i-post class="detail__post" v-bind="post_data"></i-post> -->
    <component
      class="detail__post"
      :is="post_component"
      :post="post_data"
    ></component>
  </div>
</template>

<script>
// import IPost from '@/components/iSimple/Post.vue'
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
      // // A component to use while the async component is loading
      // loading: LoadingComponent,
      // // A component to use if the load fails
      // error: ErrorComponent,
      // // Delay before showing the loading component. Default: 200ms.
      delay: 200,
      // The error component will be displayed if a timeout is
      // provided and exceeded. Default: Infinity.
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
