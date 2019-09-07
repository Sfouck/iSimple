<template>
  <section class="page__works">
    <i-cover :background-url="cover_image">
      <template #title>
        <h1>
          地方創生計畫 - 最新消息
        </h1>
      </template>
    </i-cover>
  </section>
</template>

<script>
export default {
  data() {
    return {
      cover_image: 'cover-works2.jpg',
    }
  },
}
</script>
