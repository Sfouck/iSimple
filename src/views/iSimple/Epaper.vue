<template>
  <section class="page__e-paper">
    <i-cover :background-url="cover_image">
      <template #title>
        <h1>
          地方創生計畫 - 電子報
        </h1>
      </template>
    </i-cover>
  </section>
</template>

<script>
export default {
  data() {
    return {
      cover_image: 'cover-epaper.jpg',
    }
  },
}
</script>

<style lang="scss"></style>
