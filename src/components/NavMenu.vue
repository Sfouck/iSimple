<template>
  <nav class="nav-menu nav-menu__list" ref="navMenu">
    <template v-for="(item, index) in links">
      <router-link
        class="nav-menu__item"
        :to="item.route"
        :key="index"
        @click="onLinkClicked"
      >
        {{ item.title }}
      </router-link>
    </template>
  </nav>
</template>

<script>
export default {
  name: 'NavMenu',
  props: ['links', 'open'],
  watch: {
    open(isOpen) {
      // let menu = this.$refs.navMenu
      if (isOpen === true) {
        this.openNavMenu()
      } else {
        this.closeNavMenu()
      }
    },
  },
  methods: {
    onLinkClicked() {
      this.closeNavMenu()
    },
    closeNavMenu() {
      // menu.classList.remove('nav--opened')
      this.$refs.navMenu.classList.remove('nav-menu--opened')
    },
    openNavMenu() {
      // menu.classList.add('nav--opened')
      this.$refs.navMenu.classList.add('nav-menu--opened')
    },
  },
}
</script>

<style lang="scss" scoped>
.nav-menu {
  transform: translateY(-150%);
  transition: transform ease-in-out 0.5s;

  @include for-desktop {
    transform: translateY(0%);
    transition: none;
  }

  &--opened {
    transform: translateY(0%);
  }

  &__list {
    display: flex;
    background-color: lighten($color-light, 1);
    align-items: center;
    height: 100%;
    justify-content: space-around;

    flex-flow: column wrap;
    @include for-desktop {
      flex-flow: row wrap;
    }
  }

  &__item {
    color: $color-dark;
    text-decoration: none;
    font-weight: bold;
    font-size: 1.5rem;
    transition: color linear 0.3s;

    @include for-desktop {
      transition: transform ease-in-out 0.3s;
      border-radius: 0.25rem;
      border: 1px black solid;

      padding: 0.25rem 1rem;

      &:hover {
        color: $color-light;

        background-color: $color-dark;
        transform: translateY(-10%);
      }
    }
  }
}
</style>
