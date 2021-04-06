<template>
  <div class="container">
      <Pagebanner keystr="pro"/>
      <div class="pro-list">
          <div class="pro-item" id="pro1">
              <img class="bg-img" src="~/assets/img/m/pro_1.png" alt=""/>
              <div class="pro-mask"></div>
              <div class="pro-info-container">
                <div class="pro-title">Kempinski The One Suites Hotel Shanghai Dowtown</div>
                <div class="pro-desc">The hotel is located at No.601 Fengyang Road, Jing'an District, just a few steps away from the top business circle Westgate Plaza, CITIC Pacific Plaza and Plaza 66, with Metro Lines 1 and 2 on its left and right. Such geographical advantage, together with the effort of Kempinski hotel management brand, makes it become the top hotel apartment in downtown Shanghai.</div>
                <div class="pro-btn" @click="toDetail('https://www.kempinski.com/zh-cn/shanghai/the-one-executive-suites/')">Learn More</div>
            </div> 
          </div>
          <div class="pro-item" id="pro2">
              <img class="bg-img" src="~/assets/img/m/pro_2.png" alt=""/>
              <div class="pro-mask"></div>
              <div class="pro-info-container">
                <div class="pro-title">Surpass space/ Inspace</div>
                <div class="pro-desc">In 2019, the opening of Beijing Guang 'anmen Inspace marked the successful entry of the urban renewal project of Jinhe Group into the Beijing market, helping the Group to expand out of the Yangtze River Delta region.</div>
                <div class="pro-btn" @click="toDetail('http://www.iyuejie.com/#/home')">Learn More</div>
            </div>
          </div>
          <div class="pro-item" id="pro3">
              <img class="bg-img" src="~/assets/img/m/pro_3.png" alt=""/>
              <div class="pro-mask"></div>
              <div class="pro-info-container">
                <div class="pro-title">Shan Kang Courtyard </div>
                <div class="pro-desc">Renewal debut in August 2020, it is located in the core area of old Jing'an. It is a typical case run and managed by Jinhe Asset Management and Golden Union. It enhances property value through design transformation and comprehensive operation and management capabilities, and creates a leading modern lifestyle classic neighborhood.</div>
                <div class="pro-btn" @click="toDetail2('/product/1')">Learn More</div>
            </div>
          </div>
          <div class="pro-item" id="pro4">
              <img class="bg-img" src="~/assets/img/m/pro_4.png" alt=""/>
              <div class="pro-mask"></div>
              <div class="pro-info-container">
                <div class="pro-title">Surpass Space Jinhe Shang Cit</div>
                <div class="pro-desc">The project is located in the core area of Caohejing, formerly known as Shanghai Jinxing TV Factory and later as Surpass Space Creative Park. It is Jinhe's first project of urban renewal. Starting in 2019, the Surpass Space Creative Park will be redesigned and transformed to a large-scale complex integrating neighborhood communities, commercial offices, and business leisure.</div>
                <div class="pro-btn" @click="toDetail('http://www.iyuejie.com/#/home')">Learn More</div>
            </div>
          </div>
          <div class="pro-item" id="pro5">
              <img class="bg-img" src="~/assets/img/m/pro_5.png" alt=""/>
              <div class="pro-mask"></div>
              <div class="pro-info-container">
                    <div class="pro-title">baseLIVING</div>
                    <div class="pro-desc">At the end of 2020, baseLIVING has operated and managed 16 mid-to-high-end serviced apartment projects in Shanghai, with a total of 1455 apartments. It is currently the operating brand that manages the largest number of mid-to-high-end service apartments in the Shanghai market. Base will continue to be committed to becoming a mid-to-high-end serviced apartment operator leading the modern lifestyle.</div>
                    <div class="pro-btn" @click="toDetail('http://www.iyuejie.com/#/home')">Learn More</div>
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
        },
        toDetail2(path){
            path = (this.lan == 'en' ? '/en' :'')+path;
            window.open(path);
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
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 4;
                overflow: hidden;
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