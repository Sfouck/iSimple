<template>
  <div class="wrapper">
    <header>
      <nav-menu :links="nav_links"></nav-menu>
      <div class="btn-menu btn-menu--m_show">
        <div class="btn-menu__other-link"></div>
        <div class="btn-menu__search-box"></div>
      </div>
    </header>
    <main>
      <router-view>
        <i-breadcrumb slot="crumb"></i-breadcrumb>
      </router-view>
    </main>
    <aside class="btn-gotop btn-gotop--fixed">
      <a class="btn-gotop__link" href="#header_logo"></a>
    </aside>
    <!-- <app-menu></app-menu> -->
    <footer>
      <p>
        國立虎尾科技大學 地方創生計畫 wjc &copy; 2019
      </p>
    </footer>
  </div>
</template>

<script>
// import AppMenu from '@/components/AppMenu'
export default {
  name: 'isimple',
  data() {
    return {
      nav_links: [
        { title: 'Home', route: { name: 'home', path: '/' } },
        { title: 'About', route: { name: 'about', path: '/about' } },
        { title: 'Works', route: { name: 'works', path: '/works' } },
        { title: 'Projects', route: { name: 'projects', path: '/projects' } },
      ],
    }
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

.btn {
  background: $color-dark;
  color: $color-light;
  padding: 0.6rem 1.3rem;
  text-decoration: none;
  border: 0;
}

.wrapper {
  background: $color-light;
  // width: 100%;
  // display: grid;
  // grid-gap: 20px;
  > header {
    box-shadow: $shadow-default;
    // padding: 0 2rem;
    padding: 0 5vw;
    .btn-menu {
      display: none;
    }
  }
  > main {
    display: grid;
    // grid-gap: 20px;
  }
}

section {
  .box {
    background: $color-primary;
    border: $color-dark solid 2px;
    padding: 2rem;
    text-align: center;
    box-shadow: $shadow-default;
  }
}

.main__subscription {
  display: flex;
  height: 30vh;
  max-height: 300px;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  // line-height: 1.5;
  padding: 0 5rem;
  background-color: antiquewhite;
  > * {
    margin: 0.5rem 0;
  }
  > form > * {
    display: inline-block;
  }
}

.btn-gotop {
  &--fixed {
    width: 100%;
    position: fixed;
    bottom: 0;
    right: 10%;
    z-index: 50;
  }

  &__link {
    width: 42px;
    height: 42px;
    opacity: 0;
    -webkit-transition: 0.5s;
    transition: 0.5s;
    position: absolute;
    left: 100%;
    bottom: 0;
    border: 1px solid #333;
    background: #fff;
  }
}

footer {
  margin-top: 2rem;
  background: $color-dark;
  color: $color-light;
  text-align: center;
  padding: 1rem;
}
</style>
