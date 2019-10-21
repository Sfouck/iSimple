<template>
  <transition
    name="modal"
    appear
    appear-class="modal-enter"
    appear-active-class="modal-enter-active"
    appear-to-class="modal-enter-to"
  >
    <div class="modal-mask" @click="onModalMaskClick">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="modal-header">
            <h1>訂閱電子報</h1>
          </div>

          <div class="modal-body">
            <form class="email-form">
              <div class="email-form__input-box input-box">
                <label class="input-box__label" for="email">E-MAIL</label>
                <input
                  class="input-box__input"
                  type="email"
                  name="email"
                  maxlength="60"
                />
              </div>
              <a
                @click="onEmailFormSubmitClick"
                class="email-form__btn-submit btn-submit"
              >
                <p>送出</p>
              </a>
            </form>
          </div>

          <div class="modal-footer">
            <slot name="footer"></slot>
          </div>
        </div>
        <a class="modal-btn-close" @click="$emit('close')"></a>
        <!-- <a class="modal-btn-close" @click="onButtonCloseClick"></a> -->
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'IModal',
  methods: {
    onModalMaskClick(e) {
      console.log('test', e)
    },
    onEmailFormSubmitClick(e) {
      console.log('onEmailFormSubmitClick', e)
    },
    onButtonCloseClick(e) {
      console.log('onButtonCloseClick', e)
    },
  },
}
</script>

<style lang="scss" scoped>
$modal-font-color: #6d6c6c;
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  right: 0;
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
  height: 100vh;
  // transform-origin: center;
}

.modal-wrapper {
  position: relative;
  width: 70vh;
  height: 70vh;
  border-radius: 100%;
  background-color: rgba(255, 255, 255, 0.6);
  box-shadow: 0px 0px 8px 1px rgba(104, 104, 104, 0.6);
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
}

.modal-container {
  display: table;
  margin: 0 auto;
  text-shadow: 0px 0px 1px lighten($modal-font-color, 20);
  color: $modal-font-color;
}

.modal-header {
  > h1 {
    font-size: 3rem;
    margin: 0;
  }
}

.modal-body {
  .email-form {
    &__btn-submit {
      float: right;

      font-size: 1.1rem;
      line-height: 2rem;

      font-weight: bold;
      cursor: pointer;
      > p {
        transition: all 0.3s;
        &::after {
          content: '';
          width: 0px;
          height: 0px;
          display: inline-block;
          // border-width: 6px 0px 6px 10px;
          border-width: 0.47rem 0px 0.47rem 0.77rem;
          border-style: solid;
          border-color: transparent $modal-font-color;
          margin-left: 0.4rem;
          transition: inherit;
          // vertical-align: middle;
        }
        @include for-desktop {
          &:hover {
            text-shadow: 2px 2px 3px lighten($modal-font-color, 50);
            &::after {
              margin-left: 0.8rem;
              margin-right: -0.4rem;
            }
          }
        }
      }
    }
  }
  .input-box {
    // font-size: 1.5em;
    &__label {
      display: block;

      font-size: 2rem;
      font-weight: bold;

      margin-bottom: 0.5rem;
    }
    &__input {
      width: 100%;
      line-height: 2rem;
      background-color: transparent !important;
      border-top-left-radius: 3px;
      border-top-right-radius: 3px;
      border-bottom-color: $modal-font-color;
      border-width: 0 0 3px 0;
      box-shadow: 0px 1px 0px lighten($modal-font-color, 20);
      color: darken($modal-font-color, 20) !important;
      transition: all 0.3s ease;
      &:focus {
        background-color: white !important;
      }
    }
  }
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
  // transform: scaleY(0);
}

.modal-enter-to,
.modal-leave {
  opacity: 1;
}

.modal-enter-active,
.modal-leave-active {
  transition: all 0.6s ease-in-out;
}

.modal-btn-close {
  width: 64px;
  height: 64px;
  cursor: pointer;
  transition: 0.6s;
  position: absolute;
  top: 10%;
  left: 80%;

  border: 2px solid $modal-font-color;
  border-radius: 100%;
  &::before,
  &::after {
    content: '';
    width: 70%;
    height: 3px;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    margin: auto;
    background-color: $modal-font-color;
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
</style>
