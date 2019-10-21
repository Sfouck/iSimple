<template>
  <nav>
    <ul class="nav-menu" ref="navMenu">
      <li class="nav-menu__item" v-for="(item, index) in links" :key="index">
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
  props: ['links', 'open'],
  // data() {
  //   return {
  //     routeToHome: { name: 'home', path: '/' },
  //   }
  // },
  watch: {
    open(isOpen) {
      let menu = this.$refs.navMenu
      if (isOpen === true) {
        menu.classList.add('nav-menu--opened')
      } else {
        menu.classList.remove('nav-menu--opened')
      }
    },
  },
}
</script>

<style lang="scss" scoped>
nav {
  position: relative;
}

.nav-menu {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  align-items: center;
  height: 100%;
  > li {
    list-style: none;
    > a {
      color: $color-dark;
      text-decoration: none;
      font-weight: bold;
      font-size: 1.5rem;
      transition: 0.3s;
      &:hover {
        color: $color-light;
        background: $color-dark;
      }
    }
  }
  @include for-mobile {
    flex-flow: column wrap;
    background-color: lighten($color-light, 1);
    transition: all 0.3s;
    transform: translateY(-100%);
    &--opened {
      transform: translateY(0%);
    }
  }
}

// @media screen and (max-width: 768px) {
//   // nav {
//   //   min-height: 50px;
//   // }

//   .nav-menu {
//     flex-flow: column wrap;
//     background-color: lighten($color-light, 1);
//     transition: all 0.3s;
//     transform: translateY(-100%);
//     &--opened {
//       transform: translateY(0%);
//     }
//   }
// }
</style>
