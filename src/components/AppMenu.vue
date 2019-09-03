<template>
  <div class="menu-wrap">
    <input type="checkbox" class="toggler" />
    <div class="hamburger"><div></div></div>
    <div class="app__menu">
      <div>
        <nav>
          <ul>
            <li v-for="(item, index) in nav_link" :key="index">
              <router-link :to="item.route">
                {{ item.title }}
              </router-link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app-menu',
  data() {
    return {
      nav_link: [
        // { name: 'Home', path: '/' },
        // { name: 'CssGrid', path: '/css-grid' },
        // { name: 'GridWeb', path: '/grid-web' },
        // { name: 'iSimple', path: '/isimple' },

        { title: 'Home', route: { name: 'home', path: '/' } },
        { title: 'About', route: { name: 'about', path: '/about' } },
        { title: 'Works', route: { name: 'works', path: '/works' } },
        { title: 'Projects', route: { name: 'projects', path: '/projects' } },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
$menu--primay-color: rgba(13, 110, 139, 0.75);
$menu--overlay-color: rgba(13, 110, 139, 0.75);
$menu--speed: 0.75s;

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.menu-wrap {
  position: fixed;
  top: 50%;
  left: 0;
  z-index: 9997;
  .toggler {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
    cursor: pointer;
    width: 50px;
    height: 50px;
    opacity: 0;
  }
  .hamburger {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    width: 60px;
    height: 60px;
    padding: 1rem;
    background: $menu--primay-color;
    display: flex;
    align-items: center;
    justify-content: center;

    /* Hamburger line Start*/
    > div {
      position: relative;
      width: 100%;
      height: 2px;
      background-color: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.4s ease;
      &:before,
      &:after {
        content: '';
        position: absolute;
        z-index: 1;
        top: -10px;
        width: 100%;
        height: 2px;
        background: inherit;
      }
      &:after {
        top: 10px;
      }
    }
    /* Hamburger line End*/
  }

  .toggler {
    &:checked {
      // Toggler animate
      + .hamburger > div {
        transform: rotate(135deg);
        //Turn lines into X
        &:before,
        &:after {
          top: 0;
          transform: rotate(90deg);
        }
      }

      // Rotate on hover when checked
      &:hover + .hamburger > div {
        transform: rotate(225deg);
      }

      // Show menu
      ~ .app__menu {
        visibility: visible;
        > div {
          transform: scale(1);
          transition-duration: $menu--speed;
          > nav {
            opacity: 1;
            transition: opacity 0, 4s ease;
          }
        }
      }
    }
  }

  .app__menu {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    visibility: hidden;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    > div {
      background: $menu--overlay-color;
      border-radius: 50%;
      width: 200vw;
      height: 200vh;
      display: flex;
      flex: none;
      align-items: center;
      justify-content: center;
      transform: scale(0);
      transition: all 0.4s ease;
      > nav {
        text-align: center;
        max-width: 90vw;
        max-height: 100vh;
        opacity: 0;
        transition: opacity 0.4s ease;
        > ul > li {
          list-style-type: none;
          color: #fff;
          font-size: 1.5rem;
          padding: 1rem;
          > a {
            color: inherit;
            text-decoration: none;
            transition: color 0.4s ease;
          }
        }
      }
    }
  }
}
</style>
