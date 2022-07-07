<template>
  <m-header></m-header>
  <m-tab></m-tab>
  <router-view></router-view>
</template>

<script>
import Header from '@/components/header/header'
import tab from '@/components/tab/tab'

export default {
  components: {
    MHeader: Header,
    MTab: tab
  }
}
</script>
<style lang="scss">
</style>
