<template>
  <div>
    <div class="specialcolumn_wrap">
      <div class="specialcolumn">
        <div class="specialtitle">
          <img :src="specialtitle.image" alt="">
        </div>
        <div class="specialitem">
          <ul class="list">
            <li v-for="(special,index) in specialitem" :key="index">
              <a href="javascript:;">
                <img :src="special.image" alt="">
              </a>
            </li>
          </ul>
        </div>
        <div class="videotitle">
          <img :src="videotitle.image" alt="">
        </div>
        <div class="videobox">
          <img src="./video.jpg" alt="">
        </div>
        <div class="footer">
          <div class="footertop">
        <span>
          <a href="javascript:;">触屏版</a>
        </span>
            <span>
          <a href="javascript:;">手机客户端</a>
        </span>
            <span>
          <a href="javascript:;">关于我们</a>
        </span>
            <span>
          <a href="javascript:;">联系我们</a>
        </span>
          </div>
          <div class="footerbottom">
            © wap.epet.com 版权：重庆易宠科技有限公司
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default{
    props:[
      "specialtitle",
      "specialitem",
      "videotitle",
      "video"
    ]
  }
</script>

<style lang="less" rel="stylesheet/less">
  @rem: 46.8rem;
  .specialcolumn_wrap{
    width: 100%;
    .specialcolumn{
      width: 100%;
      .specialtitle{
        width: 100%;
        height: 115/@rem;
        img{
          width: 100%;
          height: 100%;
        }
      }
      .specialitem{
        width: 100%;
        .list{
          width: 750/@rem;
          height: 594/@rem;
          li{
            float: left;
            width: 375/@rem;
            height: 198/@rem;
            font-size: 0;
            img{
              width: 100%;
              height: 100%;
            }
          }
        }
      }
      .videotitle{
        width: 750/@rem;
        height: 124/@rem;
        img{
          width: 100%;
          height: 100%;
        }
      }
      .videobox{
        width: 750/@rem;
        height: 470/@rem;
        img{
          width: 100%;
          height: 100%;
        }
      }
      .footer{
        width: 100%;
        height: 172/@rem;
        .footertop{
          width: 100%;
          padding: 30/@rem 0 10/@rem;
          font-size: 28/@rem;
          text-align: center;
          span{
            padding-right: 20/@rem;
            &:nth-of-type(1){
              color: red;
            }
          }
        }
        .footerbottom{
          margin: 20/@rem 20/@rem;
          font-size: 24/@rem;
          text-align: center;
          padding-bottom: 50/@rem;
        }
      }
    }
  }

</style>
