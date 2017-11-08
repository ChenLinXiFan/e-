<template>
  <div>
    <div class="surpriseitem_wrap">
      <div class="surpriseitem">
        <div class="header">
          <span></span>
          <span>每日疯抢</span>
          <span></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default{

  }
</script>

<style lang="less" rel="stylesheet/less">
  @rem: 46.8rem;
  .surpriseitem_wrap{
    position: fixed;
    top: 0;
    left: 0;
    z-index: 200;
    width: 750/@rem;
    height: 1334/@rem;
    background: #fff;
    .surpriseitem{
      width: 100%;
      .header{
        position: relative;
        height: 100/@rem;
        width: 750/@rem;
        line-height: 100/@rem;
        box-sizing: border-box;
        padding: 0 20/@rem;
        border-bottom: 2/@rem solid #f3f3f3;

        span{
          display: inline-block;
          &:nth-of-type(1){
            position: absolute;
            left: 20/@rem;
            height: 36/@rem;
            width: 22/@rem;
            color: #333;
            background: url("./img.png") no-repeat;
            background-size: 469/@rem 326/@rem;
            background-position: -402/@rem -20/@rem;
            margin-top: 30/@rem;
          }
          &:nth-of-type(2){
            width: 90%;
            font-size: 36/@rem;
            text-align: center;
            color: #333;
            margin: 0 auto;
          }
          &:nth-of-type(3){
            position: absolute;
            right: 20/@rem;
            top: 0;
            margin-top: 28/@rem;
            width: 36/@rem;
            height: 34/@rem;
            background: url("./img.png") no-repeat;
            background-size: 469/@rem 326/@rem;
            background-position: -434/@rem -20/@rem;
          }
        }
      }
    }
 }

</style>
