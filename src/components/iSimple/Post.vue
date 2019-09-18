<template>
  <article class="post">
    <!-- <i-cover></i-cover> -->
    <!-- ibreadcrum -->
    <div class="post__title">
      <h1>{{ title }}</h1>
    </div>
    <div class="post__tags">
      <a href="" v-for="(tag, index) in tags" :key="index"> #{{ tag }} </a>
    </div>
    <div class="post__content">
      <div v-html="body"></div>
    </div>
    <div class="post__share-box"></div>
  </article>
</template>

<script>
export default {
  name: 'IPost',
  props: ['title', 'tags', 'body', 'postid'],
}
</script>

<style lang="scss" scoped>
$area_line-height: 1.2rem;
.post {
  &__tags {
    .tag-area {
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
