<template>
  <div class="loading">
    <div class="loading-content">
      <img width="24" height="24" src="./loading.gif">
      <p>{{title}}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: '正在加载...'
    }
  },
  methods: {
    setTitle(title) {
      this.title = title
    }
  }
}
</script>

<style lang="scss" scoped>
  .loading{
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%);
    .loading-content{
      text-align: center;
      p{
        line-height: 20px;
        font-size: $font-size-large;
        color: $color-text-ll;
      }
    }
  }
</style>
