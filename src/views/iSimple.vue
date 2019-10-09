<template>
  <div class="wrapper">
    <header>
      <div class="logo-box">
        <router-link :to="routeToHome">
          <img
            src="/img/logo.png"
            alt="Logo"
            class="logo-box__img"
            id="header__logo"
          />
        </router-link>
      </div>
      <nav-menu :links="nav_links"></nav-menu>
      <div class="nav__option">
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
import links_iSimple from '@/components/iSimple/links.js'
export default {
  name: 'isimple',
  data() {
    return {
      nav_links: links_iSimple,
      routeToHome: { name: 'home', path: '/' },
    }
  },
  methods: {
    beforeEnter() {
      // console.log(el, window.scrollY)
      this.$root.$emit('scrollBeforeEnter')
      // done()
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
    background-color: $color-light;
    position: sticky;
    top: 0;

    height: 10vh;
    min-height: 80px;
    // padding: 0 10vw;

    display: grid;
    grid-auto-rows: minmax(80px, 10vh);
    grid-template-columns: repeat(5, 1fr);
    z-index: 1000;
    > nav {
      grid-column: 4 / 6;
    }
  }
  > main {
    display: grid;
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
  // background: lightskyblue;
  // flex: initial;
  grid-column: 3 / 4;
  margin: 0 auto;

  height: 100%;
  width: fit-content;
  img {
    height: 100%;
    // min-height: 100px;
    // margin: 0 auto;
    object-fit: scale-down;
  }
}

.nav__option {
  display: none;
  grid-column: 5;
  // background: #aa9;
  // order: 1;
  .nav__hamburger {
    @include btn-hamburger(50px, 50px, #000);
  }
}

@media screen and (max-width: 768px) {
  nav {
    display: none;
  }
  .nav__option {
    display: flex;
    min-height: 50px;
    align-items: center;
    justify-content: center;
    // position: relative;
    // height: 100%;
    // position: absolute;
    // top: 1.5rem;
    // right: 1rem;
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

// .btn-gotop {
//   &--fixed {
//     width: 100%;
//     position: fixed;
//     bottom: 0;
//     right: 10%;
//     z-index: 50;
//   }

//   &__link {
//     width: 42px;
//     height: 42px;
//     opacity: 0;
//     -webkit-transition: 0.5s;
//     transition: 0.5s;
//     position: absolute;
//     left: 100%;
//     bottom: 0;
//     border: 1px solid #333;
//     background: #fff;
//   }
// }

// .btn {
//   background: $color-dark;
//   color: $color-light;
//   padding: 0.6rem 1.3rem;
//   text-decoration: none;
//   border: 0;
//   border-radius: 3px;
//   cursor: pointer;
//   transition: 0.6s;
//   &:hover {
//     background: $color-light;
//     color: $color-dark;
//   }
// }
</style>
