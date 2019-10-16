<template>
  <section class="page-about">
    <i-cover class="about about__cover" :background-url="cover_image">
      <template #title>
        <h1>
          聯絡資訊
        </h1>
      </template>
    </i-cover>
    <section class="about about__shop-list">
      <i-card
        class="shop-card"
        v-for="(shop, index) in shop_list"
        v-bind="shop"
        :key="index"
      >
      </i-card>
    </section>
  </section>
</template>

<script>
import iCard from '@/components/iSimple/Card.vue'
export default {
  data() {
    return {
      cover_image: 'cover/cover-about.jpg',
      shop_list: [
        {
          img: '/img/detail/inn_cover.jpg',
          title: '小草書屋',
          description:
            '一群社區返鄉青年和社區志工深耕為高關懷的兒童打造一個社區培育系統。',
          tags: ['社區規劃', '品牌設計', '空間規劃', '小草書屋'],
          link: '//www.thecan.com.tw/tw/creative/detail/402',
        },
        {
          img: '/img/detail/baking_cover.jpg',
          title: '青草職能學苑募資計畫',
          description:
            '青草是社區裡中輟及弱勢青少年。 因家庭困境，面臨學習落後，甚至離開學校，失去人生方',
          tags: ['社區設計', '青草職能學苑', '愛鄰醫院', '品牌設計'],
          link: '//www.thecan.com.tw/tw/creative/detail/411',
        },
      ],
    }
  },
  created() {
    for (let i = 1; i < 3; i++) {
      this.shop_list = [...this.shop_list, ...this.shop_list]
    }
  },
  components: {
    iCard,
  },
}
</script>

<style lang="scss">
.page-about {
  .about {
    &__shop-list {
      padding: 2rem 10%;
      position: relative;
      display: grid;
      grid-gap: 2rem;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      grid-auto-rows: 1fr;
    }
  }
}

@media screen and (min-width: 1280.98px) {
  .page-about {
    .about {
      &__shop-list {
        grid-template-columns: repeat(4, 1fr);
      }
    }
  }
}
</style>
