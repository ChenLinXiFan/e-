<template>
  <div>
    <div class="mainContent_wrap">
      <div class="mainContent">
        <banner :bannerTitle = "bannerTitle"
                :bannerItems ="bannerItems"
                :bannerBag = "bannerBag"  >
        </banner>
        <columnnav :navscolumn="navscolumn"
                   :saletitle="saletitle"
                   :saleitem="saleitem" >
        </columnnav>
        <surpriseday></surpriseday>
      </div>
    </div>

  </div>
</template>

<script>
  import banner from '../banner/banner.vue'
  import columnnav from '../columnnav/columnnav.vue'
  import surpriseday from '../surpriseday/surpriseday.vue'
  import axios from 'axios'
  export default{
    data () {
      return {
        datas: [],
        bannerTitle: [],
        bannerItems: [],
        bannerBag: [],
        navscolumn: [],
        saletitle: [],
        saleitem: []
      }
    },
    mounted () {
      axios.get('/api/datas')
        .then(response => {
          const result = response.data
          if (result.code === 0) {
            this.datas = result.data
            this.bannerTitle = this.datas[0].value
            this.bannerItems = this.datas[1].value
            this.bannerBag = this.datas[2].value
            this.navscolumn = this.datas[3].menus
            this.saletitle = this.datas[4].value
            this.saleitem = this.datas[5].value
          }
        })
    },
    components: {
      banner,
      columnnav,
      surpriseday
    }

  }
</script>

<style lang="less" rel="stylesheet/less">
  @rem: 46.8rem;
  .mainContent_wrap{
    margin-top: 172/@rem;
    padding-bottom: 100/@rem;
  }

</style>
