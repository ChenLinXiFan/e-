<template>
  <div class="mainContent">
    <div class="title">
      <a href="javascript">
        <img src="./img/a1.jpg" alt="">
      </a>
    </div>
    <div class="banner">
      <ul class="list">
        <li>
          <a href="javascript">
            <img src="./img/b1.jpg" alt="">
          </a>
        </li>
        <li>
          <a href="javascript">
            <img src="./img/b2.jpg" alt="">
          </a>
        </li>
        <li>
          <a href="javascript">
            <img src="./img/b3.jpg" alt="">
          </a>
        </li>
        <li>
          <a href="javascript">
            <img src="./img/b4.jpg" alt="">
          </a>
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
  @rem: 23.4rem;
  .mainContent{
    .title{
      width: 100%;
      height: 50/@rem;
      a{
        width: 100%;
        height: 100%;
        img{
          width: 100%;
          height: 100%;
        }
      }
    }

  }

</style>
