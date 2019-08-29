<template>
  <article class="app__projects">
    <i-cover class="projects__cover" :background_url="cover_image">
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
      <template #button>
        <!-- <a class="btn" @click="showModal = true">
          Read More(Open Modal)
        </a> -->
      </template>
    </i-cover>
    <section class="projects__video-grid">
      <div v-for="video in video_list" :key="video.id">
        <span>{{ video.vid }},</span>
        <span>{{ video.id }}</span>
        <iframe
          :src="video.url"
          frameborder="0"
          allowfullscreen="1"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          width="640"
          height="360"
        ></iframe>
        <div class="thumb">
          <img :src="video.thumbnail" alt="" />
        </div>
      </div>
    </section>
  </article>
</template>

<script>
export default {
  data() {
    return {
      cover_image: '/img/cover-video.jpg',
      video_list: [
        { vid: 'r3fE6FQT82s' },
        { vid: 'NmrYaeCs5Zc' },
        { vid: 'Ff5Bu0Gi2b4' },
        { vid: 'Fz5s1ZSZusY' },
        { vid: '1Ezccc5O5Pc' },
        { vid: 'LhdkD6CY9HE' },
      ],
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
  },
}
</script>

<style lang="scss">
.projects__cover {
  p,
  h1 {
    text-shadow: $shadow-default;
    // color: rgb(255, 234, 208);
  }
  p {
    font-weight: 600;
    // text-align: left;
    // text-indent: 2rem;
  }
}

.projects__video-grid {
  .thumb {
    overflow: hidden;
    width: 320px;
    img {
      margin: -10% 0;
      width: 100%;
    }
  }
}
</style>
