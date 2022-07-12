import { ref, watch, nextTick, computed } from 'vue'
export default function useFixed(props) {
  const TITLE_HEIGHT = 30
  const groupRef = ref(null)
  const listHieghts = ref([])
  const scrollY = ref(0)
  const currentIndex = ref(0)
  const distance = ref(null)

  const fixedTitle = computed(() => {
    if (scrollY.value < 0) {
      return ''
    }
    const currnetGroup = props.data[currentIndex.value]
    return currnetGroup ? currnetGroup.title : ''
  })

  const fixedStyle = computed(() => {
    // 当distance距离顶部小于TITLE_HEIGHT 做动画偏移
    const distanceVal = distance.value
    const diff = (distanceVal > 0 && distanceVal < TITLE_HEIGHT) ? distanceVal - TITLE_HEIGHT : 0
    return {
      transform: `translate3d(0, ${diff}px, 0)`
    }
  })

  watch(() => props.data, async () => {
    await nextTick()
    calculate()
  })

  watch(scrollY, (newy) => {
    const listHieghtsVal = listHieghts.value
    for (let i = 0; i < listHieghtsVal.length - 1; i++) {
      const listHieghtsTop = listHieghtsVal[i]
      const listHieghtsBottom = listHieghtsVal[i + 1]
      if (newy >= listHieghtsTop && newy <= listHieghtsBottom) {
        currentIndex.value = i
        // 获取listHieghtsBottom 距离 顶部高度
        distance.value = listHieghtsBottom - newy
      }
    }
  })

  function onScroll(pos) {
    scrollY.value = -pos.y
  }

  // 计算歌手列表高度区间
  function calculate() {
    const list = groupRef.value.children
    let height = 0
    listHieghts.value.length = 0
    listHieghts.value.push(height)

    for (let i = 0; i < list.length; i++) {
      height += list[i].clientHeight
      listHieghts.value.push(height)
    }
  }

  return {
    groupRef,
    onScroll,
    fixedTitle,
    fixedStyle,
    currentIndex
  }
}
