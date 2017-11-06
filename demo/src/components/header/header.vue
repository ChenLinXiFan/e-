<template>
  <div>
    <div class="header_wrap">
      <div class="header">
        <div class="search">
          <div class="dogzone">
            <a href="jiavscript:;">
              <span>狗狗站</span>
              <span>|</span>
              <span>重庆</span>
              <i></i>
            </a>
          </div>
          <p class="search_text">
            <a href="javascript:;">
              <input type="search" placeholder="搜索商品和品牌">
              <span class="search_icon"></span>
            </a>
          </p>
          <a href="javascript:;" class="search_msg">
            <img src="./mydope.png" alt="" >
          </a>
        </div>
      </div>
      <div class="columnMenu" ref="columnMenu">
        <ul class="list">
          <li v-for="item in menus" >
            <a href="javascript:;">
              <span>
                <span>{{item.menu_name}}</span>
                <i></i>
              </span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import BScroll from 'better-scroll'
  export default{
    data(){
      return{
        menus:[]
      }
    },
    mounted(){
      axios.get('/api/menus')
        .then(response => {
          const result = response.data
          if (result.code === 0){
            this.menus = result.data // 后面会异步更新界面

            // 将回调延迟到下次 DOM 更新循环之后执行
            this.$nextTick(() => {
              this._initScroll()
            })
          }
        })
    },
    methods: {
      _initScroll(){
        new BScroll(this.$refs.columnMenu, {
          scrollX:true,
          click: true //触发点击
        })
      }
    }

  }
</script>

<style lang="less" rel="stylesheet/less">
  @rem: 46.8rem;
  .header_wrap{
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
    width: 100%;
    height: 172/@rem;
    background: #fff;
    .header{
      width: 100%;
      height: 102/@rem;
      box-sizing: border-box;
      padding: 10/@rem 20/@rem;
      .search {
        width: 100%;
        height: 100%;
        padding: 16/@rem 0;
        box-sizing: border-box;
        display: flex;
        .dogzone {
          position: relative;
          color: #898989;
          text-align: center;
          width: 160/@rem;
          margin-right: 40/@rem;
          a {
            display: inline-block;
            &:nth-child(1) {
              font-size: 28/@rem;
            }
            &:nth-child(1) {
              font-size: 28/@rem;
            }
            &:nth-child(1) {
              font-size: 26/@rem;
            }
            i {
              position: absolute;
              right: -22/@rem;
              top: 26/@rem;
              border-width: 8/@rem;
              border-style: solid solid dotted;
              border-color: #898989 transparent transparent;
            }
          }

        }
        .search_text{
          position: relative;
          input{
            width: 440/@rem;
            height: 50/@rem;
            background: #e9e9e9;
            border-radius: 8/@rem;
            color: #bcbcbc;
            outline: 0;
            text-indent: 20/@rem;
            font-size: 26/@rem;
            vertical-align: middle;
          }
          .search_icon{
            position: absolute;
            right: 10/@rem;
            top: 0;
            bottom: 0;
            margin: auto 0;
            width: 24/@rem;
            height: 23/@rem;
            background: url("./search.png") no-repeat;
            background-size: 100% 100%;
          }
        }
        .search_msg{
          img{
            width: 48/@rem;
            height: 48/@rem;
            margin-left: 20/@rem;
            vertical-align: middle;
          }
        }

      }
    }
    .columnMenu{
      position: relative;
      width: 100%;
      height: 70/@rem;
      .list{
        position: absolute;
        display: flex;
        white-space: nowrap;
        font-size: 0;
        li{
          display: inline-block;
          width: 150/@rem;
          font-size: 28/@rem;
          line-height: 70/@rem;
          text-align: center;
          color: #666;
          &:nth-of-type(1){
            span{
              display: inline-block;
              color: #459d36;
              position: relative;
              i{
                position: absolute;
                bottom: 2/@rem;
                left: -10%;
                width: 120%;
                height: 4/@rem;
                background: #459d36;
              }
            }
          }
        }
      }
    }
  }


</style>
