import { ref, computed } from 'vue'
export default function useShortcut(props, groupRef) {
  const scrollRef = ref(null)
  const touchs = {}
  const SHORTCUT_HEIGHT = 18

  const shortcutList = computed(() => {
    return props.data.map(item => {
      return item.title
    })
  })

  function onTouchStart(e) {
    touchs.y1 = e.touches[0].pageY
    const touchIndex = parseInt(e.target.dataset.index)
    touchs.touchIndex = touchIndex
    scrollTo(touchIndex)
  }

  function onTouchMove(e) {
    touchs.y2 = e.touches[0].pageY
    const a = ((touchs.y2 - touchs.y1) / SHORTCUT_HEIGHT | 0) + touchs.touchIndex
    scrollTo(a)
  }

  function scrollTo(index) {
    if (isNaN(index)) {
      return
    }
    index = Math.max(0, Math.min(shortcutList.value.length - 1, index))
    const targetEl = groupRef.value.children[index]
    scrollRef.value.scroll.scrollToElement(targetEl, 0)
  }

  return {
    shortcutList,
    scrollRef,
    onTouchStart,
    onTouchMove
  }
}
