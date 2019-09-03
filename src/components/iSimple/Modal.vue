<template>
  <transition
    name="modal"
    appear
    appear-class="modal-enter"
    appear-active-class="modal-enter-active"
    appear-to-class="modal-enter-to"
  >
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="modal-header">
            <slot name="header"></slot>
          </div>

          <div class="modal-body">
            <slot name="body">
              default body
            </slot>
          </div>

          <div class="modal-footer">
            <slot name="footer"></slot>
          </div>

          <a class="modal-btn-close" @click="$emit('close')"></a>
        </div>
        <!-- <div class="modal-btn-container"> -->
        <!-- <a class="modal-btn-close" @click="$emit('close')"></a> -->
        <!-- </div> -->
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'IModal',
}
</script>

<style lang="scss" scoped>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  right: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  // text-align: center;
  // display: table;
  // padding-top: 20%;
  // position: relative;
  transform-origin: center top;
  // transition: opacity 0.3s ease;
}

.modal-wrapper {
  // display: table-cell;
  // vertical-align: middle;
  // position: relative;
  // position: absolute;
  // transform: translate(0, 50%);
  height: 100%;
  // top: 50%;
  // left: 50%;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
  // height: 100%;
  // transform: scaleY(50%);
  // width: 100%;
}

.modal-container {
  // width: 300px;
  max-width: 960px;
  width: 60%;
  position: relative;
  // height: 100%;
  // overflow: hidden;
  // margin: 0px auto;
  // padding: 20px 30px;
  // background-color: #fff;
  // border-radius: 2px;
  // box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  // transform-origin: 100% 0;
  // transition: all 1s ease;
  // font-family: Helvetica, Arial, sans-serif;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  // margin: 20px 0;
  width: 100%;
  // height: 100%;
  // padding-bottom: 56.25%; //16:9
  // position: relative;
  // height: 0;
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter,
.modal-leave-to {
  opacity: 0;
  // -webkit-transform: scale(1.1);
  // transform: scale(1.1);
  transform: scaleY(0);
}

.modal-enter-to,
.modal-leave {
  opacity: 1;
  // -webkit-transform: scaleY(1);
  // transform: scaleY(1);
}

.modal-enter-active,
.modal-leave-active {
  // transition-delay: 1s;
  transition: all 0.6s ease-in-out;
  // opacity: 0;
}

// .modal-enter .modal-container,
// .modal-leave-to .modal-container {
//   // -webkit-transform: scale(1.1);
//   // transform: scale(1.1);
//   // transform: scaleY(1);
//   // transform-origin: center center;
//   // transition: all 1.6s ease;
// }

// .modal-enter-active .modal-container,
// .modal-leave-active .modal-container {
//   // -webkit-transform: scale(1.1);
//   // transform: scale(1.1);
//   // transition: all 1.6s ease;/
//   // transform-origin: center center;
//   // opacity: 0;
// }

/*
  modal button for close
*/

// .modal-btn-container {
//   width: 64px;
//   height: 64px;
//   position: relative;
// }

.modal-btn-close {
  // width: 100%;
  // height: 100%;
  width: 64px;
  height: 64px;
  cursor: pointer;
  transition: 0.6s;
  // position: relative;
  position: absolute;
  top: 0;
  left: 100%;
  &::before,
  &::after {
    content: '';
    width: 60%;
    height: 2px;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    margin: auto;
    background: #fff;
  }
  &::before {
    transform: rotate(45deg);
  }
  &::after {
    transform: rotate(-45deg);
  }
  &:hover {
    transform: rotate(180deg);
  }
}

@media screen and (max-width: 1023.97px) {
  // .modal-wrapper {
  //   width: 100%;
  //   position: absolute;
  //   transform: translate(0, -50%);
  //   top: 50%;
  // }
  .modal-container {
    width: 100%;
  }
  .modal-btn-close {
    top: auto;
    left: auto;
    bottom: 100%;
    right: 0;
    &:hover {
      transform: rotate(180deg);
    }
  }
}
</style>
