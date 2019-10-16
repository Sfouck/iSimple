<template>
  <article class="post">
    <!-- 標題 -->
    <div class="post__title">
      <h1>{{ post.post_title }}</h1>
    </div>

    <!-- 標籤 -->
    <div class="post__tags">
      <a href="" v-for="(tag, index) in post.tags" :key="index"> #{{ tag }} </a>
    </div>

    <!-- 內文 -->
    <div class="post__content">
      <!-- <div v-html="body"></div> -->
      <slot></slot>
    </div>

    <!-- 分享區 -->
    <div class="post__share-box">
      <slot name="share-box"></slot>
    </div>
  </article>
</template>

<script>
export default {
  name: 'IPost',
  props: ['post'],
}
</script>

<style lang="scss" scoped>
$area_line-height: 1.2rem;
.post {
  // min-width: 50vw;
  max-width: 800px;
  margin: 0 auto;
  &__title {
    font-size: 1.5rem;
  }
  &__content {
    // ::v-deep {
    //   img {
    //     margin: 0 auto;
    //   }
    // }
    // max-width: 800px;
    // margin: 0 auto;
    p {
      text-indent: 2rem;
      margin-bottom: 1rem;
    }
  }
  &__tags {
    display: flex;
    flex-flow: row wrap;
    > a {
      position: relative;
      z-index: 0;
      font-size: 0.8rem;
      font-weight: bold;
      line-height: $area_line-height;
      height: $area_line-height;
      overflow: hidden;
      margin: 0.5rem 0.5rem 0 0;
      padding: 0 6px;
      text-decoration: none;
      letter-spacing: 1px;
      color: $color-dark;
      &::before {
        content: '';
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        right: 0;
        background: rgb(219, 219, 219);
        z-index: -1;
      }
      &::after {
        content: '';
        width: 0;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        background: darken(red, 10);
        z-index: -1;
      }
    }
  }
}
@media screen and (min-width: 1023.98px) {
  .post {
    &__tags {
      height: ($area_line-height + 0.5rem) * 2;
      > a:hover {
        color: white;
        transition: all 0s ease 0.1s;
        &::before {
          width: 0;
          transition: 0.3s;
        }
        &::after {
          width: 100%;
          transition: 0.3s 0.3s;
        }
      }
    }
  }
}
</style>
