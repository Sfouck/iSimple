<template>
  <section class="breadcrumb">
    <h1>{{ crumb_path }}</h1>
  </section>
</template>

<script>
export default {
  name: 'IBreadcrumb',
  data() {
    return {
      crumb_path: 'crumb_path',
    }
  },
  mounted() {
    this.crumb_path = this.$route.name
  },
}
</script>

<style lang="scss" scoped>
.breadcrumb {
  display: flex;
  height: 10vh;
  max-height: 70px;
  flex-flow: column wrap;
  justify-content: center;
  align-items: flex-start;
  line-height: 1.5;
  padding: 0 5rem;
  background-color: antiquewhite;
  > * {
    margin: 0.5rem 0;
  }
  > h1 {
    position: relative;
    color: #bf272d;
    &::before {
      content: '';
      width: 100%;
      height: 1px;
      background: #bf272d;
      position: absolute;
      left: 0;
      bottom: 2px;
    }
  }
}
</style>
