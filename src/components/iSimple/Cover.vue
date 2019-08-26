<template>
  <section class="cover">
    <div class="box showcase">
      <slot name="title">
        <h1>cover</h1>
      </slot>
      <slot>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi eaque
          inventore odit esse quibusdam vitae iure nostrum rerum illum!
        </p>
      </slot>
      <slot name="button">
        <a href="#" class="btn">Read More</a>
      </slot>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ICover',
}
</script>

<style lang="scss" scoped>
.cover {
  .showcase {
    min-height: 400px;
    line-height: 1.5;
    background: url('../../assets/blogging-coding-copywriting-34140.jpg');
    background-size: cover;
    background-position: center;
    padding: 3rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-shadow: $shadow-default;
    h1 {
      font-size: 4rem;
      margin-bottom: 0;
      color: $color-light;
    }

    p {
      font-size: 1.3rem;
      margin-top: 0;
      color: $color-light;
    }
  }
}
</style>
