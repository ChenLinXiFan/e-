<template>
  <div>
    <div class="footernav_wrap">
      <ul class="footernav">
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
  </div>


</template>

<script>
  export default{

  }
</script>

<style lang="less" rel="stylesheet/less">
  @import '../../common/minins';
  @rem: 46.8rem;
  .footernav_wrap{
    border-top: 1px solid #e7e7e7;
    height: 90/@rem;
    line-height: 90/@rem;
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    background: #fff;
    z-index: 100;
    .footernav {
      .clearfix();
      li {
        float: left;
        width: 25%;
        height: 110/@rem;
        text-align: center;
        a {
        display: inline-block;
        margin: 0 auto;
        height: 80/@rem;
        width: 84/@rem;
        margin-top: 4/@rem;
        background: url("./img.png") no-repeat;
        background-size: 469/@rem 326/@rem;
      }
        &:nth-of-type(1) {
        a {
          background-position: 0 0;
        }
      }
        &:nth-of-type(2) {
        a {
          background-position: -170/@rem -82/@rem;
        }
      }
        &:nth-of-type(3) {
        a {
          background-position: -170/@rem -162/@rem;
        }
      }
        &:nth-of-type(4) {
        a {
          background-position: -170/@rem -244/@rem;
        }
      }
      }
    }
  }


</style>
