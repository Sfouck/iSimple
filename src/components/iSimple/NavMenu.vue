<template>
  <nav>
    <ul class="nav__menu">
      <li class="nav__menu-item" v-for="(item, index) in links" :key="index">
        <router-link :to="item.route">
          {{ item.title }}
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'NavMenu',
  props: ['links'],
  // data() {
  //   return {
  //     routeToHome: { name: 'home', path: '/' },
  //   }
  // },
}
</script>

<style lang="scss" scoped>
nav {
  position: relative;
  .nav__menu {
    display: flex;
    // flex: auto;
    flex-flow: row wrap;
    justify-content: space-around;
    align-items: center;
    // padding: 0 5vw;
    height: 100%;
    > li {
      list-style: none;
      > a {
        color: $color-dark;
        text-decoration: none;
        font-weight: bold;
        font-size: 1.5rem;
        transition: 0.6s;
        &:hover {
          color: $color-light;
          background: $color-dark;
        }
      }
    }
  }

  // .nav__option {
  //   display: none;
  //   background: #aa9;
  //   // order: 1;
  //   .nav__hamburger {
  //     @include btn-hamburger(50px, 50px, #000);
  //   }
  // }
}

@media screen and (max-width: 768px) {
  nav {
    justify-content: space-between;
    align-items: center;
    min-height: 50px;
    .nav__menu {
      display: none;
      // .{&}--opened {
      //   display: inline;
      // }
    }
    // .nav__option {
    //   display: flex;
    //   min-height: 50px;
    //   align-items: center;
    //   justify-content: center;
    //   // position: relative;
    //   // height: 100%;
    //   // position: absolute;
    //   // top: 1.5rem;
    //   // right: 1rem;
    // }
  }
}
</style>
