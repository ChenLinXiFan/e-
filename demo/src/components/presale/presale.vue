<template>
  <div>
    <div class="presale_wrap">
      <div class="presale">
        <div class="preselltitle">
          <img :src="preselltitle.image" alt="">
        </div>
        <div class="presellitem">
          <ul class="list">
            <li v-for="(presell,index) in presellitem" :key="index">
              <a href="javascript:;">
                <img :src="presell.image" alt="">
              </a>
            </li>
          </ul>
        </div>
        <div class="saymonday">
          <a href="javascript:;">
            <img :src="saymonday.image" alt="">
          </a>
        </div>
        <div class="wantbuytitle">
          <a href="javascript:;">
            <img :src="wantbuytitle.image" alt="">
          </a>
        </div>
        <div class="abroad wantbuyitem">
          <ul class="list1">
            <li>
              <a href="javascript:;" v-for="(abroad1,index) in abroadlist1[0]" :key="index">
                <img :src="abroad1.image" alt="">
              </a>
            </li>
            <li>
              <a href="javascript:;" v-for="(abroad2,index) in abroadlist1[1]" :key="index">
                <img :src="abroad2.image" alt="">
              </a>
            </li>
            <li>
              <a href="javascript:;" v-for="(abroad3,index) in abroadlist1[2]" :key="index">
                <img :src="abroad3.image" alt="">
              </a>
            </li>
            <li>
              <a href="javascript:;" v-for="(abroad4,index) in abroadlist1[3]" :key="index">
                <img :src="abroad4.image" alt="">
              </a>
            </li>
          </ul>
          <ul class="list2">
            <li v-for="(abroad5,index) in abroadlist2" :key="index">
              <a href="javascript:;">
                <img :src="abroad5.image" alt="">
              </a>
            </li>
          </ul>
        </div>
        <div class="home wantbuyitem">
          <ul class="list1">
            <li>
              <a href="javascript:;" v-for="(home1,index) in homelist1[0]" :key="index">
                <img :src="home1.image" alt="">
              </a>
            </li>
            <li>
              <a href="javascript:;" v-for="(home2,index) in homelist1[1]" :key="index">
                <img :src="home2.image" alt="">
              </a>
            </li>
            <li>
              <a href="javascript:;" v-for="(home3,index) in homelist1[2]" :key="index">
                <img :src="home3.image" alt="">
              </a>
            </li>
            <li>
              <a href="javascript:;" v-for="(home4,index) in homelist1[3]" :key="index">
                <img :src="home4.image" alt="">
              </a>
            </li>
          </ul>
          <ul class="list2">
            <li v-for="(home5,index) in homelist2" :key="index">
              <a href="javascript:;">
                <img :src="home5.image" alt="">
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default{
    props: [
      "preselltitle",
      "presellitem",
      "saymonday",
      "wantbuytitle",
      "abroadlist1",
      "abroadlist2",
      "homelist1",
      "homelist2"
    ]
  }
</script>

<style lang="less" rel="stylesheet/less">
  @rem: 46.8rem;
  .presale_wrap{
    width: 100%;
    .presale{
      width: 100%;
      .preselltitle{
        width: 750/@rem;
        height: 125/@rem;
        img{
          width: 100%;
          height: 100%;
        }
      }
      .presellitem{
        width: 100%;
        .list{
          width: 100%;
          li{
            width: 750/@rem;
            height: 601/@rem;
            img{
              width: 100%;
              height: 100%;
            }
          }
        }
      }
      .saymonday{
        width: 750/@rem;
        height: 281/@rem;
        img{
          width: 100%;
          height: 100%;
        }
      }
      .wantbuytitle{
        width: 750/@rem;
        height: 109/@rem;
        img{
          width: 100%;
          height: 100%;
        }
      }
      .abroad{
        width: 750/@rem;
        height: 579/@rem;
        .list1{
          height: 418/@rem;
          li{
            float: left;
            width: 187/@rem;
            height: 418/@rem;
            font-size: 0;
            img{
              width: 100%;
              height: 50%;
            }
            &:nth-of-type(4){
              img{
                width: 100%;
                height: 100%;
              }
            }
          }
        }
        .list2{
          width: 100%;
          height: 161/@rem;
          li{
            float: left;
            width: 375/@rem;
            height: 100%;
            img{
              width: 100%;
              height: 100%;
            }
          }
        }
      }
      .home{
        width: 750/@rem;
        height: 577/@rem;
        .list1{
          height: 426/@rem;
          li{
            float: left;
            width: 187/@rem;
            height: 426/@rem;
            font-size: 0;
            img{
              width: 100%;
              height: 50%;
            }
            &:nth-of-type(4){
              img{
                width: 100%;
                height: 100%;
              }
            }
          }
        }
        .list2{
          width: 100%;
          height: 159/@rem;
          li{
            float: left;
            width: 375/@rem;
            height: 100%;
            img{
              width: 100%;
              height: 100%;
            }
          }
        }
      }

    }

  }

</style>
