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
            <slot name="header">
              default header
            </slot>
          </div>

          <div class="modal-body">
            <slot name="body">
              default body
            </slot>
          </div>

          <div class="modal-footer">
            <slot name="footer">
              default footer
              <button class="modal-default-button" @click="$emit('close')">
                OK
              </button>
            </slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'IModal',
  // methods: {
  //   // --------
  //   // 进入中
  //   // --------

  //   beforeEnter: function(el) {
  //     console.log('beforeEnter')
  //     console.log(el)
  //     // ...
  //   },
  //   // 当与 CSS 结合使用时
  //   // 回调函数 done 是可选的
  //   enter: function(el, done) {
  //     console.log('enter')
  //     console.log(el)
  //     // ...
  //     done()
  //   },
  //   afterEnter: function(el) {
  //     console.log('afterEnter')
  //     console.log(el)
  //     // ...
  //   },
  //   enterCancelled: function(el) {
  //     console.log('enterCancelled')
  //     console.log(el)
  //     // ...
  //   },

  //   // --------
  //   // 离开时
  //   // --------

  //   beforeLeave: function(el) {
  //     console.log('beforeLeave')
  //     console.log(el)
  //     // ...
  //   },
  //   // 当与 CSS 结合使用时
  //   // 回调函数 done 是可选的
  //   leave: function(el, done) {
  //     console.log('leave')
  //     console.log(el)
  //     // ...
  //     done()
  //   },
  //   afterLeave: function(el) {
  //     console.log('afterLeave')
  //     console.log(el)
  //     // ...
  //   },
  //   // leaveCancelled 只用于 v-show 中
  //   leaveCancelled: function(el) {
  //     console.log('leaveCancelled')
  //     console.log(el)
  //     // ...
  //   },
  // },
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
  display: table;

  transform-origin: 100% 0;
  // transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 300px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  float: right;
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
  transform: scaleY(1);
}

.modal-enter-active,
.modal-leave-active {
  // transition-delay: 1s;
  transition: all 0.3s ease;
  // opacity: 0;
}

// .modal-enter-active .modal-container,
// .modal-leave-active .modal-container {
//   // -webkit-transform: scale(1.1);
//   // transform: scale(1.1);
//   // transition: all 0.3s ease;
// }
</style>
