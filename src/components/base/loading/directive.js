import { createApp } from 'vue'
import Loading from './loading.vue'
import { addClass, removeClass } from '@/assets/js/dom.js'

const relativeCls = 'g-relative'

const loadingDirective = {
  mounted(el, binding) {
    // 通过createapp 创建一个实例
    const app = createApp(Loading)
    // 添加渲染模板
    const instance = app.mount(document.createElement('div'))
    el.instance = instance
    console.log('binding', binding.arg, instance)
    const title = binding.arg
    if (typeof title !== 'undefined') {
      instance.setTitle(title)
     }
    // 初始化loading
    if (binding.value) {
      append(el)
    }
  },
  updated(el, binding) {
    const title = binding.arg
    if (typeof title !== 'undefined') {
      el.instance.setTitle(title)
     }
    if (binding.value !== binding.oldValue) {
      binding.value ? append(el) : remove(el)
    }
  }
}

function append(el) {
  const style = getComputedStyle(el)
  if (['absolute', 'fixed', 'relative'].indexOf(style.position) === -1) {
    addClass(el, relativeCls)
  }
  el.appendChild(el.instance.$el)
}

function remove(el) {
  removeClass(el, relativeCls)
  el.removeChild(el.instance.$el)
}

export default loadingDirective
