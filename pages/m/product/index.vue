<template>
  <div class="container">
      <Pagebanner keystr="pro"/>
      <div class="pro-list">
          <div class="pro-item" id="pro1">
              <img class="bg-img" src="~/assets/img/m/pro_1.png" alt=""/>
              <div class="pro-mask"></div>
              <div class="pro-info-container">
                <div class="pro-title">上海御锦<br>凯宾斯基全套房酒店</div>
                <div class="pro-desc">酒店位于静安区凤阳路601号，与顶级商圈“梅、泰、恒”咫尺之遥，地铁一、二号线汇聚左右，联袂凯宾斯基酒店管理品牌将其打造为上海市中心顶级酒店公寓。</div>
                <div class="pro-btn" @click="toDetail('https://www.kempinski.com/zh-cn/shanghai/the-one-executive-suites/')">了解详情</div>
            </div>
          </div>
          <div class="pro-item" id="pro2">
              <img class="bg-img" src="~/assets/img/m/pro_2.png" alt=""/>
              <div class="pro-mask"></div>
              <div class="pro-info-container">
                <div class="pro-title">北京广安门<br>越都荟</div>
                <div class="pro-desc">2019年，北京广安门越都荟的开业标志着锦和城市更新项目成功进军北京市场，为集团走出长三角地区开疆扩土。</div>
                <div class="pro-btn" @click="toDetail('http://www.iyuejie.com/#/home')">了解详情</div>
            </div>
          </div>
          <div class="pro-item" id="pro3">
              <img class="bg-img" src="~/assets/img/m/pro_3.png" alt=""/>
              <div class="pro-mask"></div>
              <div class="pro-info-container">
                <div class="pro-title">锦和越界陕康里</div>
                <div class="pro-desc">2020年8月焕新登场，位于老静安的核心区域， 是由锦和资管操盘，锦和商业运营管理的经典案例，通过设计改造和综合运管能力提升物业价值，打造引领现代生活方式的经典街区。</div>
                <div class="pro-btn" @click="toDetail('http://www.iyuejie.com/#/home')">了解详情</div>
            </div>
          </div>
          <div class="pro-item" id="pro4">
              <img class="bg-img" src="~/assets/img/m/pro_4.png" alt=""/>
              <div class="pro-mask"></div>
              <div class="pro-info-container">
                <div class="pro-title">越界锦和尚城</div>
                <div class="pro-desc">位于漕河泾核心区域，前身为上海金星电视机厂， 后为越界创意园，是锦和进入城市更新领域的第一个项目。 <br> 2019年起，对越界创意园重新设计改造，新项目将成为融合街区社区、商业办公、商务休闲为一体的大型综合体。</div>
                <div class="pro-btn" @click="toDetail('http://www.iyuejie.com/#/home')">了解详情</div>
            </div>
          </div>
          <div class="pro-item" id="pro5">
              <img class="bg-img" src="~/assets/img/m/pro_5.png" alt=""/>
              <div class="pro-mask"></div>
              <div class="pro-info-container">
                    <div class="pro-title">base佰舍</div>
                    <div class="pro-desc">2020年底，base佰舍在上海运营管理着中高端服务公寓项目16家共1455套公寓。<br> 是目前上海市场上管理中高端服务公寓数量最多的运营品牌。<br> base将继续致力于成为引领现代生活方式的中高端服务公寓运营商。</div>
                    <div class="pro-btn" @click="toDetail('http://www.iyuejie.com/#/home')">了解详情</div>
                </div>
          </div>
      </div>
  </div>
</template>

<script>
import bus from '@/assets/js/eventBus';
export default {
    mounted() {
      bus.$on('hashchange',()=>{
        setTimeout(()=>{
          if (window.location.hash) {
              this.goAnchor(window.location.hash)
          }
        },10)
      })
      if (window.location.hash) {
          this.goAnchor(window.location.hash)
      }
      
    },
    methods: {
        goAnchor(selector) {
            // 最好加个定时器给页面缓冲时间
            setTimeout(() => {
                // 获取锚点元素
                let anchor = this.$el.querySelector(selector)
                anchor.scrollIntoView()
            }, 500)
        },
        toDetail(link){
            window.open(link);
        }
    }
}
</script>

<style lang="scss" scoped>
.container{
    margin:0 auto;
    width:100%;
    margin-top:128px;
}
.pro-list{
    .pro-item{
        position: relative;
        width:100%;
        height:908px;
        .bg-img{
            position:absolute;
            height:908px;
            bottom:0;
        }
        .pro-mask{
            position:absolute;
            height:908px;
            mix-blend-mode: multiply;
        }
        .pro-info-container{
            position:absolute;
            top:160px;
            .pro-title{
                position: relative;
                width:380px;
                opacity: 1;
                font-size: 50px;
                font-family: PingFangSC, PingFangSC-Semibold;
                font-weight: 600;
                text-align: left;
                color: #ffffff;
                line-height: 70px;
                margin-bottom:53px;
                display: inline-block;
                &::after{
                    position:absolute;
                    content:' ';
                    width:100px;
                    height:4px;
                    bottom:-18px;
                    background: #8f6d39;
                }
            }
            .pro-desc{
                width:380px;
                opacity: 1;
                font-size: 26px;
                font-family: PingFangSC, PingFangSC-Regular;
                font-weight: 400;
                text-align: left;
                color: #ffffff;
                line-height: 45px;
                margin-bottom:30px;
            }
            .pro-btn{
                display: inline-block;
                width:200px;
                height:58px;
                line-height:58px;
                background: white;
                text-align: center;
                opacity: 1;
                font-size: 24px;
                font-family: PingFangSC, PingFangSC-Medium;
                font-weight: 500;
                color: #b21e27;
            }
        }
        &:nth-child(odd){
            .bg-img{
                right:0;
            }
            .pro-mask{
                left:0;
                top:0;
                border-bottom: 908px solid #b21e27;
                border-left: 0px solid transparent;
                border-right: 380px solid transparent; 
                width: 100%;
            }
            .pro-info-container{
                left:45px;
                text-align:left;
                .pro-title{
                    &::after{
                        left:0;
                    }
                }
            }
        }
        &:nth-child(even){
            .bg-img{
                left:0;
            }
            .pro-mask{
                right:0;
                top:0;
                border-bottom: 908px solid #b21e27;
                border-right: 0px solid transparent;
                border-left: 380px solid transparent; 
                width: 100%;
            }
            .pro-info-container{
                right:45px;
                text-align: right;
                .pro-title{
                    text-align: right;
                    &::after{
                        right:0;
                    }
                }
            }
        }
    }
}
</style>