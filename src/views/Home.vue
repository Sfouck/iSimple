<template>
  <section class="page__home">
    <i-cover :background-url="cover_background" height="93vh">
      <!-- # equals to v-slot -->
      <template #title>
        <h1>
          愛
          <span class="orangered">x</span>
          簡單
          <span class="orangered">x</span>
          水林
        </h1>
      </template>
    </i-cover>

    <!-- <slot name="crumb" /> -->

    <article class="news">
      <hgroup>
        <h1>電子報</h1>
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

    <i-modal v-if="showModal" @close="showModal = false">
      <template #body>
        <div class="video-wrapper">
          <iframe
            :src="currentVideoURL"
            frameborder="0"
            allowfullscreen="1"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            width="640"
            height="360"
            style="width: 100%; height: 100%; position: absolute"
          ></iframe>
        </div>
      </template>
    </i-modal>
  </section>
</template>

<script>
import { iCard, iModal } from '@/components'
import iVideoCard from '@/components/VideoCard.vue'
import details_data from '@/assets/js/details_data.js'
export default {
  // name: 'isimple-home',
  data() {
    for (let detail of details_data) {
      detail.link = `/detail/${detail.id}`
      detail.img = `/img/detail/${detail.img_folder}/cover.jpg`
    }
    return {
      cover_background: '/cover/page/home.jpg',
      showModal: false,
      news_list: details_data.slice(0, 3),
      current_video: 'hgVtUkRf_Cc',
      video_list: [
        {
          title: '水林小陳',
          img: '/img/cover/video/tsai.jpg',
          description:
            '陳弘益畢業後即北上打拼，受到老闆賞識一路升至廠長。眼見務農雙親因年長行動不便，更驚覺兒時玩耍之小溪水溝中的青蛙、魚、蝦已不復見，遂於民國95年揮別廠長職務，舉家返鄉。',
          tags: ['水林小陳'],
          videoid: '1DXUWTUX4gU',
        },
        {
          title: '五木工坊',
          img: '/img/cover/video/woodwork.jpg',
          description:
            '不惑之年的楊詔期先生,從事木工產業已逾 16 年。逐漸地體會到土木工程並非自己的志業,在 2008 年毅然決然地回到水林老家。',
          tags: ['五木工坊'],
          videoid: 'HoVayGW_Dtc',
        },
      ],
    }
  },
  methods: {
    openModalVideo: function (videoid) {
      // console.log(videoid)
      this.current_video = videoid
      this.showModal = true
    },
  },
  computed: {
    currentVideoURL: function () {
      return `//www.youtube.com/embed/${this.current_video}`
    },
  },
  components: {
    'i-card': iCard,
    'i-modal': iModal,
    'i-video-card': iVideoCard,
  },
}
</script>

<style lang="scss" scoped>
$home__article-padding: 1.5rem;

.page__home {
  overflow: hidden;
  @include for-mobile {
    > article {
      padding-left: 0;
      padding-right: 0;
    }
  }
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

  > section {
    position: relative;
    display: grid;
    grid-gap: 2rem;
    grid-template-columns: repeat(3, minmax(200px, 1fr));
    grid-auto-rows: 1fr;
  }

  @include for-mobile {
    > section {
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    }
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

  @include for-mobile {
    &__sentence {
      > h1 {
        display: inline-block;
        &::before {
          top: -10%;
          right: 95%;
        }
        &::after {
          left: 95%;
          bottom: -35%;
        }
      }
    }
  }
}

.video {
  background-color: lighten(#e4f3ee, 5);
  padding: 1rem;
  h1 {
    // width: fit-content;
    margin: 0 auto;
    padding-bottom: 2rem;
    font-size: 3em;
    display: table; //for ie browser support
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
  }
  @include for-mobile {
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
