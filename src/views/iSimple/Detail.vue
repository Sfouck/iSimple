<template>
  <div class="page__detail">
    <i-cover :background-url="cover_background">
      <template #title>
        <h1>
          地方創生計畫
        </h1>
      </template>
      <p>
        木作如同生活的智者,帶領我們不斷地去學習,透過不同形式和表現,描述
        著他們所經歷的過程,提升我們的想法與見解。
      </p>
    </i-cover>
    <!-- ibreadcrumb -->
    <i-post v-bind="post_data"></i-post>
  </div>
</template>

<script>
import IPost from '../../components/iSimple/Post.vue'
import posts from '../../assets/posts_data.js'
export default {
  data() {
    return {
      // cover_background: '',
      post_data: {},
    }
  },
  props: {
    cover_background: {
      type: String,
      default() {
        return 'cover-home.jpg'
      },
    },
  },
  created() {
    this.getPostData()
  },
  methods: {
    getPostData() {
      let params = this.$route.params
      // console.log(params)
      // console.log(posts[params.id])
      this.post_data = posts[params.id]
    },
  },
  components: {
    IPost,
  },
}
</script>

<style lang="scss"></style>
