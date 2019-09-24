<template>
  <div class="page__detail detail">
    <i-cover class="detail__cover" :background-url="cover_background">
      <!-- <template #title>
        <h1>
          {{ posts_data.title }}
        </h1>
      </template> -->
      <!-- <p>
        木作如同生活的智者,帶領我們不斷地去學習,透過不同形式和表現,描述
        著他們所經歷的過程,提升我們的想法與見解。
      </!-->
    </i-cover>
    <!-- ibreadcrumb -->
    <i-post class="detail__post" v-bind="post_data"></i-post>
  </div>
</template>

<script>
import IPost from '../../components/iSimple/Post.vue'
import posts from '../../assets/posts_data.js'
export default {
  data() {
    return {
      cover_background: 'cover-home.jpg',
      post_data: {},
    }
  },
  // props: {
  //   cover_background: {
  //     type: String,
  //     default() {
  //       return 'cover-home.jpg'
  //     },
  //   },
  // },
  created() {
    this.fetchPostData()
    this.cover_background = this.post_data.cover
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
  components: {
    IPost,
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
