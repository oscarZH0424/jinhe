<template>
  <div class="container">
    <a-carousel>
      <Banner v-for="(banner,index) in banners" :info="banner" :key="index"/>
    </a-carousel>
    <div class="desc-panel">
      <img class="bg-img bl wow fadeIn" :src="configObj[1].mobileCoverUrl || require('~/assets/img/m/desc_bg_1.png')" alt=""/>
      <div class="panel-mask br wow fadeInRight"  data-wow-delay="1s"></div>
      <div class="desc-info p1 wow fadeInUp" data-wow-delay="2s">
        <div class="desc-title">{{configObj[1].text1 || 'Golden Union Asset Management Co., Ltd.'}}</div>
        <div class="desc-text">{{configObj[1].text2 || 'Founded in 2020, Golden Union Asset Management Co., Ltd. is an urban renewal, income-based property investment and asset management platform jointly established by Golden Union and Warburg Pincus. It aims to activating the existing assets to create more value and infusing vitality into cities to stimulate the economic growth.'}}</div>
      </div> 
    </div>
    <div class="desc-panel" id="glgm">
      <img class="bg-img br  wow fadeIn" :src="configObj[2].mobileCoverUrl || require('~/assets/img/m/desc_bg_2.png')" alt=""/>
      <div class="panel-mask bl wow fadeInLeft" data-wow-delay="1s"></div>
      <div class="desc-info p2 wow fadeInUp" data-wow-delay="2s">
        <div class="desc-title" style="margin-bottom:50px;">{{configObj[2].text || 'Management  Scale'}}</div>
        <div class="desc-label-group">
          <div class="label-item" >
            <div class="label-val">{{configObj[2].text1 || '¥ 15.1 billion'}}</div>
            <div class="label-name">{{configObj[2].text2 || 'Total AUM'}}</div>
          </div>
          <div class="label-item" style="margin-right:10px;">
            <div class="label-val">{{configObj[2].text5 || '396,000 sqm'}}</div>
            <div class="label-name">{{configObj[2].text6 || 'GFA'}}</div>
          </div>
          <div class="label-item" style="margin-right:45px; ">
            <div class="label-val">{{configObj[2].text3 || '19'}}</div>
            <div class="label-name">{{configObj[2].text4 || 'Projects'}}</div>
          </div>
          <div class="label-item">
            <div class="label-val">{{configObj[2].text7 || '2'}}</div>
            <div class="label-name">{{configObj[2].text8 || 'Cities'}}</div>
          </div>
        </div>
        <div class="desc-tip">{{configObj[2].text9 || '*By the date of 30th Dec. 2020'}}</div>
      </div>
    </div>
    <div class="desc-panel"  id="dytyy">
      <img class="bg-img br" :src="configObj[3].mobileCoverUrl || require('~/assets/img/m/desc_bg_5.png')" alt=""/>
      <div class="desc-dark">
        <div class="wow fadeInUp">
          <div class="desc-title">{{configObj[3].text || 'Multi-format Operation'}}</div>
          <div class="desc-subtitle">{{configObj[3].text1 || 'Accurate positioning of brand products, good at multi-format operation, revitalizing the community, and comprehensively enhancing the value of property assets.'}}</div>
          <div class="desc-intro-group">
            <div class="desc-intro-item">
              <div class="intro-title" v-html="brStr(configObj[3].text2 || 'base Serviced Apartment')"></div>
              <div class="intro-text">{{configObj[3].text3 || 'An inspirational living space that serves different kinds of customer. Through the contemporary design, revitalizing the old communities and buildings.'}}</div>
            </div>
            <div class="desc-intro-item">
              <div class="intro-title" v-html="brStr(configObj[3].text4 || 'Tulu Co-Living Apartment')"></div>
              <div class="intro-text">{{configObj[3].tex5 || 'Design-led modern urban co-living space is built to inspire and promote communication among young sprits.'}}</div>
            </div>
            <div class="desc-intro-item">
              <div class="intro-title" v-html="brStr(configObj[3].text6 || 'Surpass Space <br> Office Space')"></div>
              <div class="intro-text">{{configObj[3].tex7 || 'It provides different sizes office space to meet the different modern office needs of enterprise, covering various types of business office buildings, boutique offices, creative space etc.'}}</div>
            </div>
            <div class="desc-intro-item">
              <div class="intro-title" v-html="brStr(configObj[3].text8 || 'Surpass / Infinity Space Community Business')"></div>
              <div class="intro-text over">{{configObj[3].tex9 || 'It’s a modern life style block with the distinctive supporting community commerce, provides the convenience for the office tenants and surrounding communities, and upgrades the value of the property.'}}</div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
    <div class="desc-panel long" id="hzf">
      <img class="bg-img tl wow fadeIn" src="~/assets/img/m/desc_bg_3.png" alt=""/>
      <div class="panel-mask tr wow fadeInRight"  data-wow-delay="1s"></div>
      <div class="desc-info p3 wow fadeInUp" data-wow-delay="2s">
        <div class="desc-title">{{configObj[4].text || 'Partners'}}</div>
        <div class="multi-intro">
          <div class="multi-main">
            <img class="main-logo" src="~/assets/img/logo_1.png" alt=""/>
            <div class="main-title">{{configObj[4].text1 || 'A leading global private equity firm'}}</div>
            <div class="main-subtitle">{{configObj[4].text2 || 'Since its establishment in 1966, it has built close partnerships with thousands of entrepreneurs and management teams throughout the world, and has accumulated rich industry experience.'}}</div>
            <div class="text-group">
              <div class="text-item">
                <div class="text-title">{{configObj[4].text3 || '50 YEARS'}}</div>
                <div class="text-info" style="text-align:left;">{{configObj[4].text4 || 'INVESTING'}}</div>
              </div>
              <div class="text-item">
                <div class="text-title">{{configObj[4].text5 || '$37 Billion'}}</div>
                <div class="text-info">{{configObj[4].text6 || 'AUM'}}</div>
              </div>
              <div class="text-item">
                <div class="text-title">{{configObj[4].text7 || '700'}}</div>
                <div class="text-info">{{configObj[4].text8 || 'COMPANIES SINCE INCEPTION'}}</div>
              </div>
              <div class="text-item">
                <div class="text-title">{{configObj[4].text9 || '120'}}</div>
                <div class="text-info">{{configObj[4].text10 || 'PORTFOLIO COMPANIES'}}</div>
              </div>
              <div class="text-item no">
                <div class="text-title">{{configObj[4].text11 || '$48 billion'}}</div>
                <div class="text-info">{{configObj[4].text12 || 'INVESTMENTS'}}</div>
              </div>
              <div class="text-item no">
                <div class="text-title">{{configObj[4].text13 || '1994'}}</div>
                <div class="text-info">{{configObj[4].text14 || 'MARKS ITS INCEPTION IN CHINA'}}</div>
              </div>
            </div>
          </div>
          <div class="multi-sub">
            <div class="sub-intro-item">
              <img style="margin-top:13px;height:30px;" src="~/assets/img/logo_2.png" alt=""/>
              <div class="sub-text" style="margin-top:13px;"><span>{{configObj[4].text15 || ''}}</span>{{configObj[4].text16 || ''}}</div>
            </div>
            <div class="sub-intro-item">
              <img style="margin-top:18px;height:19px;" src="~/assets/img/logo_3.png" alt=""/>
              <div class="sub-text" style="margin-top:20px;"><span>{{configObj[4].text17 || ''}}</span>{{configObj[4].text18 || ''}}</div>
            </div>
            <div class="sub-intro-item">
              <img style="margin-top:9px;height:32px;" src="~/assets/img/logo_4.png" alt=""/>
              <div class="sub-text" style="margin-top:12px;"><span>{{configObj[4].text19 || ''}}</span>{{configObj[4].text20 || ''}}</div>
            </div>
            <div class="sub-intro-item">
              <img  style="margin-top:0px;height:50px;" src="~/assets/img/logo_5.png" alt=""/>
              <div class="sub-text" style="margin-top:5px;"><span>{{configObj[4].text21 || ''}}</span>{{configObj[4].text22 || ''}}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="desc-panel" id="syms">
      <img class="bg-img br wow fadeIn" :src="configObj[5].mobileCoverUrl || require('~/assets/img/m/desc_bg_4.png')" alt=""/>
      <div class="panel-mask tl wow fadeInLeft" data-wow-delay="1s"></div>
      <div class="desc-info p4 wow fadeInUp" data-wow-delay="2s">
        <div class="desc-title" style="margin-bottom:10px;">{{configObj[5].text || 'Business Model'}}</div>
        <div class="desc-subtitle" style="margin-bottom:33px;">{{configObj[5].text1 || 'Golden Union Asset Management’s Full Lifecycle Control System'}}<br>{{configObj[5].text2 || '"One-stop" Asset Management Service'}}</div>
        <div class="tag-group">
          <div class="tag-item">
            <div class="tag-text" v-for="(tag,index) in configObj[5].text3.split('\n')" :key="index">{{tag}}</div>
          </div>
          <div class="tag-item">
            <div class="tag-text" v-for="(tag,index) in configObj[5].text4.split('\n')" :key="index">{{tag}}</div>
          </div>
          <div class="tag-item">
            <div class="tag-text" v-for="(tag,index) in configObj[5].text5.split('\n')" :key="index">{{tag}}</div>
          </div>
          <div class="tag-item">
            <div class="tag-text" v-for="(tag,index) in configObj[5].text6.split('\n')" :key="index">{{tag}}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="desc-panel" id="yyys">
      <img class="bg-img br" :src="configObj[6].mobileCoverUrl || require('~/assets/img/m/desc_bg_5.png')" alt=""/>
      <div class="desc-dark">
        <div class="wow fadeInUp">
          <div class="desc-title" style="margin-bottom:40px;margin-top:80px;">{{configObj[6].text || 'Operational Advantages'}}</div>
          <div class="desc-intro-group">
            <div class="desc-intro-item">
              <div class="intro-title no-border">{{configObj[6].text1 || 'Resource'}}</div>
              <div class="intro-text bold" v-html="brStr(configObj[6].text2 || 'High-quality resource integration capabilities<br>Advantages of resource industry layout<br>Scale advantage and brand advantage')"></div>
              <div class="intro-sub-text" v-html="brStr(configObj[6].text21)"></div>
            </div>
            <div class="desc-intro-item">
              <div class="intro-title no-border">{{configObj[6].text3 || 'Capital'}}</div>
              <div class="intro-text bold" v-html="brStr(configObj[6].text4 || 'Strong shareholder background and capital strength<br>Golden Union, a comprehensive real estate group with four major business sectors<br>Warburg Pincus, one of the oldest private equity firms in the United States')"></div>
              <div class="intro-sub-text" v-html="brStr(configObj[6].text41)"></div>
            </div>
            <div class="desc-intro-item">
              <div class="intro-title no-border">{{configObj[6].text5 || 'Market'}}</div>
              <div class="intro-text bold" v-html="brStr(configObj[6].text6 || 'Sharp market insight<br>Precise market positioning')"></div>
              <div class="intro-sub-text" v-html="brStr(configObj[6].text61)"></div>
            </div>
            <div class="desc-intro-item">
              <div class="intro-title no-border">{{configObj[6].text7 || 'Innovation'}}</div>
              <div class="intro-text bold" v-html="brStr(configObj[6].text8 || 'Product innovation ability<br>Optimized business portfolio<br>Self-contained design and reconstruction capabilities')"></div>
              <div class="intro-sub-text" v-html="brStr(configObj[6].text81)"></div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  </div>
</template>

<script>
import bus from '@/assets/js/eventBus';
import axios from 'axios'
export default {
  async  asyncData ({ params }) {//请求
    let configObj = {};
    let banners = [];
    let {data:{code,data}} = await axios.post('http://www.dream-fly.com.cn:8383/ipe/screen',{data:{status:true},start:0,limit:1000});
    if(code == 0){
      data.forEach(config => {
        configObj[config.orderNum] = Object.assign(config,JSON.parse(config.config));
      });
    }
    let {data:{code:code2,data:data2}} = await axios.post('http://www.dream-fly.com.cn:8383/banner/screen',{data:{status:true,belong:'home',types:['mobile']},start:0,limit:1000});
    if(code2 == 0){
     banners = data2;
    }
    return { configObj ,banners}

	},
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
        brStr(val){
          return val ? val.split('\n').join('<br>') : '';
        }
    },
}
</script>

<style lang="scss" scoped>

.container {
  width:100%;
  margin: 0 auto;
  margin-top:128px;
  min-height: 90vh;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;
  text-align: center;
}
.desc-panel{
  position: relative;
  width:100%;
  min-height:1108px;
  overflow: hidden;
  .panel-mask{
    position:absolute;
    height:1108px;
    width:100%;
    top:0;
    mix-blend-mode: multiply;
    &.br{
      border-bottom:1108px solid rgba(128,0,0,.8);
      border-left:280px solid transparent;
      border-right:0px solid transparent;
      right:0;
    }
    &.bl{
      border-bottom:1108px solid rgba(128,0,0,.8);
      border-right:280px solid transparent;
      border-left:0px solid transparent;
      left:0;
    }
    &.tr{
      border-top:1108px solid rgba(128,0,0,.8);
      border-left:280px solid transparent;
      border-right:0px solid transparent;
      right:0;
    }
    &.tl{
      border-top:1108px solid rgba(128,0,0,.8);
      border-right:280px solid transparent;
      border-left:0px solid transparent;
      left:0;
    }
  }
  &.long{
    height:1709px;
    .panel-mask{
      position:absolute;
      height:1709px;
      width:100%;
      top:0;
      &.br{
        border-bottom:1709px solid rgba(128,0,0,.8);
        border-left:280px solid transparent;
        border-right:0px solid transparent;
        right:0;
      }
      &.bl{
        border-bottom:1709px solid rgba(128,0,0,.8);
        border-right:280px solid transparent;
        border-left:0px solid transparent;
        left:0;
      }
      &.tr{
        border-top:1709px solid rgba(128,0,0,.8);
        border-left:280px solid transparent;
        border-right:0px solid transparent;
        right:0;
      }
      &.tl{
        border-top:1709px solid rgba(128,0,0,.8);
        border-right:280px solid transparent;
        border-left:0px solid transparent;
        left:0;
      }
    }
  }
  .bg-img{
    position:absolute;
    width:100%;
    &.bl{
      bottom:0px;
      left:0;
    }
    &.br{
       bottom:0px;
       right:0;
    }
    &.tl{
       top:0px;
       left:0;
    }
    &.tr{
       top:0px;
       right:0;
    }
  }
  .desc-info{
    position:absolute;
    &.p1{
      top:264px;
      right:45px;
      width:426px;
      .desc-title{
        text-align: right;
        font-size:40px;
        line-height:58px;
        margin-bottom:40px;
      }
      .desc-text{
        text-align: right;
      }
    }
    &.p2{
      left:45px;
      top:178px;
    }
    &.p3{
      right:24px;
      top:100px;
      .desc-title{
        text-align: right;
      }
    }
    &.p4{
      top:126px;
      left:45px;
    }

    .desc-title{
      opacity: 1;
      font-size: 50px;
      font-family: PingFangSC, PingFangSC-Semibold;
      font-weight: 600;
      color: #ffffff;
      text-align: left;
      line-height: 70px;
      margin-bottom:28px;
    }
    .desc-subtitle{
      opacity: 1;
      font-size: 24px;
      font-family: PingFangSC, PingFangSC-Regular;
      font-weight: 400;
      text-align: left;
      color: #ffffff;
      line-height: 33px;
    }
    .desc-text{
      opacity: 1;
      font-size: 26px;
      font-family: PingFangSC, PingFangSC-Regular;
      font-weight: 400;
      text-align: left;
      color: #ffffff;
      line-height: 36px;
    }
    .desc-label-group{
      display: flex;
      flex-flow: row wrap;
      justify-content: flex-start;
      align-items: flex-start;
      width:377px;
      .label-item{
        position: relative;
        margin-bottom:55px;
        &::after{
          position:absolute;
          content:' ';
          width:111px;
          height:4px;
          background:#8f6d39;
          top:-18px;
          left:0px;
        }
        .label-val{
          opacity: 1;
          font-size: 42px;
          font-family: Arial, Arial-BoldMT;
          font-weight: bold;
          text-align: left;
          color: #ffffff;
          line-height: 48px;
        }
        .label-name{
          opacity: 1;
          font-size: 29px;
          font-family: PingFangSC, PingFangSC-Regular;
          font-weight: 400;
          text-align: left;
          color: #ffffff;
          line-height: 41px;
        }
      }
    }
    .desc-tip{
      margin-top:50px;
      opacity: 1;
      font-size: 18px;
      font-family: LucidaGrande;
      text-align: left;
      color: #ffffff;
      line-height: 21px;
    }
    .multi-intro{
      display: flex;
      flex-flow:column nowrap;
      justify-content: center;
      align-items: stretch;
      .multi-main{
        width:701px;
        height:702px;
        background: white;
        border:1px solid #898989;
        text-align:center;
        padding:60px 16px;
        .main-logo{
          width:265px;
        }
        .main-title{
          opacity: 1;
          font-size: 20px;
          font-family: PingFangSC, PingFangSC-Regular;
          font-weight: 400;
          color: #231815;
          line-height: 28px;
          margin-top:19px;
        }
        .main-subtitle{
          margin:0 auto;
          width:549px;
          opacity: 1;
          font-size: 18px;
          font-family: LucidaGrande;
          text-align: center;
          color: #898989;
          line-height: 21px;
          margin-top:11px;
          margin-bottom:25px;
        }
        .text-group{
          border-top:1PX dashed #898989;
          padding-top:25px;
          display: flex;
          flex-flow: row wrap;
          justify-content: center;
          width:632px;
          align-items: center;
          .text-item{
            width:212px;
            height:112px;
            display: flex;
            flex-flow:column;
            justify-content: flex-start;
            align-items: center;
            padding:0 30px;
            box-sizing: content-box;
            &:nth-child(odd){
              border-right:1PX dashed #c5c1c1;
              border-bottom:1PX dashed #c5c1c1;
            }
            &:nth-child(even){
              border-bottom:1PX dashed #c5c1c1;
            }
            &.no{
              border-bottom:0px !important;
            }
            .text-title{
              opacity: 1;
              font-size: 34px;
              font-family: Arial, Arial-BoldMT;
              font-weight: BoldMT;
              color: #af1f22;
              line-height: 39px;
              text-align: center;
              white-space: nowrap;
              margin-top:20px;
              
            }
            .text-info{
              opacity: 1;
              font-size: 18px;
              font-family: PingFangSC, PingFangSC-Regular;
              font-weight: 400;
              text-align: center;
              color: #898989;
              line-height: 25px;
            }
          }
        }
      }
      .multi-sub{
        width:701px;
        min-height:331px;
        display: flex;
        flex-flow:row wrap;
        justify-content: space-between;
        align-items: center;
        margin-top:40px;
        .sub-intro-item{
          width:341px;
          height:320px;
          margin-bottom:39px;
          background: white;
          padding:30px;
          border:1px solid #898989;
          &:nth-child(2n){
            margin-right:0px;
          }
          .sub-text{
            text-align: left;
            height:130px;
            opacity: 1;
            font-size: 16px;
            font-family: PingFangSC, PingFangSC-Regular;
            font-weight: 400;
            color: #000;
            line-height: 28px; 
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 5;
            overflow: hidden;
            >span{
              color: #af1e23;
            }
          }
        }
      }

    }
    .tag-group{
      width:550px;
      display: flex;
      flex-flow: row wrap;
      justify-content: space-between;
      align-items: center;
      .tag-item{
        width:260px;
        height:244px;
        margin-bottom:38px;
        background: rgba(255,255,255,.85);
        display: flex;
        flex-flow: column nowrap;
        justify-content: center;
        align-items: center;
        &:nth-child(2n){
          margin-right:0px;
        }
        .tag-text{
          width:100%;
          opacity: 1;
          font-size: 34px;
          font-family: PingFangSC, PingFangSC-Regular;
          font-weight: 400;
          color: #af1e23;
          line-height: 48px;
          text-align: left;
          padding:0px 20px;
        }
      }
    }
  }
  .desc-dark{
    position: absolute;
    width:100%;
    height:100%;
    background:rgba(0,0,0,.6);
    text-align: center;
    padding:0px 24px;
    .desc-title{
      margin-top:131px;
      opacity: 1;
      font-size: 50px;
      font-family: PingFangSC, PingFangSC-Semibold;
      font-weight: 600;
      color: #ffffff;
      line-height: 70px;
      margin-bottom:26px;
    }
    .desc-subtitle{
      opacity: 1;
      font-size: 24px;
      font-family: PingFangSC, PingFangSC-Regular;
      font-weight: 400;
      color: #ffffff;
      line-height: 33px;
      margin-bottom:84px;
    }
    .desc-intro-group{
      display: flex;
      flex-flow:row wrap;
      justify-content: space-between;
      align-items: center;
      .desc-intro-item{
        width: 342px;
        height: 320px;
        opacity: 1;
        border: 1px solid #898989;
        padding:30px 20px 20px 20px;
        background: rgba(255,255,255,.8);
        margin-bottom:33px;
        .intro-title{
          opacity: 1;
          font-size: 32px;
          font-family: LucidaGrande;
          color: #af1e23;
          line-height: 38px;
          padding-bottom:10px;
          border-bottom:1PX dashed #af1e23 ;
          text-align: left;
          &.no-border{
            padding-bottom:0px;
            border-bottom:0;
          }
        }
        .intro-text{
          margin-top:9px;
          opacity: 1;
          font-size: 16px;
          font-family: PingFangSC, PingFangSC-Regular;
          font-weight: 400;
          color: #231815;
          line-height: 28px;
          text-align: left;
          &.over{
            display: -webkit-box;    
            -webkit-box-orient: vertical;    
            -webkit-line-clamp: 4;    
            overflow: hidden;
          }
          &.bold{
            font-size: 20px;
            line-height: 32px;
          }
        }
        .intro-sub-text{
            margin-top:8px;
            opacity: 1;
            font-size: 18px;
            font-family: PingFangSC, PingFangSC-Regular;
            font-weight: 400;
            color: #727171;
            line-height: 24px;
            text-align: left;
          }
      }
    }
  }
}
</style>
<style>
.ant-carousel {
  width:100%;
}
.ant-carousel  .slick-slider {
  text-align: center;
  height: 1108px !important;
  line-height: 280px !important;
  background: #364d79;
  overflow: hidden;
}

.ant-carousel  .slick-slider h3 {
  color: #fff;
}
.ant-carousel .slick-dots li button{
  width:10px !important;
  height:10px !important;
  margin-right:30px !important;
}
.ant-carousel .slick-dots-bottom{
  bottom:49px !important;
  height:10px !important;
}
.ant-carousel .slick-dots li:last-child button{
  margin-right:0px;
}
.ant-carousel .slick-dots li.slick-active button{
  width:10px !important;
  background: #B21E27;
}
</style>
