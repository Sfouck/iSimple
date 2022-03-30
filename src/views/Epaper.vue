<template>
  <section class="page__epaper">
    <i-cover :background-url="cover_image">
      <template #title>
        <h1>電子報</h1>
      </template>
    </i-cover>
    <article class="epaper">
      <section>
        <i-card
          v-for="(epaper, index) in epaper_list"
          v-bind="epaper"
          :key="index"
        >
        </i-card>
      </section>
    </article>
  </section>
</template>

<script>
import { iCard } from '@/components'
import details_data from '@/assets/js/details_data.js'
export default {
  data() {
    return {
      cover_image: 'cover/page/epaper.jpg',
      epaper_list: details_data.map((detail) => ({
        ...detail,
        link: `/detail/${detail.id}`,
        img: `/img/detail/${detail.img_folder}/cover.jpg`,
      })),
    }
  },
  computed: {},
  filters: {},
  methods: {},
  components: {
    iCard,
  },
}
</script>

<style lang="scss">
.page__epaper {
  overflow: hidden;
  @include for-mobile {
    > section {
      padding-left: 0;
      padding-right: 0;
    }
  }
}

.epaper {
  width: 75%;
  margin: 0 auto;
  padding: 1.5rem;
  hgroup {
    position: relative;
    text-align: center;
  }
  h1 {
    &::after,
    &::before {
      content: '';
      background-color: black;
      position: absolute;
      top: 50%;
      height: 2px;
      width: 30%;
    }
    &::before {
      left: 0;
    }
    &::after {
      right: 0;
    }
  }

  > section {
    position: relative;
    display: grid;
    grid-gap: 2rem;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-auto-rows: 1fr;
    @include for-desktop {
      grid-template-columns: repeat(3, 1fr);
    }
  }
}
</style>
