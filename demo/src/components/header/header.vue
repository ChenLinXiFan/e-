<template>
  <div class="header">
    <div class="wrap">
      <div class="topWrap">
        <div class="search">
          <div class="search1">
            <a href="jiavscript:;">
              <span>狗狗站</span>
              <span>|</span>
              <span>重庆</span>
              <i></i>
            </a>
          </div>
          <p class="search2">
            <a href="javascript:;">
              <input type="search" placeholder="搜索商品和品牌">
              <span></span>
            </a>
          </p>
          <a href="javascript:;" class="search3">
            <img src="./mydope.png" alt="" >
          </a>
        </div>
      </div>
      <div class="navs">
        <ul class="list">
          <li>
            <a href="javascript:;">
              <span>
                <span>首页</span>
                <i></i>
              </span>
            </a>
          </li>
          <li>
            <a href="javascript">
              <span>服饰城</span>
            </a>
          </li>
          <li>
            <a href="javascript">
              <span>狗狗主粮</span>
            </a>
          </li>
          <li>
            <a href="javascript">
              <span>医疗保健</span>
            </a>
          </li>
          <li>
            <a href="javascript">
              <span>零食玩具</span>
            </a>
          </li>
          <li>
            <a href="javascript">
              <span>日用外出</span>
            </a>
          </li>
          <li>
            <a href="javascript">
              <span>美容香波</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>

</template>

<script>
  export default{

  }
</script>

<style lang="less" rel="stylesheet/less">
  @import '../../common/minins';
  @rem: 23.4rem;
  .header{
    width: 100%;
    .wrap{
      width: 100%;
      height: 86/@rem;
      .topWrap{
        width: 100%;
        padding: 5/@rem 10/@rem;
        box-sizing: border-box;
        .search{
          display: flex;
          width: 100%;
          padding: 8/@rem 0;
          background: #fff;

          .clearfix();
          .search1{
            color: #898989;
            position: relative;
            text-align: center;
            width: 80/@rem;
            margin-right: 20/@rem;
            a{
              display: inline-block;
              &:nth-child(1){font-size: 14/@rem;}
              &:nth-child(1){font-size: 14/@rem;}
              &:nth-child(1){font-size: 13/@rem;}
              i{
                position: absolute;
                right: -11/@rem;
                top: 13/@rem;
                border-width: 4/@rem;
                border-style: solid solid dotted;
                border-color: #898989 transparent transparent;
              }
            }

          }
          .search2{
            position: relative;
            input{
              width: 219/@rem;
              height: 25/@rem;
              background: #e9e9e9;
              border-radius: 4/@rem;
              color: #bcbcbc;
              outline: 0;
              text-indent: 10/@rem;
              font-size: 13/@rem;
              vertical-align: middle;
            }
            span{
              position: absolute;
              right: 5/@rem;
              top: 0;
              bottom: 0;
              margin: auto 0;
              width: 11/@rem;
              height: 11/@rem;
              background: url("./search.png") no-repeat;
              background-size: 100% 100%;
            }
          }
          .search3{
            img{
              width: 25/@rem;
              height: 25/@rem;
              margin-left: 10/@rem;
              vertical-align: middle;
            }
          }
        }
      }
      .navs{
        width: 100%;
        .list{
          display: flex;
          white-space: nowrap;
          width: 140%;
          li{
            width: 20%;
            a{
              display: block;
              width: 100%;
              height: 100%;
              line-height: 36/@rem;
              text-align: center;
              font-size: 14/@rem;
              color: #666;
            }
            &:nth-of-type(1){
              span{
                display: inline-block;
                color: #459d36;
                position: relative;
                i{
                  position: absolute;
                  bottom: 1/@rem;
                  left: -10%;
                  width: 120%;
                  height: 2/@rem;
                  background: #459d36;
                }
              }
            }
          }
        }

      }
    }
  }

</style>
