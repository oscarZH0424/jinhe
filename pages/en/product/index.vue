<template>
  <div class="container">
      <Pagebanner keystr="pro"/>
      <div class="pro-list">
          <div class="pro-item" id="pro1">
              <img class="bg-img" src="~/assets/img/pro_1.png" alt=""/>
              <div class="pro-mask"></div>
              <div class="pro-info-container"> 
                <div class="pro-title">Kempinski The One Suites <br> Hotel Shanghai Downtown</div>
                <div class="pro-desc">The hotel is located at No.601 Fengyang Road, Jing'an District, adjacent to the bustling business circle Plaza 66, CITIC Pacific Plaza and Westgate Plaza, with Metro Lines 1, Line 2, Line 12 and Line 13 nearby that is convenient for travel and is accessible by walking. Shanghai Golden Union Investment and Kempinski Hotels co-create a unique service apartment in downtown Shanghai.</div>
                <div class="pro-btn" @click="toDetail('https://www.kempinski.com/zh-cn/shanghai/the-one-executive-suites/')">Learn More</div>
            </div>
          </div>
          <div class="pro-item" id="pro2">
              <img class="bg-img" src="~/assets/img/pro_2.png" alt=""/>
              <div class="pro-mask"></div>
              <div class="pro-info-container">
                <div class="pro-title">Infinity Space Beijing</div>
                <div class="pro-desc">In 2019, the opening of Infinity Space Beijing marked the successful entry into the Beijing market. The Group to scale out of the Yangtze River Delta region to northern part of China.</div>
                <div class="pro-btn" @click="toDetail('http://www.iyuejie.com/#/home')">Learn More</div>
            </div>
          </div>
          <div class="pro-item" id="pro3">
              <img class="bg-img" src="~/assets/img/pro_3.png" alt=""/>
              <div class="pro-mask"></div>
              <div class="pro-info-container">
                <div class="pro-title">Surpass Space Shankang Alley</div>
                <div class="pro-desc">Renewal debut in August 2020, it is located in the core area of Jing’an district. It is a typical case run and managed by Golden Union Asset Management. It enhances property value through design and comprehensive management, and creates a modern lifestyle to the neighborhood.</div>
                <div class="pro-btn" @click="toDetail2('/product/1')">Learn More</div>
            </div>
          </div>
          <div class="pro-item" id="pro4">
              <img class="bg-img" src="~/assets/img/pro_4.png" alt=""/>
              <div class="pro-mask"></div>
              <div class="pro-info-container">
                <div class="pro-title">Surpass Space <br> Golden Union Shang City</div>
                <div class="pro-desc">The project is located in the core area of Caohejing, formerly known as Shanghai Jinxing TV Factory and later as Surpass Space Creative Park. It is Golden Union's first project of urban renewal. Starting in 2019, the Surpass Space Creative Park will be redesigned and transformed into a large-scale complex integrated with neighborhood communities, commercial offices, business and leisure.</div>
                <div class="pro-btn" @click="toDetail('http://www.iyuejie.com/#/home')">Learn More</div>
            </div>
          </div>
          <div class="pro-item" id="pro5">
              <img class="bg-img" src="~/assets/img/pro_5.png" alt=""/>
              <div class="pro-mask"></div>
              <div class="pro-info-container">
                    <div class="pro-title">base Serviced Apartment</div>
                    <div class="pro-desc">Base serviced apartment has managed and operated total number of 17 projects with 1532 apartments in city center of Shanghai and Beijing at the beginning of 2021. It currently manages the largest number of serviced apartments in the Shanghai market. base service apartment will continue to be the brand that leading the modern lifestyle and providing high quality of life.</div>
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
            this.$router.push({
                path:`/en${path}`
            })
        }
    }
}
</script>

<style lang="scss" scoped>
.container{
    margin:0 auto;
    width:100%;
    margin-top:108px;
    overflow-x:hidden ;
}

.pro-list{
    .pro-item{
        position: relative;
        width:100%;
        height:1080px;
        height:56.25vw;
        .bg-img{
            position:absolute;
            height:1080px;
            height:56.25vw;
            bottom:0;
        }
        .pro-mask{
            position:absolute;
            height:1080px;
            height:56.25vw;
            mix-blend-mode: multiply;
        }
        .pro-info-container{
            position:absolute;
            top:212px;
            top:10.04167vw;
            .pro-title{
                position: relative;
                opacity: 1;
                font-size: 62px;
                font-family: PingFangSC, PingFangSC-Semibold;
                font-weight: 600;
                text-align: left;
                color: #ffffff;
                line-height: 93px;
                margin-bottom:74px;
                font-size: 3.229167vw;
                line-height: 4.84375vw;
                margin-bottom:3.854167vw;
                &::after{
                    position:absolute;
                    content:' ';
                    bottom:-18px;
                    width:100px;
                    height:4px;
                    background: #8f6d39;
                    bottom:-0.9375vw;
                    width:5.2083vw;
                    height:0.2083vw;
                }
            }
            .pro-desc{
                width:566px;
                opacity: 1;
                font-size: 24px;
                font-family: PingFangSC, PingFangSC-Regular;
                font-weight: 400;
                text-align: left;
                color: #ffffff;
                line-height: 42px;
                margin-bottom:50px;

                width:29.479167vw;
                font-size: 1.25vw;
                line-height: 2.1875vw;
                margin-bottom:2.604167vw;

            }
            .pro-btn{
                display: inline-block;
                width:214px;
                height:66px;
                line-height:66px;
                background: white;
                text-align: center;
                opacity: 1;
                font-size: 20px;
                font-family: PingFangSC, PingFangSC-Medium;
                font-weight: 500;
                color: #b21e27;

                width:11.14583vw;
                height:3.4375vw;
                line-height:3.4375vw;
                font-size: 1.04167vw;

            }
        }
        &:nth-child(odd){
            .bg-img{
                right:0;
            }
            .pro-mask{
                left:0;
                top:0;
                border-bottom: 1080px solid #b21e27;
                border-bottom: 56.25vw solid #b21e27;

                border-left: 0px solid transparent;
                border-right: 400px solid transparent; 
                border-right: 20.83vw solid transparent; 

                width: 1320px;
                width: 68.75vw;

            }
            .pro-info-container{
                left:241px;
                left:10.552083vw;

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
                border-bottom: 1080px solid #b21e27;
                border-bottom: 56.25vw solid #b21e27;

                border-right: 0px solid transparent;
                border-left: 400px solid transparent; 
                border-left: 20.83vw solid transparent; 

                width: 1320px;
                width: 68.75vw;


            }
            .pro-info-container{
                right:241px;
                right:10.552083vw;
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