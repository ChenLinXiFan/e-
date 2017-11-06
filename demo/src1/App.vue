<template>
  <div>
    <ele-header></ele-header>
    <mainContent></mainContent>
    <ele-footer></ele-footer>
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
      'mainContent':mainContent,
      'ele-footer':footer
    }

  }
</script>

<style lang="less" rel="stylesheet/less">


</style>
