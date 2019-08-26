import ISliderComponent from './Slider.vue'
import IInfoComponent from './Info.vue'
import ICoverComponent from './Cover.vue'
import IModalComponent from './Modal.vue'
import INavMenuComponent from './NavMenu.vue'
import IBreadcrumbComponent from './Breadcrumb.vue'

/// TODO: code refactoring

// const VueISimple = {}

const VueISimple_ComponentList = [
  ISliderComponent,
  IInfoComponent,
  ICoverComponent,
  IModalComponent,
  INavMenuComponent,
  IBreadcrumbComponent,
]

const install = function(Vue, globalOptions) {
  if (globalOptions) {
    // SwiperComponent.props.globalOptions.default = () => globalOptions
  }
  for (let iComponent of VueISimple_ComponentList) {
    Vue.component(iComponent.name, iComponent)
  }
}

// Object.assign(VueISimple, { install })

export default install
export {
  ISliderComponent,
  IInfoComponent,
  ICoverComponent,
  IModalComponent,
  INavMenuComponent,
  IBreadcrumbComponent,
  install,
}
