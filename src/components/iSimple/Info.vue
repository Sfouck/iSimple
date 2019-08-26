<template>
  <div class="box i-info-box">
    <img class="i-info-box__img" :src="info.media_url" alt="box__image" />
    <div class="i-info-box__text-area">
      <h1>{{ info.title }}</h1>
      <p>{{ info.content }}</p>
      <slot></slot>
      <!-- TODO: use slot-->
    </div>
  </div>
</template>

<script>
export default {
  name: 'IInfo',
  props: ['info'],
}
</script>

<style lang="scss" scoped>
.i-info-box {
  display: flex;
  flex-flow: column nowrap;
  // justify-content: center;
  padding: 1rem;
  align-items: center;
  &__text-area {
    > h1 {
      font-size: 1.5rem;
    }
  }
}
</style>
