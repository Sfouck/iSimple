<template>
  <section class="page__home">
    <i-cover :background-url="cover_background">
      <!-- # equals to v-slot -->
      <template #title>
        <h1>
          愛x簡單x水林
        </h1>
      </template>
    </i-cover>

    <!-- <slot name="crumb" /> -->

    <article class="works">
      <hgroup>
        <h1>最新消息</h1>
        <!-- <h2>最新消息-副標題</h2> -->
      </hgroup>
      <section>
        <i-card
          v-for="(works, index) in works_list"
          v-bind="works"
          :key="index"
        >
        </i-card>
      </section>
    </article>

    <article class="video">
      <hgroup>
        <h1>精選影片</h1>
        <h2>了解本地的風光情景</h2>
      </hgroup>
      <section>
        <i-video-card
          v-for="(video, index) in video_list"
          v-bind="video"
          :key="index"
          @open="openModalVideo"
        >
        </i-video-card>
      </section>
    </article>

    <!-- <section class="subscription">
      <h1>訂閱電子報</h1>
      <button id="show-modal" @click="showModal = true">Show Modal</button>
      <h3>
        分享生活故事、社區活動和優惠訊息給每一位朋友<br />
        請在下方輸入您的Email後就會收到我們的電子報嘍
      </h3>
      <form action="" method="post">
        <div class="input-box">
          <label for="email">E-mail</label>
          <input type="email" name="email" maxlength="200" />
        </div>
        <input type="submit" value="送出" />
      </form>
    </section> -->

    <i-modal v-if="showModal" @close="showModal = false">
      <!-- <template #header> </template> -->
      <template #body>
        <div class="video-wrapper">
          <iframe
            :src="currentVideoURL"
            frameborder="0"
            allowfullscreen="1"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            width="640"
            height="360"
            style="width:100%; height:100%; position: absolute;"
          ></iframe>
        </div>
      </template>
      <!-- <template #footer> </template> -->
    </i-modal>
  </section>
</template>

<script>
import iCard from '@/components/iSimple/Card.vue'
import iVideoCard from '@/components/iSimple/VideoCard.vue'
export default {
  // name: 'isimple-home',
  data() {
    let temp_list = [
      {
        img: '/img/detail/woodwork_cover.jpg',
        title: '小草書屋',
        description:
          '一群社區返鄉青年和社區志工深耕為高關懷的兒童打造一個社區培育系統。',
        tags: ['社區規劃', '品牌設計', '空間規劃', '小草書屋'],
        link: '/detail/1',
      },
      {
        img: '/img/detail/baking_cover.jpg',
        title: '青草職能學苑募資計畫',
        description:
          '青草是社區裡中輟及弱勢青少年。 因家庭困境，面臨學習落後，甚至離開學校，失去人生方',
        tags: ['社區設計', '青草職能學苑', '愛鄰醫院', '品牌設計'],
        link: '/detail/2',
      },
      {
        img: '/img/detail/bat_cover.jpg',
        title: '樂心 產後護理之家',
        description: '快樂安心的產後護理最佳選擇。',
        tags: ['品牌設計', '樂心 產後護理之家'],
        link: '/detail/3',
      },
    ]
    return {
      cover_background: '/cover/cover-home.jpg',
      showModal: false,
      news_list: temp_list,
      works_list: temp_list,
      current_video: 'hgVtUkRf_Cc',
      video_list: [
        {
          title: '水林小陳',
          description:
            '陳弘益積極與臨近之有機或友善耕作小農交流合作，並籌組果菜生產合作社，目前合作社員所生產之作物，主要運往果菜拍賣市場，小部份自產自銷。',
          tags: ['水林小陳'],
          videoid: '1DXUWTUX4gU',
        },
        {
          title: '五木工坊',
          description:
            '不惑之年的楊詔期先生,從事木工產業已逾 16 年。逐漸地體會到土木工程並非自己的志業,在 2008 年毅然決然地回到水林老家。',
          tags: ['五木工坊'],
          videoid: 'eMrPsnlhLtk',
        },
      ],
    }
  },
  methods: {
    openModalVideo: function(videoid) {
      // console.log(videoid)
      this.current_video = videoid
      this.showModal = true
    },
  },
  computed: {
    currentVideoURL: function() {
      return `//www.youtube.com/embed/${this.current_video}`
    },
  },
  components: {
    iCard,
    'i-video-card': iVideoCard,
  },
}
</script>

<style lang="scss" scoped>
.video-wrapper {
  position: relative;
  padding-bottom: 56.25%; //16:9
  overflow: hidden;
  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
}

.subscription {
  display: flex;
  width: 90%;
  margin: 0 auto;
  // height: 30vh;
  // min-height: 250px;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  // line-height: 1.5;
  padding: 2.5rem 0rem;
  background-color: antiquewhite;
  > * {
    margin: 0.5rem 0;
  }
  > form > * {
    display: inline-block;
  }
}

.page__home {
  > article {
    $home__article-padding: 1.5rem;
    width: 80%;
    margin: 0 auto;
    padding: $home__article-padding;
    > hgroup {
      text-align: center;
      padding: $home__article-padding 0;
    }
    > section {
      // padding: 2rem 10%;
      position: relative;
      display: grid;
      grid-gap: 2rem;
      grid-template-columns: repeat(3, minmax(250px, 1fr));
      grid-auto-rows: 1fr;
    }
    // border: lightgrey solid 1px;
  }
}

@media screen and (max-width: 1023.98px) {
  .page__home {
    > article {
      padding: 0;
      > section {
        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
        // grid-auto-rows: 1fr;
      }
    }
  }
}
</style>
