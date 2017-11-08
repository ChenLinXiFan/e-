<template>
  <div>
    <div class="columnnav_wrap">
      <div class="navs">
        <ul class="list">
          <li v-for="(nav,index) in navscolumn" :key="index">
            <a href="javascript:;">
              <img :src="nav.image" alt="">
            </a>
          </li>
        </ul>
      </div>
      <div class="saletitle" >
        <a href="javascript:;">
          <img :src="saletitle.image" alt="">
        </a>
      </div>
      <div class="saleitem" >
        <a href="javascript:;">
          <img :src="saleitem.image" alt="">
        </a>
      </div>
    </div>
  </div>
</template>

<script>
  export default{
    props:["navscolumn","saletitle","saleitem"]
  }
</script>

<style lang="less" rel="stylesheet/less">
  @rem: 46.8rem;
  .columnnav_wrap{
    width: 100%;
    .navs{
      width: 750/@rem;
      height: 350/@rem;
      .list{
        width: 100%;
        height: 100%;
        display: flex;
        flex-wrap: wrap;
        li{
          width: 187/@rem;
          height: 175/@rem;
          img{
            width: 100%;
            height: 100%;
          }
        }
      }
    }
    .saletitle{
      width: 750/@rem;
      height: 100/@rem;
      img{
        width: 100%;
        height: 100%;
      }
    }
    .saleitem{
      width: 750/@rem;
      height: 301/@rem;
      img{
        width: 100%;
        height: 100%;
      }
    }
  }

</style>
