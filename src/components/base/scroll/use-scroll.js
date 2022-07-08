import BScroll from '@better-scroll/core'
import ObserveDOM from '@better-scroll/observe-dom'

import { onMounted, onUnmounted, ref } from 'vue'

BScroll.use(ObserveDOM)

export default function useScroll(wrapperRef, options) {
  const scroll = ref(null)

  onMounted(() => {
    scroll.value = BScroll(wrapperRef.value, {
      observeDOM: true, // 开启 observe-dom 插件
      ...options
    })
    console.log('scroll.value', scroll.value)
  })

  onUnmounted(() => {
    scroll.value.destroy()
  })
}
