<template>
  <nav>
    <div class="logo-box">
      <img
        src="/img/logo.png"
        alt="Logo"
        class="logo-box__content"
        id="header__logo"
      />
    </div>
    <ul class="nav__menu">
      <div class="nav__option">
        nav__option
      </div>
      <li v-for="(item, index) in links" :key="index">
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
}
</script>

<style lang="scss" scoped>
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 10vh;
  min-height: 100px;
  .logo-box {
    background: lightskyblue;
    flex: initial;
    height: 100%;
    > img {
      height: 100%;
      min-height: 100px;
      margin: 0 auto;
      // width: 100%;
      object-fit: scale-down;
    }
  }
  .nav__menu {
    display: flex;
    flex: auto;
    justify-content: space-around;
    align-items: center;
    // width: 60%;
    height: 100%;
    background: rgb(165, 255, 213);
    > li {
      list-style: none;
      > a {
        color: $color-dark;
        text-decoration: none;
        font-weight: bold;
        font-size: 1.2rem;
      }
    }
    .nav__option {
      display: none;
      background: #aa9;
      order: 1;
    }
  }
}
</style>
