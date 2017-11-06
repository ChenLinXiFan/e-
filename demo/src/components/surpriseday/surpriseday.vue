<template>
  <div>
    <div class="surpriseday_wrap">
      <div class="surprise">
        <div class="suprice_icon">
          <a href="javascript:;">
            <img src="./suprice.png" alt="">
          </a>
        </div>
        <div class="suprice_title">{{surprise.title}}</div>
        <div class="suprice_daytime">
          <span>00</span>
          <span>:</span>
          <span>00</span>
          <span>:</span>
          <span>00</span>
        </div>
        <div class="more_icon">
          <a href="javascript:;">
            <img :src="moreicon.image" alt="">
          </a>
        </div>
      </div>
      <div class="surprisegoods">
        <ul class="list">
          <li v-for="(item,index) in goods" :key="index">
            <div>
              <a href="javascript:;">
                <img :src="item.image.image" alt="">
              </a>
            </div>
            <div>
              <span>¥</span>
              <span>{{item.sale_price}}</span>
            </div>
            <p>{{item.little_price}}</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  export default{
    data (){
      return {
        surprise: {},
        goods: {},
        moreicon: {}
      }
    },
    mounted (){
      axios.get('./api/surpriseday')
        .then(response => {
          const result = response.data
          if(result.code === 0){
            this.surprise = result.data.surprise
            this.moreicon = this.surprise.right_image
            this.goods = this.surprise.goods
            console.log(this.goods)
          }
        })
    }
  }
</script>

<style lang="less" rel="stylesheet/less">
  @rem: 46.8rem;
  .surpriseday_wrap{
    width: 100%;
    .surprise{
      width: 750/@rem;
      height: 120/@rem;
      padding: 20/@rem;
      box-sizing: border-box;
      display: flex;
      .suprice_icon{
        width: 219/@rem;
        height: 50/@rem;
        img{
          width: 100%;
          height: 100%;
        }
      }
      .suprice_title{
        width: 130/@rem;
        height: 40/@rem;
        font-size: 26/@rem;
        margin-top: 2/@rem;
        margin-left: 20/@rem;
      }
      .suprice_daytime{
        width: 165/@rem;
        height: 80/@rem;
        font-size: 28/@rem;
        margin-top: 4/@rem;
        margin-left: 40/@rem;
        span{
          &:nth-child(odd){
            display: inline-block;
            width: 42/@rem;
            height: 42/@rem;
            border: 2/@rem solid #ddd;
            padding: 2/@rem 4/@rem;
            font-size: 26/@rem;
            margin-left: 10/@rem;
          }
          &:nth-child(even){
            font-size: 24/@rem;
            margin: 6/@rem 0 6/@rem 6/@rem;
          }
        }
      }
      .more_icon{
        width: 135/@rem;
        height: 80/@rem;
        margin-top: -20/@rem;
        margin-left: 50/@rem;
        img{
          width: 100%;
          height: 100%;
        }
      }
    }
    .surprisegoods{
      position: relative;
      padding-left: 10/@rem;
      margin-bottom: 20/@rem;
      width: 100%;
      height: 260/@rem;
      .list{
        position: absolute;
        white-space: nowrap;
        font-size: 0;
        height: 100%;
        display: flex;
        li{
          display: inline-block;
          width: 165/@rem;
          height: 260/@rem;
          margin-right: 20/@rem;
          div{
            &:nth-child(1){
              img{
                width: 165/@rem;
                height: 165/@rem;
              }
            }
            &:nth-child(2){
              width: 165/@rem;
              height: 45/@rem;
              text-align: center ;
              line-height: 45/@rem;
              font-size: 28/@rem;
              color: red;
            }
          }
          p{
            width: 165/@rem;
            height: 40/@rem;
            font-size: 24/@rem;
            color: #999;
            text-align: center;
            line-height: 40/@rem;
          }
        }
      }
    }
  }

</style>
