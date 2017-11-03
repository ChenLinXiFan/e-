<template>
  <div class="footernav">
    <ul class="list">
      <li>
        <a href="javascript:;"></a>
      </li>
      <li>
        <a href="javascript:;"></a>
      </li>
      <li>
        <a href="javascript:;"></a>
      </li>
      <li>
        <a href="javascript:;"></a>
      </li>
    </ul>
  </div>

</template>

<script>
  export default{

  }
</script>

<style lang="less" rel="stylesheet/less">
  @import '../../common/minins';
  @rem: 23.4rem;
  .footernav{
    border-top: 1/@rem solid #e7e7e7;
    height: 45/@rem;
    line-height: 45/@rem;
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    z-index: 100;
    background: #fff;
    ul{
      .clearfix();
      li{
        float: left;
        width: 25%;
        height: 55/@rem;
        text-align: center;
        a{
          display: inline-block;
          margin: 0 auto;
          height: 40/@rem;
          width: 42/@rem;
          margin-top: 2/@rem;
          background: url("./img.png") no-repeat;
          background-size: 234/@rem 163/@rem;
        }
        &:nth-of-type(1){
          a{
            background-position: 0 0;
          }
        }
        &:nth-of-type(2){
          a{
            background-position: -85/@rem -41/@rem;
          }
        }
        &:nth-of-type(3){
          a{
            background-position: -85/@rem -81/@rem;
          }
        }
        &:nth-of-type(4){
          a{
            background-position: -85/@rem -122/@rem;
          }
        }
      }
    }

  }


</style>
