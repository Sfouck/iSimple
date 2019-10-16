<template>
  <section class="cover">
    <div class="cover__showcase" :style="cssVars">
      <div class="cover__title">
        <slot name="title">
          <!-- <h1>cover</h1> -->
        </slot>
      </div>
      <div class="cover__body">
        <slot>
          <!-- <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi eaque
            inventore odit esse quibusdam vitae iure nostrum rerum illum!
          </!-->
        </slot>
      </div>
      <div class="cover__footer">
        <slot name="button">
          <!-- <a href="#" class="btn">Read More</a> -->
        </slot>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ICover',
  props: {
    'background-url': {
      type: String,
      default: '/blogging-coding-copywriting-34140.jpg',
    },
  },
  // mounted() {
  //   // TODO: change css setting method from v-bind to js function
  //   const cover__showcase = this.$el.getElementsByClassName('cover__showcase')[0];
  //   console.log(cover__showcase.get)
  // },
  computed: {
    cssVars() {
      return {
        '--background-url': `url(/img/${this.backgroundUrl})`,
      }
    },
  },
}
</script>

<style lang="scss" scoped>
@font-face {
  font-family: 'SetoFont';
  src: url('/font/setofont/cover.eot'); /* IE9 */
  src: url('/font/setofont/cover.eot?#iefix') format('embedded-opentype'),
    /* IE6-IE8 */ url('/font/setofont/cover.woff') format('woff'),
    /* chrome, firefox */ url('/font/setofont/cover.ttf') format('truetype'),
    /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
      url('/font/setofont/cover.svg#SetoFont') format('svg'); /* iOS 4.1- */
  font-style: normal;
  font-weight: normal;
}
.cover {
  overflow: hidden;
  &__title {
    font-family: 'SetoFont', 'Noto Sans', '微軟正黑體', Arial, Helvetica,
      sans-serif;
    font-size: 2rem;
    > {
      h1,
      h2,
      h3,
      h4,
      h5 {
        font-size: 3em;
        font-weight: normal;
      }
    }
  }

  &__body {
    font-size: 1.3rem;
    // margin-top: 0;
  }

  &__showcase {
    min-height: 500px;
    line-height: 1.5;
    padding: 3rem;
    z-index: 0;

    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    box-shadow: $shadow-default;
    color: $color-light;

    &::before {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      z-index: -1;

      display: block;
      // background-image: url('/img/blogging-coding-copywriting-34140.jpg');
      /* top, transparent black, faked with gradient */
      background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
        var(--background-url);
      background-size: cover;
      background-position: center;
      width: 100%;
      height: 100%;

      // -webkit-filter: blur(5px);
      // -moz-filter: blur(5px);
      // -o-filter: blur(5px);
      // -ms-filter: blur(5px);
      // filter: blur(1px);
    }
    > div {
      padding: 0.5rem;
      text-align: center;
    }
  }
}
</style>
