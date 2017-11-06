<template>
  <div>
    <div class="banner_wrap">
      <div class="banner_title" v-for="(title,index) in bannerTitle" :key="index">
        <img :src= "title.image" alt="">
      </div>
      <div class="banner_item">
        <mt-swipe :auto="4000">
          <mt-swipe-item v-for="(item,index) in bannerItems" :key="index">
            <a href="javascript:;">
              <img :src= "item.image" alt="">
            </a>
          </mt-swipe-item>
        </mt-swipe>
      </div>
      <div class="banner_bag" v-for="(bag,index) in bannerBag" :key="index">
        <img :src="bag.image" alt="">
      </div>
    </div>
  </div>

</template>

<script>

  export default{
    props: ["bannerTitle","bannerItems","bannerBag"]
  }
</script>

<style lang="less" rel="stylesheet/less">
  @rem: 46.8rem;
  .banner_wrap {
    width: 100%;
    .banner_title {
      width: 750/@rem;
      height: 100/@rem;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .banner_item {
      width: 750/@rem;
      height: 320/@rem;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .banner_bag {
      width: 750/@rem;
      height: 576/@rem;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
</style>
