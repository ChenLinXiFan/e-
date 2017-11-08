<template>
  <div>
    <div class="mainContent_wrap" ref="mainContent_wrap">
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
        <presale :preselltitle="preselltitle"
                 :presellitem="presellitem"
                 :saymonday="saymonday"
                 :wantbuytitle="wantbuytitle"
                 :abroadlist1="abroadlist1"
                 :abroadlist2="abroadlist2"
                 :homelist1="homelist1"
                 :homelist2="homelist2">
        </presale>
        <specialcolumn :specialtitle="specialtitle"
                       :specialitem="specialitem"
                       :videotitle="videotitle"
                       :video="video" >
        </specialcolumn>
      </div>
    </div>

  </div>
</template>

<script>
  import banner from '../banner/banner.vue'
  import columnnav from '../columnnav/columnnav.vue'
  import surpriseday from '../surpriseday/surpriseday.vue'
  import presale from '../presale/presale.vue'
  import specialcolumn from '../specialcolumn/specialcolumn.vue'

  import axios from 'axios'
  import BScroll from 'better-scroll'
  export default{
    data () {
      return {
        datas: [],
        bannerTitle: {},
        bannerItems: [],
        bannerBag: {},
        navscolumn: [],
        saletitle: {},
        saleitem: {},
        preselltitle: {},
        presellitem: [],
        saymonday: {},
        wantbuytitle: {},
        abroadlist1: [],
        abroadlist2: [],
        homelist1: [],
        homelist2: [],
        specialtitle: {},
        specialitem: [],
        videotitle: {},
        video: {}
      }
    },
    mounted () {
      axios.get('/api/datas')
        .then(response => {
          const result = response.data
          if (result.code === 0) {
            this.datas = result.data
            //banner组件用到的数据
            this.bannerTitle = this.datas[0].value[0]
            this.bannerItems = this.datas[1].value
            this.bannerBag = this.datas[2].value[0]
            //columnnav组件用到的数据
            this.navscolumn = this.datas[3].menus
            this.saletitle = this.datas[4].value[0]
            this.saleitem = this.datas[5].value[0]
            //presale组件用到的数据
            this.preselltitle = this.datas[7].value[0]
            this.presellitem = this.datas[8].value
            this.saymonday = this.datas[9].value[0]

            this.wantbuytitle = this.datas[10].value[0]
            this.abroadlist1 = this.datas[11].content_images
            this.abroadlist2 = this.datas[12].content_images
            this.homelist1 = this.datas[13].content_images
            this.homelist2 = this.datas[14].content_images

            //special组件用到的数据
            this.specialtitle = this.datas[15].value[0]
            this.specialitem = this.datas[16].content_images
            this.videotitle = this.datas[17].value[0]
            this.video = this.datas[18].value[0]

            // 将回调延迟到下次 DOM 更新循环之后执行
            this.$nextTick(() => {
              this._initScroll()
            })
          }
        })
    },
    methods: {
      _initScroll(){
        new BScroll(this.$refs.mainContent_wrap, {
          click: true //触发点击
        })
      }
    },
    components: {
      banner,
      columnnav,
      surpriseday,
      presale,
      specialcolumn
    }

  }
</script>

<style lang="less" rel="stylesheet/less">
  @rem: 46.8rem;
  .mainContent_wrap{
    position: absolute;
    top: 172/@rem;
    left: 0;
    height: 1072/@rem;

  }

</style>
