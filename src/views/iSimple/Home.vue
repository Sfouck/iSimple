<template>
  <section class="page__home">
    <i-cover :background-url="cover_background">
      <!-- # equals to v-slot -->
      <template #title>
        <h1>
          地方創生計畫
        </h1>
      </template>
      <p>
        木作如同生活的智者,帶領我們不斷地去學習,透過不同形式和表現,描述
        著他們所經歷的過程,提升我們的想法與見解。
      </p>
      <template #button>
        <a class="btn" @click="showModal = true">
          Read More(Open Modal)
        </a>
      </template>
    </i-cover>

    <!-- <slot name="crumb" /> -->

    <article class="main__info">
      <hgroup>
        <h1>好康推薦</h1>
        <h2>最受歡迎商品、體驗報乎你知</h2>
      </hgroup>
      <section>
        <i-info v-for="info in infos" :key="info.id" :info="info.data">
          <p>
            <strong>I'm slot test!</strong>
          </p>
        </i-info>
      </section>
    </article>

    <i-slider></i-slider>

    <section class="main__subscription">
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
    </section>

    <i-modal v-if="showModal" @close="showModal = false">
      <template #header> </template>
      <template #body>
        <div class="video-wrapper">
          <iframe
            src="https://www.youtube.com/embed/hgVtUkRf_Cc"
            frameborder="0"
            allowfullscreen="1"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            width="640"
            height="360"
            style="width:100%; height:100%; position: absolute;"
          ></iframe>
        </div>
      </template>
      <template #footer> </template>
    </i-modal>
  </section>
</template>

<script>
export default {
  // name: 'isimple-home',
  data() {
    return {
      cover_background: '/cover-home.jpg',
      showModal: false,
      infos: [
        {
          id: 1,
          data: {
            media_url: '//unsplash.it/200/200',
            title: 'main__info1',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
          },
        },
        {
          id: 2,
          data: {
            media_url: '//unsplash.it/200/201',
            title: 'main__info2',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
          },
        },
        {
          id: 3,
          data: {
            media_url: '//unsplash.it/200/202',
            title: 'main__info3',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
          },
        },
        {
          id: 4,
          data: {
            media_url: '//unsplash.it/200/204',
            title: 'main__info4',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
          },
        },
      ],
    }
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

.main__subscription {
  display: flex;
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

.main__info {
  // background: $color-light;
  background: pink;
  padding: 1.5rem;
  > hgroup {
    background: lightcyan;
    text-align: center;
    padding: 1.5rem 0;
  }
  > section {
    background: lightgreen;
    display: grid;
    grid-gap: 20px;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-auto-rows: minmax(300px, auto);
    align-items: center;
    justify-items: center;
  }
}
</style>
