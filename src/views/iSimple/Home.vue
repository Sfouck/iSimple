<template>
  <section class="page__home">
    <i-cover :background-url="cover_background">
      <!-- # equals to v-slot -->
      <template #title>
        <h1>
          愛<span>x</span>簡單<span>x</span>水林
        </h1>
      </template>
    </i-cover>

    <!-- <slot name="crumb" /> -->

    <article class="news">
      <hgroup>
        <h1>NEWS</h1>
        <!-- <h2>最新消息-副標題</h2> -->
      </hgroup>
      <section>
        <i-card v-for="(news, index) in news_list" v-bind="news" :key="index">
        </i-card>
      </section>
    </article>

    <article class="quote">
      <hgroup class="quote__sentence">
        <h1>木工手作的靈感來自生活中不同接觸和體悟。</h1>
        <h1>每一件獨特作品都隱含著「適材適所」的哲思。</h1>
      </hgroup>
      <p class="quote__leave-blank">.</p>
    </article>

    <article class="video">
      <hgroup>
        <h1>VIDEO</h1>
        <!-- <h2>了解本地的風光情景</h2> -->
      </hgroup>
      <section>
        <i-video-card
          v-for="(video, index) in video_list"
          v-bind="video"
          :id="index"
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
import details_data from '@/assets/js/details_data.js'
export default {
  // name: 'isimple-home',
  data() {
    for (let detail of details_data) {
      detail.link = `/detail/${detail.id}`
      detail.img = `/img/${detail.cover_img}`
    }
    return {
      cover_background: '/cover/cover-home.jpg',
      showModal: false,
      news_list: details_data,
      current_video: 'hgVtUkRf_Cc',
      video_list: [
        {
          title: '水賊林',
          img: '/img/detail/tsai_cover.jpg',
          description:
            '蔡得黃，綽號：菜刀。雖是農家子弟，但沒有任何務農經驗。曾任職傳播事業的他，2010年返鄉回到水林展開土地耕種。',
          tags: ['水賊林'],
          videoid: '3HETAzb_bwE',
        },
        {
          title: '五木工坊',
          img: '/img/detail/woodwork_cover.jpg',
          description:
            '不惑之年的楊詔期先生,從事木工產業已逾 16 年。逐漸地體會到土木工程並非自己的志業,在 2008 年毅然決然地回到水林老家。',
          tags: ['五木工坊'],
          videoid: 'HoVayGW_Dtc',
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
    'i-card': iCard,
    'i-video-card': iVideoCard,
  },
}
</script>

<style lang="scss" scoped>
$home__article-padding: 1.5rem;

.page__home {
  // > article {
  //   > hgroup {
  //     text-align: center;
  //     padding: $home__article-padding 0;
  //   }
  // }
  overflow: hidden;
}

.news {
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

  section {
    position: relative;
    display: grid;
    grid-gap: 2rem;
    grid-template-columns: repeat(3, minmax(200px, 1fr));
    grid-auto-rows: 1fr;
  }
}

.quote {
  background-color: lighten(#e4f3ee, 7);
  // margin: 0 auto;
  padding: 20vh 0 0 0;
  // width: 90%;
  display: grid;
  justify-content: center;
  // align-items: center;
  grid-auto-columns: 90%;
  grid-auto-rows: 1fr;
  &__sentence {
    display: table;
    // width: fit-content;
    margin: 0 auto;

    > h1 {
      position: relative;
      // margin: inherit auto inherit auto;
      // margin-left: auto;
      // margin-right: auto;
      text-align: center;
      width: 100%;
      line-height: 4rem;
      display: table;
      quotes: '\201C''\201D''\2018''\2019';
      &::before,
      &::after {
        position: absolute;
        font-size: 4.5rem;
        font-weight: bold;
      }
      &::before {
        content: open-quote;
        right: 100%;
        // bottom: -1.75rem;
      }
      &::after {
        content: close-quote;
        left: 100%;
        // bottom: -1.5rem;
      }
    }
  }
  &__leave-blank {
    // display: table;
    width: fit-content;
    // margin: 0 auto 10vh auto;
    margin: 0 auto;
    font-size: 5rem;
    line-height: 3rem;
    // padding: 0rem;
    &::before,
    &::after {
      content: '.';
      display: block;
      font-size: inherit;
    }
  }
}

.video {
  // margin: 0 auto;
  // width: 90%;
  background-color: lighten(#e4f3ee, 5);
  padding: 1rem;
  h1 {
    width: fit-content;
    margin: 0 auto;
    padding-bottom: 2rem;
    font-size: 3em;
    //display: table;  //for ie browser support
    &::after {
      content: '';
      background-color: black;
      display: block;
      height: 2px;
      // width: 100%;
      margin-top: 0.5rem;
    }
  }
  > section {
    width: 80%;
    margin: 0 auto;
    display: grid;
    grid-gap: 2rem;
    // // grid-template-columns: repeat(3, minmax(250px, 1fr));
    // grid-auto-columns: 1fr;
    // grid-auto-rows: 1fr;
  }
}

@media screen and (max-width: 1023.98px) {
  .page__home {
    article {
      padding-left: 0;
      padding-right: 0;
    }
  }
  .news {
    > section {
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    }
  }

  .quote {
    &__sentence {
      > h1 {
        display: inline-block;
        &::before {
          top: -10%;
          /* left: -20%; */
          right: 95%;
        }
        &::after {
          // left: 90%;
          // bottom: -2rem;
          left: 95%;
          bottom: -35%;
        }
      }
    }
  }

  .video {
    > section {
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    }
  }
}

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
</style>
