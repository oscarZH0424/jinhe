<template>
  <div class="container">
      <Pagebanner keystr="pro"/>
      <div class="pro-list">
          <div class="pro-item" id="pro1">
              <img class="bg-img wow fadeIn" src="~/assets/img/m/pro_1.png" alt=""/>
              <div class="pro-mask wow fadeInLeft" data-wow-delay="1s"></div>
              <div class="pro-info-container wow fadeInUp" data-wow-delay="2s">
                <div class="pro-title">Kempinski The One Suites <br> Hotel Shanghai Downtown</div>
                <div class="pro-desc">The hotel is located at No.601 Fengyang Road, Jing'an District, adjacent to the bustling business circle Plaza 66, CITIC Pacific Plaza and Westgate Plaza, with Metro Lines 1, Line 2, Line 12 and Line 13 nearby that is convenient for travel and is accessible by walking. Shanghai Golden Union Investment and Kempinski Hotels co-create a unique service apartment in downtown Shanghai.</div>
                <div class="pro-btn" @click="toDetail('https://www.kempinski.com/zh-cn/shanghai/the-one-executive-suites/')">Learn More</div>
            </div> 
          </div>
          <div class="pro-item" id="pro2">
              <img class="bg-img wow fadeIn" src="~/assets/img/m/pro_2.png" alt=""/>
              <div class="pro-mask wow fadeInRight"  data-wow-delay="1s"></div>
              <div class="pro-info-container wow fadeInUp" data-wow-delay="2s">
                <div class="pro-title">Infinity Space Beijing</div>
                <div class="pro-desc">In 2019, the opening of Infinity Space Beijing marked the successful entry into the Beijing market. The Group to scale out of the Yangtze River Delta region to northern part of China.</div>
                <div class="pro-btn" @click="toDetail('http://www.iyuejie.com/#/home')">Learn More</div>
            </div>
          </div>
          <div class="pro-item" id="pro3">
              <img class="bg-img wow fadeIn" src="~/assets/img/m/pro_3.png" alt=""/>
              <div class="pro-mask wow fadeInLeft" data-wow-delay="1s"></div>
              <div class="pro-info-container wow fadeInUp" data-wow-delay="2s">
                <div class="pro-title">Surpass Space Shankang Alley</div>
                <div class="pro-desc">Renewal debut in August 2020, it is located in the core area of Jing’an district. It is a typical case run and managed by Golden Union Asset Management. It enhances property value through design and comprehensive management, and creates a modern lifestyle to the neighborhood.</div>
                <div class="pro-btn" @click="toDetail2('/product/1')">Learn More</div>
            </div>
          </div>
          <div class="pro-item" id="pro4">
              <img class="bg-img wow fadeIn" src="~/assets/img/m/pro_4.png" alt=""/>
              <div class="pro-mask wow fadeInRight" data-wow-delay="1s"></div>
              <div class="pro-info-container wow fadeInUp" data-wow-delay="2s">
                <div class="pro-title">Surpass Space <br> Golden Union Shang City</div>
                <div class="pro-desc">The project is located in the core area of Caohejing, formerly known as Shanghai Jinxing TV Factory and later as Surpass Space Creative Park. It is Golden Union's first project of urban renewal. Starting in 2019, the Surpass Space Creative Park will be redesigned and transformed into a large-scale complex integrated with neighborhood communities, commercial offices, business and leisure.</div>
                <div class="pro-btn" @click="toDetail('http://www.iyuejie.com/#/home')">Learn More</div>
            </div>
          </div>
          <div class="pro-item" id="pro5">
              <img class="bg-img wow fadeIn" src="~/assets/img/m/pro_5.png" alt=""/>
              <div class="pro-mask wow fadeInLeft" data-wow-delay="1s"></div>
              <div class="pro-info-container wow fadeInUp" data-wow-delay="2s">
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
        new this.$wow.WOW({live:true}).init();
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