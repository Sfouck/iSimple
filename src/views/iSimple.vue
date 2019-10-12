<template>
  <div class="wrapper">
    <header>
      <div class="logo-box">
        <router-link :to="{ name: 'home', path: '/' }">
          <img
            src="/img/logo.png"
            alt="Logo"
            class="logo-box__img"
            id="header__logo"
          />
        </router-link>
      </div>
      <nav-menu :links="nav_links" :open="nav_show == true"></nav-menu>
      <div class="nav__option" @click="toggleMenu">
        <div class="nav__hamburger"></div>
      </div>
    </header>
    <main>
      <transition name="fade" mode="out-in" @beforeEnter="beforeEnter" appear>
        <!-- <keep-alive><router-view> </router-view></keep-alive> -->
        <router-view> </router-view>
      </transition>
    </main>
    <!-- <aside class="btn-gotop btn-gotop--fixed">
      <a class="btn-gotop__link" href="#header_logo"></a>
    </aside> -->
    <footer>
      <p>
        國立虎尾科技大學 地方創生計畫 wjc &copy; 2019
      </p>
    </footer>
  </div>
</template>

<script>
// import AppMenu from '@/components/AppMenu'
import links_iSimple from '@/assets/data/links.js'
export default {
  name: 'isimple',
  data() {
    return {
      nav_links: links_iSimple,
      nav_show: false,
      // routeToHome: { name: 'home', path: '/' },
    }
  },
  methods: {
    beforeEnter() {
      this.$root.$emit('scrollBeforeEnter')
    },
    toggleMenu() {
      this.nav_show = !this.nav_show
    },
  },
  // components: { 'app-menu': AppMenu },
}
</script>

<style lang="scss">
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

img {
  display: block;
  max-width: 100%;
  height: auto;
}

.wrapper {
  > header {
    box-shadow: $shadow-default;
    // background-color: $color-light;
    background-color: white;
    position: sticky;
    top: 0;

    height: 10vh;
    min-height: 80px;
    // padding: 0 10vw;

    display: grid;
    grid-template-rows: minmax(80px, 10vh) 50vh;
    grid-template-columns: repeat(5, 1fr);
    z-index: 1000;
    > nav {
      grid-column: 4 / 6;
    }
  }
  > main {
    display: grid;
    width: 100%;
    > section {
      width: inherit;
    }
  }
}

section {
  .box {
    background: $color-light;
    border: $color-dark solid 2px;
    padding: 2rem;
    text-align: center;
    box-shadow: $shadow-default;
  }
}

.logo-box {
  z-index: inherit;
  grid-column: 3 / 4;
  // margin: 0 auto;
  justify-self: center;

  height: 100%;
  width: fit-content;
  img {
    height: 100%;
    object-fit: scale-down;
  }
}

.nav__option {
  display: none;
  z-index: inherit;
  grid-column: 5 / 6;
  grid-row: 1 / 2;
  // background: #aa9;
  // order: 1;
  .nav__hamburger {
    @include btn-hamburger(50px, 50px, #000);
  }
}

@media screen and (max-width: 768px) {
  .wrapper > header > nav {
    // display: none;
    grid-column: 1 / 6;
    grid-row: 2 / 3;
    overflow: hidden;
  }
  .nav__option {
    display: flex;
    min-height: 50px;
    align-items: center;
    justify-content: center;
  }
}

footer {
  margin-top: 2rem;
  background: $color-dark;
  color: $color-light;
  text-align: center;
  padding: 1rem;
}

.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-timing-function: ease-in-out;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>
