<template>
  <article class="app__projects">
    <i-cover class="projects__cover" :background-url="cover_image">
      <template #title>
        <h1>
          木作
        </h1>
      </template>
      <section>
        <p>
          木工手作的靈感來自生活中不同接觸和體悟。<br />
          手作的本質呈現的是一種單純且令人感動的痕跡,同時靜靜地勾勒出簡約的線條,體現木頭樸質的紋路以及沉穩的呼吸與溫潤的質性。
          每一件獨特作品都隱含著「適材適所」的哲思。
        </p>
      </section>
    </i-cover>

    <section
      class="projects__video-grid cards"
      :class="{ showing: cards.isShowing }"
    >
      <div class="card" v-for="video in video_list" :key="video.id">
        <div class="card__thumb">
          <img :src="video.thumbnail" alt="" />
        </div>
        <div class="card__title">
          <a class="btn toggler-info" @click="showVideo(video.id)">
            <span class="left"></span>
            <span class="right"></span>
          </a>
          <h2>
            {{ video.vtitle }}
            <small>{{ video.vid }}</small>
          </h2>
        </div>
      </div>
    </section>

    <i-modal v-if="showModal" @close="showModal = false">
      <template #body>
        <div class="video-wrapper">
          <iframe
            :src="current_video.url"
            frameborder="0"
            allowfullscreen="1"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            width="640"
            height="360"
            style="width:100%; height:100%; position: absolute;"
          ></iframe>
        </div>
      </template>
    </i-modal>
  </article>
</template>

<script>
export default {
  data() {
    return {
      showModal: false,
      card: {
        hasShow: false,
        isShowing: false,
      },
      cards: {
        hasShow: false,
        isShowing: false,
      },
      cover_image: '/cover/cover-video.jpg',
      video_list: [
        { vid: '1DXUWTUX4gU', vtitle: '水林小陳' },
        { vid: 'eMrPsnlhLtk', vtitle: '五木工坊' },
        {
          vid: 'Ff5Bu0Gi2b4',
          vtitle: 'Hong Kong Island Drone Tour',
        },
        { vid: 'Fz5s1ZSZusY', vtitle: 'City of Singapore - 2018' },
        { vid: '1Ezccc5O5Pc', vtitle: 'Top 5 Dubai Mega Projects' },
        {
          vid: 'LhdkD6CY9HE',
          vtitle: 'Hotel Dubai Hotel Atlantis The Palm Dubai booking',
        },
      ],
      current_video: '',
    }
  },
  created() {
    let id = 0
    // TODO: maybe refactoring from created to computed
    for (let video of this.video_list) {
      video.id = id++
      video.url = `//www.youtube.com/embed/${video.vid}`
      // thumnail(0~4) setting
      // 1. maxresdefault  1500x900  no black-strip
      // 2. mqdefault      320x180   no black-strip
      // 3. hqdefault(0)   480x360   with balck-strip
      video.thumbnail = `//img.youtube.com/vi/${video.vid}/0.jpg`
      // console.log(video)
    }

    this.current_video = this.video_list[0]
  },
  mounted() {
    const cards = document.getElementsByClassName('card')
    let vm = this
    for (let card of cards) {
      // console.log(card)
      card.addEventListener('click', function() {
        // console.log(this)
        vm.cardShowing(this)
      })
    }
  },
  methods: {
    cardShowing(e) {
      // console.log(e)
      let cardIsShowing = false,
        cardHasShow = e.getAttribute('class').indexOf('show') > 0 ? true : false

      if (cardHasShow) {
        cardIsShowing = true
      }

      if (this.cards.isShowing) {
        // a card is already in view
        document
          .getElementsByClassName('card show')[0]
          .setAttribute('class', 'card')

        if (cardIsShowing) {
          // this card was showing - reset the grid
          this.cards.isShowing = false
        } else {
          // this card isn't showing - get in with it
          e.setAttribute('class', `${e.getAttribute('class')} show`)
        }

        // zindex++
      } else {
        // no cards in view
        this.cards.isShowing = true
        e.setAttribute('class', `${e.getAttribute('class')} show`)
      }
      // console.log('test')
    },
    showVideo(id) {
      this.current_video = this.video_list[id]
      this.showModal = true
    },
  },
}
</script>

<style lang="scss">
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

.projects__cover {
  p,
  h1 {
    text-shadow: $shadow-default;
  }
  p {
    font-weight: 600;
  }
}

.projects__video-grid {
  padding: 2rem 3rem;
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-auto-rows: minmax(200px, auto);
  .btn {
    $color-button: teal;
    background: $color-button;
    border-radius: 4px;
    box-shadow: 0 2px 0px 0 rgba(0, 0, 0, 0.25);
    color: white;
    display: inline-block;
    padding: 6px 30px 8px;
    position: relative;
    text-decoration: none;
    transition: all 0.1s 0s ease-out;
    &:hover {
      background: lighten($color-button, 2.5);
      box-shadow: 0px 8px 2px 0 rgba(0, 0, 0, 0.075);
      transform: translateY(-2px);
      transition: all 0.25s 0s ease-out;
    }
    &:active {
      background: darken($color-button, 2.5);
      box-shadow: 0 1px 0px 0 rgba(255, 255, 255, 0.25);
      transform: translate3d(0, 1px, 0);
      transition: all 0.025s 0s ease-out;
    }
  }
}

// TODO: maybe css refactoring is needed

.projects__video-grid .card {
  border: burlywood solid 2px;
  background: white;
  display: inline-block;
  // margin: 8px;
  // max-width: 300px;
  perspective: 1000;
  position: relative;
  text-align: left;
  transition: all 0.3s 0s ease-in;
  z-index: 1;

  &__title {
    background: white;
    padding: 6px 15px 10px;
    position: relative;
    z-index: 0;
    h2 {
      font-size: 1.5em;
      font-weight: 700;
      letter-spacing: -0.05em;
      margin: 0;
      padding: 0;
      small {
        display: block;
        font-weight: 600;
        letter-spacing: -0.025em;
      }
    }
  }

  .toggler-info {
    border-radius: 32px;
    height: 32px;
    padding: 0;
    position: absolute;
    right: 15px;
    top: 10px;
    width: 32px;
    span {
      background: white;
      display: block;
      height: 2px;
      position: absolute;
      top: 16px;
      transition: all 0.15s 0s ease-out;
      width: 12px;
      &.left {
        right: 14px;
        transform: rotate(45deg);
      }
      &.right {
        left: 14px;
        transform: rotate(-45deg);
      }
    }
  }

  &__thumb {
    overflow: hidden;
    width: 100%;
    img {
      margin: -10% 0;
      // width: 100%;
    }
  }

  &.show {
    opacity: 1 !important;
    transform: scale(1) !important;
  }
}

.cards {
  &.showing {
    > .card {
      cursor: pointer;
      opacity: 0.6;
      transform: scale(0.88);
      &:hover {
        opacity: 0.94;
        transform: scale(0.92);
      }
    }
  }
}

@media screen and (max-width: 767.97px) {
  .projects__video-grid {
    padding: 2rem 1rem;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }
}
</style>
