<template>
  <div>
    <div class="etpt_wrap">
      <ele-header></ele-header>
      <mainContent></mainContent>
      <ele-footer></ele-footer>

      <router-view></router-view>
    </div>

  </div>

</template>

<script>
  import header from './components/header/header.vue'
  import mainContent from './components/mainContent/mainContent.vue'
  import footer from './components/footer/footer.vue'
  export default{
// 配置组件
    components: {
      'ele-header': header,
      'mainContent': mainContent,
      'ele-footer': footer
    }

  }
</script>

<style lang="less" rel="stylesheet/less">
  @rem: 46.8rem;
  .etpt_wrap{
    position: relative;
    width: 750/@rem;
  }

</style>
